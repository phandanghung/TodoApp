import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import "./Todolist.css";
import { useState } from "react";
import { useEffect } from "react";

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [currentTodo, setCurrentTodo] = useState(null);
//   const doneTodos = todos.filter((todo) => todo.done);
//   const notdoneTodos = todos.filter((todo) => !todo.done);




//   useEffect(() => {
//     const todosString = localStorage.getItem("todos");
//     const todosObj = JSON.parse(todosString || "[]");
//     setTodos(todosObj);
//   }, []);

//   const addTodo = ({ name }) => {
//     const newTodo = {
//       name,
//       done: false,
//       id: new Date().toISOString(),
//     };
//     setTodos((prev) => [...prev, newTodo]);
//     syncReactToLocal((todosObj) => [...todosObj, newTodo]);
//   };

//   const handleDoneTodo = (id, done) => {
//     setTodos((prev) =>
//       prev.map((todo) => (todo.id === id ? { ...todo, done } : todo))
//     );
//   };

//   const startEditTodo = (id) => {
//     const findedTodo = todos.find((todo) => todo.id === id);
//     if (findedTodo) {
//       setCurrentTodo(findedTodo);
//     }
//   };

//   const editTodo = (name) => {
//     setCurrentTodo((prev) => {
//       if (prev) {
//         return { ...prev, name };
//       }
//       return null;
//     });
//   };

//   const finishEditTodo = () => {
//     const handler = (todoObj) => {
//       return todoObj.map((todo) => {
//         if (todo.id === currentTodo.id) {
//           return currentTodo;
//         }
//         return todo;
//       });
//     };
//     setTodos(handler);
//     setCurrentTodo(null);
//     syncReactToLocal(handler);
//   };

//   const deleteTodo = (id) => {
//     if (currentTodo) {
//       setCurrentTodo(null);
//     }
//     const handler = (todoObj) => {
//       const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id);
//       if (findedIndexTodo > -1) {
//         const result = [...todoObj];
//         result.splice(findedIndexTodo, 1);
//         return result;
//       }
//       return todoObj;
//     };
//     setTodos(handler);
//     syncReactToLocal(handler);
//   };

//   const syncReactToLocal = (handleNewTodos) => {
//     const todosString = localStorage.getItem("todos");
//     const todosObj = JSON.parse(todosString || "[]");
//     const newTodosObj = handleNewTodos(todosObj);
//     localStorage.setItem("todos", JSON.stringify(newTodosObj));
//   };

//   return (
//     <div className="todoList d-flex justify-content-around">
//       <div className="Container">
//         <TaskInput
//           addTodo={addTodo}
//           currentTodo={currentTodo}
//           editTodo={editTodo}
//           finishEditTodo={finishEditTodo}
//         />
//         <TaskList
//           todos={notdoneTodos}
//           handleDoneTodo={handleDoneTodo}
//           startEditTodo={startEditTodo}
//           deleteTodo={deleteTodo}
//         />
//         <TaskList
//           doneTaskList
//           todos={doneTodos}
//           handleDoneTodo={handleDoneTodo}
//           startEditTodo={startEditTodo}
//           deleteTodo={deleteTodo}
//           completeTaskList
//         />
//       </div>
//     </div>
//   );
// }

// export default TodoList;
const syncReactToLocal = (handleNewTodos) => {
  const todosString = localStorage.getItem('todos');
  const todosObj = JSON.parse(todosString || '[]');
  const newTodosObj = handleNewTodos(todosObj);
  localStorage.setItem('todos', JSON.stringify(newTodosObj));
};

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const doneTodos = todos.filter((todo) => todo.done);
  const notdoneTodos = todos.filter((todo) => !todo.done);

  useEffect(() => {
    const todosString = localStorage.getItem('todos');
    const todosObj = JSON.parse(todosString || '[]');
    setTodos(todosObj);
  }, []);

  const addTodo = (name) => {
    const todo = {
      name,
      done: false,
      id: new Date().toISOString()
    };
    setTodos((prev) => [...prev, todo]);
    syncReactToLocal((todosObj) => [...todosObj, todo]);
  };

  const handleDoneTodo = (id, done) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done, completedDate: done ? new Date().toISOString() : null };
        }
        return todo;
      });
    });
    syncReactToLocal((todosObj) => {
      return todosObj.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };

  const startEditTodo = (id) => {
    const findedTodo = todos.find((todo) => todo.id === id);
    if (findedTodo) {
      setCurrentTodo(findedTodo);
    }
  };

  const editTodo = (name) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name };
      return null;
    });
  };

  const finishEditTodo = () => {
    const handler = (todoObj) => {
      return todoObj.map((todo) => {
        if (todo.id === currentTodo.id) {
          return currentTodo;
        }
        return todo;
      });
    };
    setTodos(handler);
    setCurrentTodo(null);
    syncReactToLocal(handler);
  };

  const deleteTodo = (id) => {
    if (currentTodo) {
      setCurrentTodo(null);
    }
    const handler = (todoObj) => {
      const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id);
      if (findedIndexTodo > -1) {
        const result = [...todoObj];
        result.splice(findedIndexTodo, 1);
        return result;
      }
      return todoObj;
    };
    setTodos(handler);
    syncReactToLocal(handler);
  };

  return (
        <div className="todoList d-flex justify-content-around">
          <div className="Container">
            <TaskInput
              addTodo={addTodo}
              currentTodo={currentTodo}
              editTodo={editTodo}
              finishEditTodo={finishEditTodo}
            />
            <TaskList
              todos={notdoneTodos}
              handleDoneTodo={handleDoneTodo}
              startEditTodo={startEditTodo}
              deleteTodo={deleteTodo}
            />
            <TaskList
              doneTaskList
              todos={doneTodos}
              handleDoneTodo={handleDoneTodo}
              startEditTodo={startEditTodo}
              deleteTodo={deleteTodo}
              completeTaskList
            />
          </div>
        </div>
      );
}
export default TodoList;