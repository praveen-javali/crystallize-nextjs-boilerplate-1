import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import is from 'styled-is';

import { H1, responsive } from 'ui';
import ContentTransformer from 'ui/content-transformer';
import useResizeObserver from 'lib/use-resize-observer';
import useScrollEnded from 'lib/use-scroll-ended';
import Listformat from 'components/listformat';

const Outer = styled.div`
  margin-bottom: 100px;
`;

const Title = styled(H1)`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 4px;
  margin-bottom: 15px;
  max-width: var(--font-max-width);
  ${responsive.xs} {
    padding: var(--content-padding-xs);
    padding-right: 10px;
  }
`;
const Description = styled.div`
  margin: 0 4px 45px;
  max-width: var(--font-max-width);

  ${responsive.xs} {
    padding: var(--content-padding-xs);
    padding-right: 10px;
  }
`;
const Arrow = styled.button`
  position: absolute;
  z-index: 99;
  background: var(--color-text-main);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  /* top: 0; */
  height: 80px;
  width: 80px;
  top: 50%;
  font-size: 25px;
  color: #fff;
  opacity: 0;
  transition: transform 150ms, opacity 150ms;
  display: none;

  ${responsive.mdPlus} {
    display: block;
  }

  &.next {
    right: 0;
    transform: translate(50%, -60%) scale(0.5);

    ${is('$show')`
      transform: translate(50%, -60%) scale(1);
      opacity: 1;
    `};
  }
  &.prev {
    transform: translate(-50%, -60%) scale(-0.5, 0.5);
    left: 0;

    ${is('$show')`
      transform: translate(-50%, -60%) scale(-1, 1);
      opacity: 1;
    `};
  }
`;
const Slider = styled.div`
  position: relative;
`;
const SliderInner = styled.div`
  position: relative;
  margin-top: 45px;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0%;
  padding-bottom: 60px;
  margin-bottom: 60px;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    height: 2px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }
  ${responsive.xs} {
    padding-bottom: 30px;
    scroll-padding: 25px;
    > *:first-child {
      margin-left: 25px;
    }
    &::-webkit-scrollbar-track {
      margin-left: 25px;
    }
    &::-webkit-scrollbar {
      background: transparent;
    }
  }
`;
const Slide = styled.div`
  scroll-snap-align: start;

  &.type-document {
    width: 85%;
    min-width: 85%;
    height: var(--listformat-document-height-xs);
    ${responsive.xl} {
      width: 33.333%;
      min-width: 33.333%;
      height: var(--listformat-document-height-xl);
    }
    ${responsive.lg} {
      width: 33.333%;
      min-width: 33.333%;
      height: var(--listformat-document-height-lg);
    }
    ${responsive.md} {
      width: 33.333%;
      min-width: 33.333%;
      height: var(--listformat-document-height-md);
    }
    ${responsive.sm} {
      width: 33.333%;
      min-width: 33.333%;
      height: var(--listformat-document-height-sm);
    }
  }
  &.type-product {
    min-width: 45%;
    width: 45%;
    height: var(--listformat-product-height-xs);
    ${responsive.xl} {
      height: var(--listformat-product-height-xl);
      width: 20%;
      min-width: 20%;
    }
    ${responsive.lg} {
      height: var(--listformat-product-height-lg);
      min-width: 25%;
      width: 25%;
    }
    ${responsive.md} {
      height: var(--listformat-product-height-md);
      width: 33.333%;
      min-width: 33.333%;
    }
    ${responsive.sm} {
      height: var(--listformat-product-height-sm);
      width: 50%;
      min-width: 50%;
    }
  }
`;

export default function ItemCollection({ title, description, items }) {
  const ref = useRef();
  const { width } = useResizeObserver({ ref });
  const [scrollState, setScrollState] = useState('beginning');

  const checkButtonVisibility = useCallback(() => {
    const el = ref.current;
    if (el) {
      const currentScroll = el.scrollLeft;

      if (el.scrollWidth - currentScroll === width) {
        setScrollState('end');
      } else if (currentScroll === 0) {
        setScrollState('beginning');
      } else {
        setScrollState('mid');
      }
    }
  }, [width, setScrollState]);

  function go(direction) {
    const el = ref.current;

    if (el) {
      const currentScroll = el.scrollLeft;

      el.scrollTo({
        top: 0,
        left: currentScroll + width * 0.75 * direction,
        behavior: 'smooth'
      });
    }
  }

  // Update button state on resize
  useEffect(() => {
    checkButtonVisibility();
  }, [width, checkButtonVisibility]);

  // Update button state when scrolling has ended
  useScrollEnded(ref, checkButtonVisibility);

  return (
    <Outer>
      {!!title && <Title as="h4">{title}</Title>}
      {!!description && (
        <Description>
          <ContentTransformer {...description} />
        </Description>
      )}
      {!!items && (
        <Slider>
          <Arrow
            $show={scrollState !== 'beginning'}
            className="prev"
            onClick={() => go(-1)}
          >
            &#10142;
          </Arrow>
          <SliderInner ref={ref}>
            {items?.map((item) => (
              <Slide key={item.id} className={`type-${item?.type}`}>
                <Listformat item={item} />
              </Slide>
            ))}
          </SliderInner>
          <Arrow
            $show={scrollState !== 'end'}
            className="next"
            onClick={() => go(1)}
          >
            &#10142;
          </Arrow>
        </Slider>
      )}
    </Outer>
  );
}
