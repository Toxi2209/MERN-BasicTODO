import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';



const Todo = props => (
    <tr>
      <td>{props.todo.description}</td>
      <td>
        <Link to={"/edit/"+props.todo._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTodo(props.todo._id) }}>delete</a>
      </td>
    </tr>
)


export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTodo(id) {
        axios.delete("http://localhost:5000/todos/"+id)
        .then(res => console.log(res.data));
        this.setState({
            todos: this.state.todos.filter(el => el._id !== id)
        })
    }

    todoList() {
        return this.state.todos.map(currentTodo => {
          return <Todo todo={currentTodo} deleteTodo={this.deleteTodo} key={currentTodo._id}/>;
        })
    }



    render() {
        return (
            <div>
                <h3>Logged Todos</h3>
                    <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                    </table>
            </div>
        )

    }
}