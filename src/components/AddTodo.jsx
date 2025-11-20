import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: e.target[0].value,
      checked: false,
    };

    e.target.reset();
    dispatch(addTodo(newTodo));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required type="text" placeholder="Add new Todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
