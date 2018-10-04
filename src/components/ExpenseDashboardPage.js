import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesList from './ExpensesList';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage