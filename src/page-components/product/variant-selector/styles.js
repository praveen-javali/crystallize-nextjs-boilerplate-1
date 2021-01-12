import styled from 'styled-components';

import is from 'styled-is';

export const Outer = styled.div`
  margin: 30px 0;
`;

export const Variant = styled.div`
  margin-bottom: 15px;
`;

export const Values = styled.div``;

export const Button = styled.button.attrs(() => ({
  type: 'button'
}))`
  color: var(--color-text-sub);
  width: 100%;
  font-weight: bold;
  appearance: none;
  background: white;
  border: none;
  padding: 8px 20px;
  margin: 0;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  &:focus,
  &:active {
    outline: none;
  }

  ${is('selected')`
    background: #000;
    color: white;
    border: 1px solid #000;
  `};
`;

export const AttributeName = styled.h4`
  font-weight: 600;
  margin: 25px 0 10px;
  color: var(--color-text-main);
  font-size: var(--font-size-sm);
`;

export const AttributeSelector = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const AttributeButton = styled.button`
  text-transform: capitalize;
  font-weight: bold;
  flex-wrap: wrap;
  border: 1px solid #dfdfdf;
  width: 25%;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${is('selected')`
    border-color: var(--color-text-main);
  `};

  ${({ hasVariantForAttribute }) =>
    !hasVariantForAttribute &&
    `
      position: relative;
      :after {
        background-color: rgba(1,1,1,0.05);
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
    `}
`;

export const VariantImage = styled.div`
  width: 100%;
  max-width: 100px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
