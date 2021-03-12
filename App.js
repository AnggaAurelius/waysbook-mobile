import React from 'react';
import {StyleSheet, ScrollView, View, ImageBackground} from 'react-native';
import {bg} from './assets/image';
import Books from './src/pages/books';
import Header from './src/pages/topHeader';

const App = () => {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <Books />
      </ScrollView>
    </ImageBackground>
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
