import React, {Component}  from 'react';

import './Person.css';

class Person extends Component {
    // static getDerivedStateFromProps(props,state) {
    //    console.log('[Persons.js] getDerivedStateFromProps');
    //    return state;
   // }

   // componentWillReciveProps(props) {
    // console.log ('[Person.js] componentWillRecieveProps', props);
  // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    // componentWillUpdate() {

   // }

   componentDidUpdate(prevProps, prevState,snapshot) {
       console.log('[Person.js] ComponentDidUpdate');
       console.log.length(snapshot);
   }
   
   componentWillMount() {
       console.log('[Person.js] componentWillUnmount');
   }

    render() {
    console.log('[Persons.js] rendering...');
    return (
       <div className={classes.Person}>
            <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old
            </p>
            <p>{this.props.children}</p>
            <imput
             type="text" 
            onChange={this.props.changed} 
            value={this.props.name} 
            />
            </div>
        )
    };
} 

export default person;
