import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './redux/store';
// import reduxStore from './redux/store';

const App = () => {
  const {persistor, reduxStore} = persistedStore();
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
