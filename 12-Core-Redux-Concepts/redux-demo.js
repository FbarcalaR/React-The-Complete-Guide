const redux = require ('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment'){ 
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement'){ 
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

const action = {type: 'increment'};
store.dispatch(action);

const action2 = {type: 'decrement'};
store.dispatch(action2);