const { createStore, combineReducers } = require('./redux');
const rootReducer = require('./reducer');
const { countActions, toDoActions } = require('./actions');

// Creating the store
const store = createStore(rootReducer);

// Subscribe a listener to the store
store.subscribe(() => console.log(store.getState()));

// Dispatch an action
// store.dispatch(toDoActions.addTodo('brush teeth'));
// store.dispatch(toDoActions.addTodo('wash face'));
// store.dispatch(toDoActions.removeTodo('brush teeth'));

// Unsubscribing a listener
store.unsubscribe();
