exports.createStore = (reducer, initialState) => {
  const store = {};
  store.state = initialState;
  store.listeners = []; // array of functions

  store.getState = () => store.state;

  store.subscribe = (listener) => {
    store.listeners.push(listener);
  };

  store.unsubscribe = () => {
    store.listeners.pop();
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach((listener) => listener());
  };

  return store;
};
