import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    tasks: [
      {title: 'Learn React', completed: false},
      {title: 'Learn Redux', completed: false},
      {title: 'Learn React Native', completed: false},
      {title: 'Create a web application', completed: false}
    ],
    color: "",
    checkBox: false
  }

  handleTaskCompletion(task, i) {
             //get copy of task object 
    const { completed } = task
    const [...taskCopy] = this.state.tasks //Get copy of task array
    taskCopy[i] = {...task, completed: !completed}

    //Update the array
    this.setState({tasks: taskCopy})
  }
  render() {

    let num = 0;

    const listItems = this.state.tasks.map((task, i) => 
      <tr key={task.title.toString()}>
        <td> {num++}</td>
        <td style={{color: task.completed? "green":""}}>  {task.title} </td>
        <td><input type="checkbox" className="form-check-input" onChange={() => this.handleTaskCompletion(task, i)}/> 
        </td>
        <td> pending </td>
        <td> edit | delete </td>
      </tr>
  )
    return (
      <div className="row">
          <div className="col-sm"> 
            <h2> Task Manager </h2><br /><br />
            <input />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Check Complete </th>
                  <th scope="col">Status</th>
                  <th scope="col">Admin</th>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
            </table>
        
      </div>

    </div>
    );
  }
}

export default App;
