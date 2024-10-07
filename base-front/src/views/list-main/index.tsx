'use client';
import List from './List';
import { ListProvider } from './ListContext';

const ListView = (props: { params: { key: string; } }) => (
  <ListProvider listKey={props.params.key}>
    <List />
  </ListProvider>
);

export default ListView;
