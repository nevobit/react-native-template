import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigatorContainer } from './src/navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <NavigationContainer>
          <NavigatorContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>

  );
}

export default App;