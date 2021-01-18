import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.components"
import TodoList from "./components/todo-list.components"
import EditTodo from "./components/edit-todo.components";
import CreateTodo from "./components/create-todo.components";



/*
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";*/


function App() {
  return (
    <Router>
       <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
