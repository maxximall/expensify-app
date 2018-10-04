import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';


const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense)=> <ExpenseListItem key={expense.id} {...expense} /> )}
    </div>
);

//define the things we want to get of the store
//has access to the store
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);