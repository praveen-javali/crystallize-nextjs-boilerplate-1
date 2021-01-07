import styled from 'styled-components';
import { Image } from '@crystallize/react-image';

import { H2 as H, responsive } from 'ui';
export const Outer = styled.div`
  max-width: var(--content-max-width);
  padding: 0 100px;
  margin: 0 auto;
`;
export const Byline = styled.div`
  font-size: 16px;
  /* color: #000; */
  /* opacity: 0.4; */
  padding-bottom: 15px;
  span {
    margin-right: 10px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(600px, 1000px) minmax(300px, 1fr);
  grid-gap: 200px;
`;

export const Hero = styled.div`
  font-size: 20px;
  padding-top: 0px;
  display: grid;
  grid-template-columns: minmax(600px, 1000px) minmax(300px, 1fr);
  align-items: flex-end;
  margin-bottom: 50px;
  position: relative;
  p {
    font-size: 20px;
    line-height: 36px;
    font-weight: 500;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin-bottom: 25px;
`;
export const Article = styled.div`
  p,
  li {
    max-width: none !important;
    margin-left: 50px !important;
    padding-right: 200px;
  }
  h3 {
    margin-left: 50px;
    font-size: var(--font-size-md);
    line-height: 38px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;

  color: var(--color-text-main);
  margin: 0;
  line-height: 1.2em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  max-width: 800px;
  margin-bottom: 15px;
  /* margin-top: 50px; */
`;

export const HeroImage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* margin-bottom: 100px; */
  grid-gap: 5px;
  margin-bottom: 100px;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:first-child {
    grid-column-end: span 2;
  }

  > img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const List = styled.div`
  display: grid;
  grid-gap: 5px;
`;

export const H2 = styled(H)`
  display: block;
  font-size: 1rem;
  color: var(--color-text-main);
  ${responsive.xs} {
    text-align: center;
  }
`;

export const Sidebar = styled.div`
  margin-top: -15px;
  overflow-y: scroll;
`;

export const SidebarBlock = styled.div`
  display: block;
  padding-bottom: 10px;
  margin-bottom: 50px;
`;
