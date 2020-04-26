const { countConstants, todoConstants } = require('./constants');

// Action creators
exports.countActions = {
  incrementCount: () => {
    return { type: countConstants.INCREMENT_COUNT };
  },

  decrementCount: () => {
    return { type: countConstants.DECREMENT_COUNT };
  },
};

exports.toDoActions = {
  addTodo: (todo) => {
    return { type: todoConstants.ADD_TODO, payload: todo };
  },

  removeTodo: (todo) => {
    return { type: todoConstants.REMOVE_TODO, payload: todo };
  },
};
