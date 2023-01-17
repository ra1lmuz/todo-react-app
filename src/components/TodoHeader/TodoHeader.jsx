import { useState } from "react";

const TodoHeader = ({ setTodos }) => {
  const [value, setValue] = useState("");

  // Функция добавления задач
  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false,
      });

      return prevState;
    });

    setValue("");
  };

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="top">
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <h2>Добавить задачу:</h2>
        <input
          type="text"
          placeholder="Купить молоко..."
          onChange={(e) => onChangeHandle(e)}
          value={value}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
