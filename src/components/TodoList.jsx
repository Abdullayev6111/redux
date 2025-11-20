import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div style={{ width: '100%' }}>
      {todos.length === 0 && <p>No todos available. Please add todos...</p>}
      {todos.length > 0 &&
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
