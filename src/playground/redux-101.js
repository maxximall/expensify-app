console.log(101);

import { createStore } from 'redux';

// an obejct of {incrementBy = 1} = {} is passed to the function which defaults to 1 if no value for incrementBy has been set
// or an empty object if not object if no object has been passed
const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy: decrementBy
});

const reset = () => ({
    type: 'RESET'
})


const countReducer = ((state = {count: 0}, action)=>{
    switch(action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

})

const store = createStore(countReducer);


store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(reset());



console.log(store.getState());
