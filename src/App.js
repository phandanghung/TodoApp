import TodoList from "./component/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App d-grid justify-content-center">
      <div className="logo-App d-grid col-md-12 col-sm-8 m-0">
        <h1 className="w-3">2Do App</h1>
        <div className="todolist-content">
          <TodoList />
        </div>
        <h5 className="d-flex justify-content-center">by</h5>
        <h2 className="w-3">Hùng Phan</h2>
      </div>
    </div>
  );
}

export default App;
