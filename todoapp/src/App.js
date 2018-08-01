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
    newItem: ''
  }

  handleTaskCompletion(task, i) {
             //get copy of task object 
    const { completed } = task
    const [...taskCopy] = this.state.tasks //Get copy of task array
    taskCopy[i] = {...task, completed: !completed}

    //Update the array
    this.setState({tasks: taskCopy})
  }

  handleNewTask(event) {
    const newTask = event.target.value;
    this.setState({newItem: newTask})
  }

  handleKeyDown(event) {
    const keyPressed = event.keyCode;

    // Get existing copy of tasks and newItem

    const {tasks, newItem} = this.state
    const value =  newItem.trim()

    if (keyPressed === 13) {
      if (value.length === 0) {
        return
      } else {
      //Add to the array
      this.setState({
        tasks: [...tasks, {title: value, completed: false}],
        newItem: ''
      })
      }

    }
  }

  handleDelete(task, index) {
    const {tasks} = this.state
    const excludeTask = tasks.filter((task, i) => {
      return i !== index
    }) 

    this.setState({
      tasks: excludeTask
    });

  }

  handleToggleAll() {
    //Set all to complete
    const [...tasksCopy] = this.state.tasks
    const allToggled = tasksCopy.every(task => task.completed)

    const toggleAllTasks = tasksCopy.map(task => 
      ({...task, completed: !allToggled})
    )

    console.log('All Toggled ? ' + allToggled)

    this.setState({
      tasks: toggleAllTasks
    })

    

  }
  render() {
    const {tasks} = this.state

    let num = 0;
    const allToggled = tasks.every(task => task.completed)

    const listItems = this.state.tasks.map((task, i) => 
      <tr key={task.title.toString()}>
        <td> {num++}</td>
        <td style={{color: task.completed? "green":""}}>  {task.title} </td>
        <td><input type="checkbox" className="form-check-input" 
          onChange={() => this.handleTaskCompletion(task, i)}/> 
        </td>
        <td> pending </td>
        <td> edit | <span onClick = {() => this.handleDelete(task, i) }>delete</span> </td>
      </tr>
  )
    return (
      <div className="row">
          <div className="col-sm"> 
            <h2> Task Manager </h2><br /><br />
            <input onChange = {(event) => this.handleNewTask(event)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              value = {this.state.newItem}
            /> <br /> <br />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col"><input type="checkbox" className="form-check-input" 
                    onChange={() => this.handleToggleAll()}/> Check Complete </th>
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
