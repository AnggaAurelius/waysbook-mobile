import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppContextProvider} from './src/components/context';
import {setAuthToken} from './src/config/axios';
import {HomeScreen, Login, Register} from './src/pages';

const Stack = createStackNavigator();

if (AsyncStorage.token) {
  setAuthToken(AsyncStorage.token);
}

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
