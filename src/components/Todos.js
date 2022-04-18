import "../App.css";
import {useState} from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const todos = [];

  const signOut = () => {};

  const onSubmitTodo = (event) => {
    event.preventDefault();
    setTodo("");
  };

  return(
    <>
      <header>
        <button onClick = {signOut}>Sign Out</button>
      </header>
      <main>
        <form onSubmit = {onSubmitTodo}>
          <input
            required
            value = {todo}
            onChange = {(e) => setTodo(e.target.value)}
            placeholder="what's next?"
            />
            <button type="submit"> Add </button>
        </form>
        {todos && todos.map((todo)=> <Todo {...todo} />)}
      </main>
    </>
  );
};

const Todo = ({id, complete, text}) => {
  const onCompleteTodo = (id, compete) => {};
  const onDeleteTodo = (id) => {};

  return (
    <div key={id} className="todo">
      <button
        className={`todo-item ${complete ? "complete" : ""}`}
        tabIndex="0"
        onClick={()=> onCompleteTodo(id, complete)}
        >
          {text}
        </button>
        <button onClick={() => onDeleteTodo(id)}>x</button>
    </div>
  );
};

export default Todos;
