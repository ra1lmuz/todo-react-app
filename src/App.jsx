import { useState, useEffect } from "react";

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}.${month}.${year}`;
}

const App = () => {
  // Состояние (данные) задач
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false,
    },
    {
      id: 2,
      name: "Заправить автомобиль",
      date: new Date(),
      checked: false,
    },
  ]);

  const [value, setValue] = useState("");

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

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

    setValue('');
  };

  // Функция переключения статуса задач
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;

      });

      return prevState;
    });
  };

  // Функция удаления
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      // .filter()

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    })
  }

  return (
    <div className="layout">
      <div className="top">
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавит задачу:</h2>
          <input
            type="text"
            placeholder="Купить молоко..."
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />
        </form>
      </div>

      {/* Все задачи */}
      <div className="box">
        {/* Одна задача */}
        {todos.map((todo) => {
          return (
            <div className="item">
              <h3>
                {todo.name} ({formatDate(todo.date)})
              </h3>
              <div className="btn">
                <button className="accept" onClick={() => onCheckedToggle(todo.id)}>
                  {todo.checked ? "Не выполнена" : "Выполнено"}
                </button>
                <button className="delete" onClick={() => onDeleteTodoById(todo.id)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
