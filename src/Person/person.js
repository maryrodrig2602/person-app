import React  from 'react';

const persono = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <imput type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;