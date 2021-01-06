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
  grid-template-columns: minmax(600px, 1000px) minmax(400px, 1fr);
  grid-gap: 100px;
`;

export const Hero = styled.div`
  font-size: 20px;
  padding-top: 100px;

  display: grid;

  grid-template-columns: minmax(600px, 1000px) minmax(400px, 1fr);
  align-items: flex-start;
  margin-bottom: 50px;
  border-top: 1px solid #dfdfdf;
  p {
    font-size: 20px;
    line-height: 36px;
    font-weight: 500;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;
export const Article = styled.div`
  p,
  li {
    max-width: none !important;
    font-size: 20px;
    line-height: 36px;
  }
  h3 {
    font-size: 26px;
    line-height: 38px;
  }
`;
export const Sidebar = styled.div`
  /* background: #f3f3f3; */
  /* border: 1px solid red; */
`;
export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  line-height: 1.2em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  max-width: 800px;
  margin-bottom: 15px;
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
  grid-template-columns: repeat(12, 1fr);
  ${responsive.md} {
    grid-template-columns: repeat(9, 1fr);
  }
  ${responsive.sm} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${responsive.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const H2 = styled(H)`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--color-text-main);
  ${responsive.xs} {
    text-align: center;
  }
`;

export const Related = styled.div`
  border-top: 2px solid #efefef;
  max-width: 1600px;
  padding: 100px 100px 0 100px;
  margin: 100px auto;
  display: block;
  ${responsive.smAndLess} {
    padding: 50px;
  }
`;
