import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {bg} from './assets/image';
import {Header} from './src/components';
import {Books, Login, Register} from './src/pages';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <ScrollView style={{flex: 1}}>
        <Header navigation={navigation} />
        <Books />
      </ScrollView>
    </ImageBackground>
  );
};

const App = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default App;
