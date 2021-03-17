import React, {useContext} from 'react';
import {AppContext} from '../../components/context';
import {logo, cart} from '../../../assets/image';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Header = ({navigation}) => {
  const [state] = useContext(AppContext);
  const isLogin = state.isLogin;
  console.log(state);

  return (
    <View style={styles.header}>
      <Image source={logo} style={{width: 120, height: 50, borderRadius: 20}} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}
        />
        {isLogin ? (
          <>
            <Image
              source={cart}
              style={{width: 40, height: 40, marginRight: 30}}
            />
            <Image
              source={{uri: `${state.user.avatar}`}}
              style={{width: 45, height: 45, marginRight: 20, borderRadius: 20}}
            />
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonReg}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textReg}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: 15,
    height: 70,
  },
  appButtonContainer: {
    width: 120,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  textButton: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonReg: {
    width: 120,
    height: 50,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  textReg: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Header;
