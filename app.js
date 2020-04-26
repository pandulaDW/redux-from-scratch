const { createStore, combineReducers } = require('./redux');
const rootReducer = require('./reducer');
const { countActions, toDoActions } = require('./actions');

// Creating the store
const store = createStore(rootReducer);

// Subscribing a listener
store.subscribe(() => console.log(store.getState()));

// Creating the business logic
const addTodoLogic = (todo) => {
  store.dispatch(toDoActions.addTodo(todo));
  store.dispatch(countActions.incrementCount());
};

const removeTodoLogic = (todo) => {
  store.dispatch(toDoActions.removeTodo(todo));
  store.dispatch(countActions.decrementCount());
};

// Firing the business actions (will be equivalent to pushing a button)
addTodoLogic('brush teeth');
addTodoLogic('wash face');
removeTodoLogic('brush teeth');

// Unsubscribing a listener
store.unsubscribe();
