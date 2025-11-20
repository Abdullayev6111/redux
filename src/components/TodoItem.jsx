import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleCheckbox } from '../store/todoSlice';
import { useState } from 'react';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState(todo.text);

  const handleSave = () => {
    dispatch(editTodo({ id: edit, text: value }));
    setEdit(null);
  };

  return (
    <div style={{ display: 'flex', gap: 10 }} id="todo-list">
      <input
        type="checkbox"
        defaultValue={todo.checked}
        className={`todo-checkbox `}
        onChange={() => {
          dispatch(toggleCheckbox(todo.id));
        }}
      />

      {!edit ? (
        <p
          className={`todo-text ${todo.done ? 'completed' : ''}`}
          style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
        >
          {todo.text}
        </p>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {!edit ? (
          <button
            onClick={() => {
              setEdit(todo.id);
            }}
            className="action-btn edit-btn"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              handleSave();
            }}
            className="action-btn edit-btn"
          >
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
        )}

        <button
          className="action-btn delete-btn"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
