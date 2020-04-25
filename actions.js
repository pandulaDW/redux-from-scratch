const constants = './constants';

// Action creators
exports.toDoAction = (todo) => {
  return { type: 'ADD_TODO', payload: todo };
};
