import React from 'react';
import styled from 'styled-components';
import { Pintrest, LinkedIn, Facebook, Twitter } from './icons';

const Btn = styled.button`
  border-radius: 2px;
  &:hover {
    background: #efefef;
  }
`;
const Outer = styled.div`
  position: fixed;
  transform: translateX(-85px);
  top: 167px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export default function SocialBar() {
  return (
    <Outer>
      <Btn>
        <Twitter />
      </Btn>
      <Btn>
        <Facebook />
      </Btn>
      <Btn>
        <Pintrest />
      </Btn>
      <Btn>
        <LinkedIn />
      </Btn>
    </Outer>
  );
}
