import React from 'react';
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';

import {bg} from '../../../assets/image';
import {Header, Books} from '../../components';

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export default HomeScreen;
