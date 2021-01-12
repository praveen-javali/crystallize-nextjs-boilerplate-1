import styled from 'styled-components';
import { Image } from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';

const Img = styled.div`
  img {
    width: 100%;
  }
  width: 70%;
`;
const Content = styled.div`
  align-items: center;
  color: var(--font-color-main);
  display: flex;
  height: 100%;
  padding: 5em 50px 5em 50px;
  max-width: var(--font-max-width);
`;
const Description = styled.div`
  p,
  li {
    font-size: var(--font-size-body);
    line-height: 1.8em;
  }
`;
const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 15px;
`;
const Button = styled.a`
  background: #000;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-top: 15px;
  padding: 10px 15px;
`;

const Outer = styled.div`
  align-items: center;
  border: 1px solid #dfdfdf;
  display: flex;
  margin-bottom: 100px;
  margin-top: 15px;
  position: relative;

  &.use-overlay {
    display: block;
    position: relative;

    :after {
      background: linear-gradient(
        -90deg,
        rgba(8, 7, 8, 0) 0%,
        rgba(8, 7, 8, 0.6) 100%
      );
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .banner-content {
      color: #fff;
      padding: 2rem 5em;
      p,
      li {
        color: #fff;
      }
    }
    .banner-button {
      background: #fff;
      color: #000;
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
        {Boolean(title) && <Title>{title}</Title>}
        {Boolean(description) && (
          <Description>
            <ContentTransformer {...description} />
          </Description>
        )}
        {Boolean(link) && (
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
