import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {logo} from '../../../assets/image';

const Books = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 150}}>
        <Text
          style={{
            fontSize: 30,
            margin: 20,
            textAlign: 'center',
          }}>
          With us, you can shop online & help to save your high street at same
          time
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={logo}
          style={{
            width: 150,
            height: 200,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            flex: 1,
            height: 200,
            // backgroundColor: '#2ef',
            marginLeft: 15,
            marginBottom: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 25}}>Title</Text>
          <Text style={{fontSize: 18}}>Author</Text>
          <Text style={{fontSize: 22, position: 'absolute', marginTop: 100}}>
            Harga
          </Text>
          <View style={{flex: 1}} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 45,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 6,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Books;
