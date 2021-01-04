import styled from 'styled-components';

export const H1 = styled.h1``;
export const Outer = styled.div`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 100px;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const SubNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
  border-bottom: 1px solid #dfdfdf;
`;

export const Item = styled.div`
  &.item-proudct {
    grid-column-end: span 1;
  }

  &.item-document {
    grid-column-end: span 2;
  }
`;
