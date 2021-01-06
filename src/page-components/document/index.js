import React from 'react';
import Layout from 'components/layout';
import Social from 'components/social';
import { simplyFetchFromGraph } from 'lib/graph';
import ShapeComponents from 'components/shape/components';
import ContentTransformer from 'ui/content-transformer';
import Listformat from 'components/listformat';
import { useT } from 'lib/i18n';
import toText from '@crystallize/content-transformer/toText';
import query from './query';
import TopicTag from 'components/topic-tag';
import {
  Img,
  List,
  H2,
  Related,
  Outer,
  Inner,
  Title,
  Byline,
  Hero,
  HeroContent,
  HeroImage,
  Article,
  Sidebar
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

export default function DocumentPage({ document, preview }) {
  const t = useT();
  const title = document?.components?.find((c) => c.name === 'Title')?.content
    ?.text;
  const description = document?.components?.find((c) => c.name === 'Intro');
  const images = document?.components?.find((c) => c.name === 'Image');
  const relatedProducts = document?.components?.find(
    (c) => c.name === 'Products'
  );
  const body = document?.components?.find((c) => c.name === 'Body');
  const published = new Date(document?.publishedAt);
  const topics = document?.topics;

  return (
    <Layout
      title={title || document.name}
      description={toText(description?.content?.json)}
      image={images?.content?.images?.[0]?.url}
      preview={preview}
    >
      <Outer>
        <Hero>
          <HeroContent>
            <Byline>
              {!!topics && (
                <span>
                  {topics?.map((topic) => (
                    <TopicTag {...topic} key={topic.id} />
                  ))}
                </span>
              )}
              <span>{`${published.toDateString()}`}</span>
            </Byline>
            <Title>{title || document.name}</Title>
            <ContentTransformer {...description?.content?.json} />
          </HeroContent>
          <Social />
        </Hero>
        <Inner>
          <Article>
            <HeroImage>
              {images?.content?.images?.map((img, i) => (
                <Img
                  key={img.url}
                  {...img}
                  alt={img.altText}
                  sizes={i > 0 ? '40vw' : '80vw'}
                />
              ))}
            </HeroImage>
            <ShapeComponents components={[body]} />
          </Article>
          <Sidebar>
            {relatedProducts?.content?.items?.length && (
              <Related>
                <H2>
                  {t('product.relatedProduct', {
                    count: relatedProducts.content.items.length
                  })}
                </H2>
                <List>
                  {relatedProducts.content.items.map((item, i) => (
                    <Listformat key={i} item={item} />
                  ))}
                </List>
              </Related>
            )}
          </Sidebar>
        </Inner>
      </Outer>
    </Layout>
  );
}
