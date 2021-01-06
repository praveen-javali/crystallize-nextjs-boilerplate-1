import React from 'react';
import Layout from 'components/layout';
import Social from 'components/social';
import { simplyFetchFromGraph } from 'lib/graph';
import ShapeComponents from 'components/shape/components';
import ContentTransformer from 'ui/content-transformer';
import Microformat from 'components/microformat';
import toText from '@crystallize/content-transformer/toText';
import query from './query';
import TopicTag from 'components/topic-tag';
import { useRouter } from 'next/router';
import {
  Img,
  List,
  H2,
  Outer,
  Inner,
  Title,
  Byline,
  Hero,
  HeroContent,
  HeroImage,
  Article,
  Sidebar,
  SidebarBlock
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
  const router = useRouter();
  const title = document?.components?.find((c) => c.name === 'Title')?.content
    ?.text;
  const description = document?.components?.find((c) => c.name === 'Intro');
  const images = document?.components?.find((c) => c.name === 'Image');
  const featured = document?.components?.find((c) => c.name === 'Featured');
  const body = document?.components?.find((c) => c.name === 'Body');
  const published = new Date(document?.publishedAt);
  const topics = document?.topics;

  //Find all topic maps, as a parent, then filter on "document" type
  const relatedArticles = topics
    // ?.filter((topic) => topic?.parent?.name === '[YOUR-TOPIC-MAP-NAME]') //Add this line if you want specific topic map
    ?.map((topic) => topic?.items?.edges)
    ?.flat()
    ?.filter((node) => node?.node?.path !== router?.asPath);

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
                    <TopicTag underline {...topic} key={topic.id} />
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
            {featured?.content?.items?.length && (
              <SidebarBlock>
                <H2>
                  Featured
                  {/* {t('product.relatedProduct', {
                    count: featured.content.items.length
                  })} */}
                </H2>
                <List>
                  {featured.content.items.map((item, i) => (
                    <Microformat key={i} item={item} />
                  ))}
                </List>
              </SidebarBlock>
            )}
            {!!relatedArticles && (
              <SidebarBlock>
                <H2>Related</H2>
                <List>
                  {relatedArticles.map((item, i) => (
                    <Microformat key={i} item={item?.node} />
                  ))}
                </List>
              </SidebarBlock>
            )}
          </Sidebar>
        </Inner>
      </Outer>
    </Layout>
  );
}
