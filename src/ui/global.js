import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Typography */
    --font-family-main: "Trebuchet MS", sans-serif;

    --font-size-lg: 32px;
    --font-size-md: 22px;
    --font-size-sm: 16px;

    --font-size-body: 14px;
    --font-size-tags: 14px;

    --font-listing-name-size: 16px;
    --font-listing-price-size: 18px;

    /* Colors */
    --color-main-background: #fff;
    --color-text-main: #080708;
    --color-text-sub: #4c505b;
    --color-box-background: #efefef;

    --color-price: var(--color-text-main);
    --color-error: #EF4836;
    --color-discount:#EE6969;
  
    --color-primary-action: #FBDCCE;
    --color-primary-action-content:#9E8376;
    --color-icon-details: var(--color-primary-action);
    --color-ui-details: var(--color-primary-action);
      
    /* Properties */
    --content-padding: 50px;
    --content-max-width:1800px;

    /* Product grid layout */
    --content-layout-container-height-xl:500px;
    --content-layout-container-height-lg:500px;
    --content-layout-container-height-md:500px;
    --content-layout-container-height-sm:500px;
    --content-layout-container-height-xs:500px;

    /* How images should behave in their parent container (cover, fill, contain) */
    --image-object-fit:cover;
  }

  /* Uncomment this to enable dark mode */
  /* @media (prefers-color-scheme: dark) {
    :root {
      --color-main-background: #020210;
      --color-text-main: #fff;
      --color-text-sub: #ddd;
      --color-box-background: #555;
    }
  } */
  /* path#detail {
    fill: var(--color-icon-detail);
  } */
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font: 14px/1 Helvetica, Arial, Verdana, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: var(--color-main-background);
    color: var(--color-text-sub);
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0 0 2em;
    padding: 0;
  }
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
  }
  strong {
    font-weight: bold;
  }
  a,
  button {
    color: inherit;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p > a {
    border-bottom: 2px solid black;
    font-weight: 600;

    &:hover {
      text-decoration: none;
      border-bottom-color: transparent;
    }
  }

  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  ::-webkit-input-placeholder { /* Edge */
    color: var(--color-text-sub);
  }
  ::placeholder {
    color: var(--color-text-sub);
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;
