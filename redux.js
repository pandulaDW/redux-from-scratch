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
    let reducerState = {};
    Object.entries(reducer.reducerObj).forEach(([reducerKey, reducerFunc]) => {
      reducerState[reducerKey] = reducerFunc(store.state[reducerKey], action);
    });

    store.state = reducerState;
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
