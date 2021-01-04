import Microformat from 'components/microformat';

import { Outer } from './styles';
import Pagination from './pagination';

export default function SearchResults({ edges = [], navigate, pageInfo }) {
  return (
    <Outer>
      <ul>
        {edges.map(({ cursor, node }) => (
          <li key={cursor}>
            <Microformat item={node} />
          </li>
        ))}
        {edges.map(({ cursor, node }) => (
          <li key={cursor}>
            <Microformat item={node} />
          </li>
        ))}
      </ul>
      <Pagination navigate={navigate} pageInfo={pageInfo} />
    </Outer>
  );
}
