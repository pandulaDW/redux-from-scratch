const constants = require('./constants');

// Root reducer
const reducer = (prevState, action) => {
  const toDoList = prevState.toDoList || [];
  switch (action.type) {
    case constants.ADD_TODO:
      return { toDoList: [...toDoList, action.payload] };

    default:
      return prevState;
  }
};

module.exports = reducer;
