import styled from 'styled-components';
import { Image } from '@crystallize/react-image';
import ContentTransformer from 'ui/content-transformer';
const Outer = styled.section`
  padding-bottom: 25px;
  /* margin-top: 50px; */
`;

const H1 = styled.h1`
  font-size: var(--font-size-lg);
  color: var(--color-text-main);
  margin-bottom: 15px;
`;

export default function PageHeader({ title, description, image }) {
  return (
    <Outer>
      <H1>{title}</H1>
      <ContentTransformer {...description} />
      <Image {...image} />
    </Outer>
  );
}
