import styled from 'styled-components';
import { Image } from '@crystallize/react-image';

import { responsive } from 'ui';

export const Outer = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  border: 4px solid #fff;
  background: var(--microformat-document-background);
  ${responsive.xs} {
    margin-bottom: 15px;
  }
`;

export const MediaWrapper = styled.div`
  flex: 0 0 auto;
  border: 1px solid #dfdfdf;
  width: 100%;
  height: 100%;
  .video-js {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
  }
  img,
  video {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Text = styled.div`
  flex: 1 1 auto;
  /* color: var(--color-text-main); */
  /* background: var(--color-box-background); */
  width: 100%;
  height: 50%;
  /* height: calc(100% - 100px); */
  /* background: linear-gradient(); */
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3em var(--content-padding);
  position: absolute;
  color: #fff;
  bottom: 0;

  padding-right: 20%;
  background: linear-gradient(
    180deg,
    rgba(8, 7, 8, 0) 0%,
    rgba(8, 7, 8, 0.8) 100%
  );
  h3 {
    font-size: var(--font-size-md);
    color: inherit;
    margin: 0;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  line-height: 140%;
  color: inherit;
  p {
    font-size: 14px;
  }
`;
