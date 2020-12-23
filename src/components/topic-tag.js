import styled from 'styled-components';

const Tag = styled.div`
  padding: 6px 8px;
  border-radius: 2px;
  background: #fff;
  font-weight: 500;
  color: var(--color-text-main);
  font-size: var(--font-size-tags);
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 15px;
`;

export const topicTagsColorMatrix = {
  Outlet: {
    background: '#ECEAE5',
    color: '#7D7D7C'
  },
  Organic: {
    background: '#DAF5CB',
    color: '#3F4A38'
  },
  'Eco friendly': {
    background: '#D0F0EC',
    color: '#4A5554'
  },
  'New arrival': {
    background: '#F2BBAD',
    color: '#6D5752'
  }
};

const TopicTag = ({ name }) => {
  const tagColor = topicTagsColorMatrix[name] || null;

  return <Tag style={tagColor && { ...tagColor }}>{name}</Tag>;
};

export default TopicTag;