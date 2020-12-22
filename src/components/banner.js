import styled from 'styled-components';
import { Image } from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';

const Img = styled.div`
  width: 70%;

  img {
    width: 100%;
  }
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #000;
  width: 30%;
  padding: 5em 5em 5em 5em;
`;
const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 15px;
`;
const Button = styled.a`
  padding: 10px 15px;
  display: inline-block;
  margin-top: 15px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  border-radius: 4px;
  color: #fff;
  background: #000;
`;

const Outer = styled.div`
  position: relative;
  border: 4px solid transparent;
  margin-top: 15px;
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf;
  &.use-overlay {
    display: block;

    .banner-content {
      position: absolute;
      padding: 0 5em;

      color: #fff;
      top: 0;
      left: 0;
      background: linear-gradient(
        -90deg,
        rgba(8, 7, 8, 0) 0%,
        rgba(8, 7, 8, 0.6) 100%
      );
    }
    .banner-button {
      color: #000;
      background: #fff;
    }
    .banner-image {
      width: 100%;
    }
  }
`;

const Banner = ({
  title,
  description,
  link,
  linkText,
  image,
  addTextAsOverlay
}) => (
  <Outer className={addTextAsOverlay ? 'use-overlay' : ''}>
    <Content className="banner-content">
      <div>
        {!!title && <Title>{title}</Title>}
        {!!description && <ContentTransformer {...description} />}
        {!!link && (
          <Button className="banner-button" href={link}>
            {linkText}
          </Button>
        )}
      </div>
    </Content>
    <Img className="banner-image">
      <Image {...image?.[0]} />
    </Img>
  </Outer>
);

export default Banner;
