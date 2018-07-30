import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {

  state = {
    counter: 0
  }

  render() {

    return(
      <div> 
        <button type="button" className="btn btn-primary" onClick = {() => {this.setState({counter: this.state.counter + 1})} }>
          Click Me
        </button>
        <p> clicked {this.state.counter} times </p>

      </div>
    )
  }
}


class App extends Component {

  state = {
    numbers: [
      'Learn React',
      'Learn Redux',
      'Learn React Native',
      'Create a web application'

    ]

  }

  render() {
    // const numbers = [
    //   'Learn React',
    //   'Learn Redux',
    //   'Learn React Native',
    //   'Create a web application'

    // ];

    let num = 0;

    const listItems = this.state.numbers.map((number) => 
      <tr key={number.toString()}>
        <td> {num++}</td>
        <td>  {number} </td>
        <td> pending </td>
        <td> edit | delete </td>
      </tr>
  )
    return (
      <div className="row">
          <div className="col-sm"> 

            <h2> Task Manager </h2><br /><br />
            <Counter /> <br />
            <input />
            {/* <ul>
              {listItems}
            </ul> */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Admin</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr> */}
                {listItems}
              </tbody>
        </table>
        
      </div>

    </div>
    );
  }
}

export default App;
