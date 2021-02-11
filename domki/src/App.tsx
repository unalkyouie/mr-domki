import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from 'react-native-paper';

import AppContainer from './Navigation';
import store from './store';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
