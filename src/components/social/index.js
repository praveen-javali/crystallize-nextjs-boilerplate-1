import React from 'react';
import styled from 'styled-components';
import { Pintrest, LinkedIn, Facebook, Twitter } from './icons';

const Btn = styled.button``;
const Outer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export default function SocialBar() {
  return (
    <Outer>
      <Btn>
        <Facebook />
      </Btn>
      <Btn>
        <Twitter />
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
