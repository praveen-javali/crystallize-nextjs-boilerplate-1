import React, { useState } from 'react';
import { Image as Img } from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';
import { simplyFetchFromGraph } from 'lib/graph';
import Layout from 'components/layout';
import ShapeComponents from 'components/shape/components';
import toText from '@crystallize/content-transformer/toText';
import getRelativePriceVariants from 'lib/pricing';
import { useLocale } from 'lib/app-config';
import Collection from 'components/item-collection';

import TopicTag from 'components/topic-tag';
import VariantSelector from './variant-selector';
import Buy from './buy';
import query from './query';
import SchemaOrg from './schema';
import Stock from './stock';
import { useT } from 'lib/i18n';

import {
  Inner,
  Media,
  ImgContainer,
  Actions,
  ActionsSticky,
  Title,
  Summary,
  Content,
  Specs,
  Description,
  DescriptionWrapper,
  RelatedContainer
} from './styles';

export async function getData({ asPath, language, preview = null }) {
  const { data } = await simplyFetchFromGraph({
    query,
    variables: {
      path: asPath,
      language,
      version: preview ? 'draft' : 'published'
    }
  });
  return { ...data, preview };
}

export default function ProductPage({ product, preview }) {
  const locale = useLocale();
  const t = useT();
  // Set the selected variant to the default
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.isDefault)
  );
  function onVariantChange(variant) {
    setSelectedVariant(variant);
  }

  const pricing = getRelativePriceVariants({
    variant: selectedVariant,
    locale
  });

  //Find content from the GraphQl response:
  const summaryComponent = product.components?.find(
    (c) => c.name === 'Summary'
  );
  const descriptionComponent = product.components?.find(
    (c) => c.name === 'Description'
  );
  const specs = product.components?.find((c) => c.name === 'Specs');

  const relatedProducts = product.components?.find(
    (c) => c.name === 'Related products'
  )?.content?.items;

  return (
    <Layout
      title={product.name}
      image={selectedVariant?.images?.[0]?.url}
      description={toText(summaryComponent?.content?.json)}
      preview={preview}
    >
      <SchemaOrg {...product} summary={summaryComponent} />
      <Inner>
        <Content>
          <Media>
            {selectedVariant?.images?.map((img) => (
              <ImgContainer
                key={img?.url}
                portrait={
                  img?.variants?.[0].height >= img?.variants?.[0]?.width
                }
              >
                <Img
                  {...img}
                  // sizes={`(max-width: ${screen.sm}px) 400px, 60vw`}
                  alt={product.name}
                />
              </ImgContainer>
            ))}
          </Media>
          <Specs>
            <ShapeComponents components={[specs]} />
          </Specs>
          {descriptionComponent && (
            <Description>
              <DescriptionWrapper>
                <ShapeComponents
                  className="description"
                  components={[descriptionComponent]}
                />
              </DescriptionWrapper>
            </Description>
          )}
        </Content>
        <Actions>
          <ActionsSticky>
            <Title>{product.name}</Title>

            {summaryComponent && (
              <Summary>
                <ContentTransformer {...summaryComponent?.content?.json} />
              </Summary>
            )}
            {product?.topics?.map((topic) => (
              <TopicTag {...topic} key={topic.id} />
            ))}
            {product.variants?.length > 1 && (
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onVariantChange={onVariantChange}
              />
            )}
            <Buy
              product={product}
              selectedVariant={selectedVariant}
              pricing={pricing}
            />
            <Stock selectedVariant={selectedVariant} />
          </ActionsSticky>
        </Actions>
      </Inner>

      <RelatedContainer>
        {Boolean(relatedProducts) && (
          <Collection
            {...{
              items: relatedProducts,
              title: t('product.relatedProduct')
            }}
          />
        )}
      </RelatedContainer>
    </Layout>
  );
}
