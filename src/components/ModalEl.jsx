import TodoList from './TodoList';
import AddTodo from './AddTodo';

const ModalEl = () => {
  return (
    <div className="container todo-card">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default ModalEl;
