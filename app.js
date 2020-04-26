const { createStore, combineReducers } = require('./redux');
const rootReducer = require('./reducer');
const { countActions, toDoActions } = require('./actions');

// Creating the store
const store = createStore(rootReducer);

// Dispatch an action
store.dispatch(toDoActions.addTodo('brush teeth'));
store.dispatch(toDoActions.addTodo('wash face'));
store.dispatch(toDoActions.removeTodo('brush teeth'));
store.dispatch(countActions.incrementCount());
store.dispatch(countActions.incrementCount());
store.dispatch(countActions.decrementCount());

// Unsubscribing a listener
store.unsubscribe();
