import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";

import Conteiners from './Conteiners/MainMenu';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Conteiners} />
    </NativeRouter>
  );
};

export default App;
