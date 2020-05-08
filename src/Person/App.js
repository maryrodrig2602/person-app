import React,  { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from '@testing-library/react';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
        {name: 'Max', age: 28 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 26 }
    ],
 otherState: 'some other value'
});
}

   switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState( {
            persons: [
                { name: newName, age: 28},
                { name: 'Manu', age: 29},
                { name: 'Stephanie', age: 27}
            ]
        } )
    }

    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 28},
                { name: event.target.value, age: 29},
                { name: 'Stephanie', age: 27}
            ]
        } )
    }
    
    render() 
    const style = {
        backgroundColor : 'white',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor:'pointer'
    };

    return(
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!  Yeah!</p>
            <button 
            style={style}
            onClick={() => this.switchNameHandler('Maximilan!!')}>Switch Name</button>
            
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} 
            age={personsState.persons[1]} 
            click={this.switchNameHandler.bind(this, 'Max!')}>my Hobbies: Racing</Person>
            <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age} />
        </div>
    );
    // return React.createElement('div), {className: 'App'}, React.createElement

export default app;