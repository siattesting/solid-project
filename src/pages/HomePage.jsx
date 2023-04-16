import { For, Show, createResource } from 'solid-js';
import Card from '../components/Card';
import { getTodos, pb } from '../utils/PBclient';
const fetchData = async () => {
  const todos = await getTodos();
  const data = structuredClone(todos);
  console.table('FetchData: ', data);
  return data;
};

const fetchPBdata = async () => {
  const resultList = await pb.collection('todos').getList(1, 1000, {
    sort: 'title',
  });

  const todos = resultList.items;
  console.log('fetchPBdata: ', todos);
  return todos;
};

const fetchTodos = async () => {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/todos/records'
  );
  const todos = await response.json();
  console.log('FetchTodos:', todos?.items);
  return todos?.items;
};

export default function HomePage() {
  const [todos] = createResource(fetchPBdata);
  return (
    <>
      {/* <pre>{JSON.stringify(todos(), null, 2)}</pre> */}
      {/* <p>{console.log(todos(), todos.loading)}</p> */}
      {/* <Show when={todos.loading}>Todos are loading</Show> */}
      <Show when={todos.error}>There is an error fetching todos</Show>
      <span>{todos.loading && 'Loading todos...'}</span>
      <div class="grid grid-cols-3 gap-10 my-4">
        <For each={todos()}>
          {(todo, i) => (
            <Card rounded={true} flat={true}>
              <span>{i() + 1}</span>
              <h2 class="text-xl font-semibold">{todo.title}</h2>
              <p class="m-2 p-4">{todo.content}</p>
              <button class="btn">View</button>
            </Card>
          )}
        </For>
      </div>
    </>
  );
}
