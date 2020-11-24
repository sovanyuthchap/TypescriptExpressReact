import React from 'react';
import {Provider} from 'react-redux';
import Routes from './Routes';
import configureStore from './redux/store';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
