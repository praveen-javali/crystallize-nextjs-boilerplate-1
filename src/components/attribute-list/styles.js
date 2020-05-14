import styled from 'styled-components';
import { colors } from 'ui';

export const Attributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const Attribute = styled.div`
  background: ${colors.frostbite};
  color: #fff;
  font-size: 0.8rem;
  border: 0;
  text-transform: capitalize;
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
  padding: 0.45rem;
  border-radius: 0.2rem;
`;
