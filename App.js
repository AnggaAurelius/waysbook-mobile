import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {AppContextProvider} from './src/components/context';
import {setAuthToken} from './src/config/axios';
import BottomTabNavigator from './src/components/navigation';

if (AsyncStorage.token) {
  setAuthToken(AsyncStorage.token);
}

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
