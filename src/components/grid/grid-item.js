import React from 'react';
import styled from 'styled-components';
import Microformat from 'components/microformat';

const Cell = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  grid-column-end: span ${(p) => p.colspan};
  grid-row-end: span ${(p) => p.rowspan};
`;

export default function GridItem({ data, gridCell }) {
  return (
    <Cell {...gridCell?.layout}>
      <Microformat item={data} />
    </Cell>
  );
}
