import React, { Component } from "react";
import axios from 'axios';


export default class CreateTodo extends Component {

    constructor(props){
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: "",
        }
    }



    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const todo = {
            description: this.state.description
        }

        console.log(todo);

        axios.post('http://localhost:5000/todos/add', todo)
            .then(res => console.log(res.data));

        window.location = "/";
    }


    render() {
        return (
            <div>
                <h3>Create New TodoList </h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Create Todo" className="btn btn-primary" />
        </div>
      </form>
            </div>
        )

    }
}