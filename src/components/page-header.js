import styled from 'styled-components';
// import { Image } from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';
import { responsive } from 'ui';
const Outer = styled.section`
  padding-bottom: 25px;
  /* margin-top: 50px; */
  ${responsive.xs} {
    padding: var(--content-padding-xs);
    padding-bottom: 25px;
    padding-right: 10px;
  }
`;

const H1 = styled.h1`
  font-size: var(--font-size-xl);
  color: var(--color-text-main);
  margin-bottom: 15px;
`;

export default function PageHeader({ title, description }) {
  return (
    <Outer>
      <H1>{title}</H1>
      <ContentTransformer {...description} />
    </Outer>
  );
}
