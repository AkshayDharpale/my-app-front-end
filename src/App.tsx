import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './component/Container';
import { Provider } from 'react-redux';
import { rootReducer, store } from './redux/CombineReducer';

function App() {
  return (
    <>
      <h1>Welcome to Redux Thunk</h1>
      <Provider store={store}>
          <Container/>
      </Provider>
    </>
  );
}

export default App;
