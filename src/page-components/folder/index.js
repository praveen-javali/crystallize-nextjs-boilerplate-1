import React from 'react';

import { simplyFetchFromGraph } from 'lib/graph';
import Layout from 'components/layout';
// import Grid, { GridItem } from 'components/grid';
import Microformat from 'components/microformat';
import toText from '@crystallize/content-transformer/toText';
import { List, Outer, SubNavigation, Divider } from './styles';
import Stackable from 'components/stackable';
import PageHeader from 'components/page-header';

import query from './query';
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

export default function FolderPage({ folder, preview }) {
  const { children } = folder;

  const gridRelations = folder.components
    ?.filter((c) => c.type === 'gridRelations')
    ?.reduce((acc, g) => [...acc, ...(g?.content?.grids || [])], []);

  const description = folder.components?.find((c) => c.name === 'Brief')
    ?.content?.json;

  const icon = folder.components?.find((c) => c.name === 'Icon');
  const stacks = folder?.components?.find((c) => c.name === 'Stackable content')
    ?.content?.items;

  return (
    <Layout
      title={folder.name}
      description={toText(description)}
      image={icon?.content?.images?.[0]?.url}
      preview={preview}
    >
      <Outer>
        <Divider />

        <PageHeader {...{ title: folder?.name, description, image: icon }} />
        <SubNavigation>
          {children
            ?.filter((c) => c.type === 'folder')
            ?.map((item, i) => (
              <Microformat item={item} key={i} />
            ))}
        </SubNavigation>
        <Divider />
        <Stackable stacks={stacks} />
        <List>
          {children
            ?.filter((c) => c.type !== 'folder')
            ?.map((item, i) => (
              <Microformat item={item} key={i} />
            ))}
        </List>
        {/* {gridRelations?.length > 0
          ? gridRelations?.map((grid, index) => (
              <Grid
                key={index}
                model={grid}
                cellComponent={({ cell }) => (
                  <GridItem data={cell.item} gridCell={cell} />
                )}
              />
            ))
          : children && (
           
            )} */}
      </Outer>
    </Layout>
  );
}
