exports.createStore = (reducer) => {
  const store = {};
  store.state = reducer.state;
  store.listeners = []; // array of functions

  store.getState = () => store.state;

  store.subscribe = (listener) => {
    store.listeners.push(listener);
  };

  store.unsubscribe = () => {
    store.listeners.pop();
  };

  store.dispatch = (action) => {
    // Object.entries(reducer.reducerObj)
    store.state = reducer(store.state, action);
    store.listeners.forEach((listener) => listener());
  };

  return store;
};

exports.combineReducers = (reducerObj) => {
  const state = Object.entries(reducerObj).reduce((acc, [reducerKey, reducerFunc]) => {
    acc[reducerKey] = reducerFunc(null, { type: 'DEFAULT' });
    return acc;
  }, {});

  return { state, reducerObj };
};
