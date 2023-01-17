import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodo = [
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
]

const App = () => {
  // Состояние (данные) задач
  const [todos, setTodos] = useState(initialTodo);

  return (
    <div className="layout">
      <TodoHeader setTodos={setTodos} />
      <div className="box">
        {todos.map((todo) => (
          <TodoItem setTodos={setTodos} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
