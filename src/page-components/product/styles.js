import styled from 'styled-components';
import is from 'styled-is';
import { responsive, H1, Inner as I } from 'ui';

export const Outer = styled.div`
  /* max-width: 1600px; */
  /* margin: 0 auto; */
`;

export const Inner = styled(I)`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 15px;
  ${responsive.smPlus} {
    display: grid;
    padding: 0 30px;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
    grid-template-areas: 'content content content content content content content actions actions actions actions actions';
  }
  ${responsive.mdPlus} {
    padding-left: 100px;
    padding-right: 100px;
    column-gap: initial;
    grid-template-areas: 'content content content content content content content . actions actions actions actions';
  }
`;
export const Content = styled.div`
  // vertical space between the actions and the content
  margin-top: 30px;
  ${responsive.smPlus} {
    // Remove the vertical space because now they are placed next to each other
    margin-top: 0;
    grid-area: content;
  }

  ${responsive.smPlus} {
  }
`;
export const Actions = styled.div`
  ${responsive.smPlus} {
    grid-area: actions;
  }
`;

export const ActionsSticky = styled.div`
  // Adding styles only when they are needed makes the calculation of CSSOM faster
  ${responsive.mdPlus} {
    position: sticky;
    top: 50px;
  }
`;
export const ShapeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Loader = styled.div`
  text-align: center;
  margin: 50px;
  font-size: 2rem;
`;

export const Specs = styled.div`
  padding: 0 200px 0 50px;
  ${responsive.xs} {
    border-left: 0;
    display: block;
    margin-top: 15px;
    padding: 20px 0;
  }
`;

export const Description = styled(I)`
  color: var(--color-text-sub);
  padding: 100px 0;
  margin-top: 100px;
`;
export const DescriptionWrapper = styled.div`
  p,
  li {
    margin-left: 50px !important;
    padding-right: 200px;
  }
  h2 {
    font-size: var(--font-size-md);
  }
  h3 {
    margin-left: 50px;
    font-size: var(--font-size-md);
    line-height: 38px;
  }
`;

export const Media = styled.div`
  position: relative;
  /* padding: 3rem; */
  display: flex;
  flex-wrap: wrap;

  /* ${responsive.mdAndLess} {
    display: block;
    padding: 0;
    margin-bottom: 2em;
  } */
`;

//Creating a gallery based on image orientation
export const ImgContainer = styled.div`
  border: 4px solid #fff;
  width: 50%;
  max-width: 100%;
  flex-grow: 1;
  position: relative;
  img {
    object-fit: var(--image-object-fit);
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 1px solid #dfdfdf;
  }
  ${is('portrait')`
    width:33.333%;
    max-width:50%;
    &:only-child {
      max-width:100%;
      width:100%
    }
  `}
  &:first-child {
    width: 100%;
  }
`;

export const Title = styled(H1)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

export const Summary = styled.div`
  color: var(--color-text-sub);
  font-size: var(--font-size-body);
  line-height: 1.4;
  margin-bottom: 15px;
`;

export const ProductFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  align-items: center;
  ${responsive.mdPlus} {
    margin-bottom: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  button {
    ${responsive.mdPlus} {
      flex-grow: 0;
    }
  }
`;

export const Price = styled.div`
  align-items: center;
  color: var(--color-text-sub);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-lg);
  margin-bottom: 20px;
  margin-top: 20px;
  ${is('discounted')`
    color:var(--color-discount);
  `}

  ${responsive.xs} {
    flex-grow: 1;
  }

  ${responsive.mdPlus} {
    margin-right: 20px;
  }
`;
export const DiscountDetails = styled.span`
  font-size: 0.55em;
  display: block;
  text-align: left;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
export const BeforePrice = styled.div`
  text-decoration: line-through;
  opacity: 0.6;
  color: var(--color-text-sub);
  padding: 5px 0;
`;
export const Percentage = styled.div`
  font-weight: 600;
  padding: 5px 15px;
`;

export const RelatedContainer = styled(I)`
  min-height: 0;
`;
