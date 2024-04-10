import TodoList from "./component/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App d-flex">
      <div className="logo-App col-md-6 col-sm-6">
        <h1>2Do App</h1>
        <h4>by</h4>
        <h2>Hùng Phan</h2>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
