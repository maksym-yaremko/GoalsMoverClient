import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../Store/reducers';


const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
      <Provider store={store}>
        <Routes/>
    </Provider>
  );
}

export default App;
