import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const ExpenseListFilters = (props) => {
    return (
        <div>
            <input type='text' onChange={(e)=>{
                //props = state
                props.dispatch(setTextFilter(e.target.value))
            }} />
            <select onChange={(e)=>{
               if(e.target.value === 'date'){
                   props.dispatch(sortByDate())
               }else if(e.target.value ==='amount'){
                   props.dispatch(sortByAmount())
               }
            }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    )
}
const mapPropsToState = (state) => {
    return{
        filters: state.filters
    }
}


export default connect(mapPropsToState)(ExpenseListFilters);