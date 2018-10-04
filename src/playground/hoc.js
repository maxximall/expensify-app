import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info component</h1>
            <p>{props.text}</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    //returns stateless functional component
    return (props) => (
        <div>
            {props.isAuth && <p>The user is authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} text='This is some text for the component'/>, document.getElementById('app'))