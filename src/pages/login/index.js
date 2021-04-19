import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {logo, bg} from '../../../assets/image';
import {API} from '../../config/axios';
import {AppContext} from '../../components/context';

const Login = ({navigation}) => {
  const [, dispatch] = useContext(AppContext);
  // const isLogin = state.isLogin;
  const {control, handleSubmit, errors, reset} = useForm();

  const onSubmit = async (data) => {
    try {
      const body = JSON.stringify({
        email: data.email,
        password: data.password,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const user = await API.post('/login', body, config);
      const result = user.data.data.user;
      if (result.role == 'USER') {
        reset();
        dispatch({
          type: 'LOGIN_SUKSES',
          payload: result,
        });
        navigation.navigate('Home');
      } else {
        Alert.alert('your credentials are incorrect');
      }
    } catch (error) {
      Alert.alert('your credentials are incorrect..');
      console.log(error);
    }
  };
  useEffect(() => {
    // if (isLogin) {
    //   navigation.navigate('Home');
    // }
  }, []);
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View style={{height: 50, alignItems: 'center', marginTop: 20}}>
          <Image source={logo} style={{borderRadius: 20}} />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 40}}>Login</Text>
        </View>
        <View style={{flex: 2, paddingHorizontal: 20}}>
          {errors.email && (
            <Text style={styles.warning}>Email is required.</Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.form}
                onBlur={onBlur}
                keyboardType="email-address"
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.password?.type === 'required' && (
            <Text style={styles.warning}>Password is required.</Text>
          )}
          {errors.password?.type === 'minLength' && (
            <Text style={styles.warning}>
              Minimum 8 characters are required
            </Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
                placeholder="Password"
              />
            )}
            name="password"
            rules={{required: true, minLength: 8}}
            defaultValue=""
          />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleSubmit((data) => onSubmit(data))}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20}}>Don't have account ? </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold'}}
              onPress={() => navigation.navigate('Register')}>
              Klik here
            </Text>
          </View>
        </View>
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
  form: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    marginVertical: 10,
  },
  warning: {
    color: '#FF4058',
    fontSize: 15,
  },
  buttonLogin: {
    height: 50,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textLogin: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Login;
