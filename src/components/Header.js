import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogOut} from '../actions/auth';
import { connect } from 'react-redux';


export const Header = ({startLogOut}) => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to='/dashboard' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName="is-active">Add New</NavLink>
        <NavLink to='/edit' activeClassName="is-active">Edit</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
        <button onClick={startLogOut}>Log Out</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header)