import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {bg, user} from '../../../assets/image';
import {Header} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <Header navigation={navigation} />
      <View style={{flex: 1, marginTop: 20, marginHorizontal: 20}}>
        <Text style={{fontSize: 30, marginVertical: 10, fontWeight: 'bold'}}>
          Profile
        </Text>
        <View style={{height: 130, flexDirection: 'row', marginBottom: 20}}>
          <Image
            source={user}
            style={{width: 120, height: 120, borderRadius: 60}}
          />
          <Text style={{fontSize: 30, marginLeft: 20, alignSelf: 'center'}}>
            Nama User
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="envelope" size={30} color="#000" />
          <Text style={styles.info}>Email</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="transgender" size={30} color="#000" />
          <Text style={styles.info}>Gender</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="phone" size={30} color="#000" />
          <Text style={styles.info}>Phone</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="map-marker" size={30} color="#000" />
          <Text style={styles.info}>Address</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textEdit}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  infoContainer: {
    height: 30,
    flexDirection: 'row',
    marginVertical: 15,
  },
  info: {
    fontSize: 20,
    position: 'absolute',
    marginLeft: 60,
  },
  buttonEdit: {
    width: 250,
    height: 50,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginTop: 40,
    alignSelf: 'center',
  },
  textEdit: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default Profile;
