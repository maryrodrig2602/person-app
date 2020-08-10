import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

    render() {
        return (
          <div className="App">
              <ol>
                  <li>Creat an input field (in App component) with a change listener</li>
                  <li>Create a new component (=> ValidationComponent) which receives the</li>
                  <li>Inside the ValidationComponent, either output "Text too short" or </li>
                  <li>Create another component (=>CharComponent) and style it as an in</li>
                  <li>Render a list of CharComponents where each CharComponent receives a</li>
                  <li>When you click a CharComponent, it should be removed from the entrance</li>
            </ol>
            <p>Hint: keep in mind that JavaScript strings are basically arrays!</p>
            <hr />
            <input
             type="text" 
             onChange={this.inputChangedHandler} 
             value={this.state.userInput} />
             <p>{this.state.userInput}</p>
          </div>
        );
       }
    }

    export default App;
