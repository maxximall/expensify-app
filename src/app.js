import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import './firebase/firebase';
import './styles/styles.scss';


const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
});





const jsx = (
    // providing store to all of the components
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{

        ReactDOM.render(jsx, document.getElementById('app'));

})
