import styled from 'styled-components';

export const Outer = styled.a`
  height: 100%;
  margin-bottom: 5px;
  color: var(--color-primary-action-content);
  position: relative;
  display: flex;
  align-items: center;
  /* border: 1px solid #dfdfdf; */
  background: var(--color-primary-action);
  border-radius: 4px;
  padding: 15px 25px;
  margin-right: 5px;
  transition: all 0.1s ease-in-out;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.div`
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;

  h3 {
    font-size: var(--font-size-sm);
    text-align: center;
    font-weight: 500;
    margin: 0 0 0 5px;
    color: inherit;
  }
`;
