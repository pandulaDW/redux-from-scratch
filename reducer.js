const { countConstants, todoConstants } = require('./constants');
const { combineReducers } = require('./redux');

const countReducer = (prevState, action) => {
  const state = prevState ? prevState : 0;

  switch (action.type) {
    case countConstants.INCREMENT_COUNT:
      return { count: state + 1 };

    case countConstants.DECREMENT_COUNT:
      return { count: state - 1 };

    default:
      return state;
  }
};

const todoReducer = (prevState, action) => {
  const state = prevState ? prevState : [];

  switch (action.type) {
    case todoConstants.ADD_TODO:
      return [...state, action.payload];

    case todoConstants.REMOVE_TODO:
      return state.filter((todo) => todo !== action.payload);

    default:
      return state;
  }
};

module.exports = combineReducers({ count: countReducer, todo: todoReducer });
