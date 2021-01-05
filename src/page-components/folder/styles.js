import styled from 'styled-components';
import { responsive } from 'ui';

export const H1 = styled.h1``;
export const Outer = styled.div`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 100px;
  ${responsive.smAndLess} {
    padding: 0 0 0 0;
  }
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const SubNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
  margin-bottom: 100px;
  ${responsive.xs} {
    flex-wrap: nowrap;
    overflow: scroll;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 10px;
    position: relative;
  }
`;

export const Item = styled.div`
  &.item-proudct {
    grid-column-end: span 1;
  }

  &.item-document {
    grid-column-end: span 2;
  }
`;
