import React from 'react';
import { Provider } from 'react-redux'
import { NativeRouter, Route } from "react-router-native";

import store from './store';

import Conteiners from './Conteiners/MainMenu';
const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <NativeRouter>
        <Route exact path="/" component={Conteiners} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
