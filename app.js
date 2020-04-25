const { createStore } = require('./redux');
const reducer = require('./reducer');
const { toDoAction } = require('./actions');

// Creating the store
const store = createStore(reducer, []);

// Subscribe a listener to the store
store.subscribe(() => console.log(store.getState()));

// Dispatch an action
store.dispatch(toDoAction('Read redux 1'));
store.dispatch(toDoAction('Read redux 2'));
store.dispatch(toDoAction('Read redux 2'));

// Unsubscribing a listener
store.unsubscribe();

// Dispatching an action
store.dispatch(toDoAction('Read redux 3'));
