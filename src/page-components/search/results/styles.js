import styled from 'styled-components';

export const Outer = styled.div`
  ul {
    /* margin-top: 15px; */
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: var(--microformat-product-height-lg);
    grid-gap: 15px;

    > li {
      margin: 0;
      padding: 0;
    }
  }
`;
