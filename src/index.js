import React from 'react';
import { Provider } from 'react-redux'
import { NativeRouter, Route } from "react-router-native";

import store from './store';

import MainMenu from './Conteiners/MainMenu';
import GameActive from './Conteiners/gameActive';

const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <NativeRouter>
        <Route exact path="/" component={MainMenu} />
        <Route path="/gameActive" component={GameActive} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
