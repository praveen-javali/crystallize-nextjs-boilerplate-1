import React from 'react';
import Link from 'next/link';
import { Image } from '@crystallize/react-image';
import { screen, H3 } from 'ui';
import { Outer, Text, Icon, ThumbnailWrapper, Content } from './styles';

export default function FolderItem({ data, gridCell }) {
  if (!data) {
    return null;
  }

  const { name, path } = data;
  const imageMdWidth = 100 / (gridCell?.layout?.colspan ?? 1);

  const icon = data.components?.find((c) => c.name === 'Icon')?.content
    ?.images?.[0];
  const thumbnail = data.components?.find((c) => c.name === 'Thumbnail')
    ?.content?.images?.[0];

  return (
    <Link href={path} passHref>
      <Outer>
        <Icon>
          {icon && (
            <Image
              {...icon}
              alt={name}
              sizes={`(min-width ${screen.md}px) ${imageMdWidth}px, 100vw`}
            />
          )}
        </Icon>
        <Text>
          <H3>{name}</H3>
        </Text>
      </Outer>
    </Link>
  );
}
