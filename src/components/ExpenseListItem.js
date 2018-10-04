import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveExpense } from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>{props.note}</p>
        <p>Amount:{props.amount}</p>
        <p>As of:{props.createdAt}</p>
        <button onClick={() => {
            props.dispatch(startRemoveExpense({id: props.id}))
        }}>
        Remove
        </button>

        
    </div>
)
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(ExpenseListItem)

