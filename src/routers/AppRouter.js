import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHisorty from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

export const history = createHisorty();

const AppRouter = () => (
    <Router history={history}>
        <div>
           <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />                
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;