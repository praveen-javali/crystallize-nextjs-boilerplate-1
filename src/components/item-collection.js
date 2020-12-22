import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import useMatchMedia from 'lib/use-match-media';

import Microformat from 'components/microformat';
import { H1, screen } from 'ui';
import ContentTransformer from 'ui/content-transformer';

const Outer = styled.div`
  margin-top: 8em;
`;

const Title = styled(H1)`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin: 0 4px;
  margin-bottom: 15px;
`;
const Description = styled.div`
  margin: 0 4px;
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
  &.next {
    right: 0;
    transform: translate(50%, -60%);
  }
  &.prev {
    transform: translate(-50%, -60%) scale(-1, 1);
    left: 0;
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
  padding-bottom: 30px;
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
`;
const Slide = styled.div`
  width: 20%;
  scroll-snap-align: start;
  min-width: 20%;
`;

export default function ItemCollection({ title, description, items }) {
  const { ref, width = 1 } = useResizeObserver();
  const showButtons = useMatchMedia(`(min-width: ${screen.md}px)`);
  const [showPrev, setShowPrev] = useState(true);
  const [showNext, setShowNext] = useState(true);
  // const [sliderInnerWidth, setSliderInnerWidth] = useState(99999);

  const checkButtonVisibility = React.useCallback(
    ({ width }) => {
      const el = ref.current;
      console.log('checkButtonVisibility');
      if (el) {
        const currentScroll = el.scrollLeft;

        setShowPrev(currentScroll > 0);
        setShowNext(el.scrollWidth - currentScroll > width);
      }
    },
    [ref, setShowPrev, setShowNext]
  );

  function go(direction) {
    const el = ref.current;
    console.log(direction);
    if (el) {
      const currentScroll = el.scrollLeft;

      el.scrollTo({
        top: 0,
        left: currentScroll + width * 0.75 * direction,
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    checkButtonVisibility({ width });
  }, [width, checkButtonVisibility]);

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
          {showButtons && showPrev && (
            <Arrow className="prev" onClick={() => go(-1)}>
              &#10142;
            </Arrow>
          )}
          <SliderInner ref={ref}>
            {items?.map((item) => (
              <Slide key={item.id}>
                <Microformat item={item} />
              </Slide>
            ))}
          </SliderInner>
          {showButtons && showNext && (
            <Arrow className="next" onClick={() => go(1)}>
              &#10142;
            </Arrow>
          )}
        </Slider>
      )}
    </Outer>
  );
}
