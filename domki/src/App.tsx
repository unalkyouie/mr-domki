import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import AppContainer from './Navigation';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
