import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {logo, bg} from '../../../assets/image';
import {AppContext} from '../../components/context';
import {API, setAuthToken} from '../../config/axios';

const Register = ({navigation}) => {
  const [state, dispatch] = useContext(AppContext);
  const isLogin = state.isLogin;
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = async (data) => {
    try {
      const body = JSON.stringify({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const user = await API.post('/register', body, config);
      const result = user.data.data.user;

      dispatch({
        type: 'LOGIN_SUKSES',
        payload: result,
      });
      setAuthToken(result.token);

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('your credentials are incorrect..');
    }
  };

  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View style={{height: 50, alignItems: 'center', marginTop: 20}}>
          <Image source={logo} style={{borderRadius: 20}} />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 40}}>Register</Text>
        </View>
        <View style={{flex: 2, paddingHorizontal: 20}}>
          {errors.fullName && (
            <Text style={styles.warning}>Name is required.</Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Name"
              />
            )}
            name="fullName"
            rules={{required: true}}
            defaultValue=""
          />

          {errors.email && (
            <Text style={styles.warning}>Email is required.</Text>
          )}
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.form}
                onBlur={onBlur}
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
            style={styles.buttonReg}
            onPress={handleSubmit((data) => onSubmit(data))}>
            <Text style={styles.textReg}>Register</Text>
          </TouchableOpacity>
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
  buttonReg: {
    height: 50,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 3,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textReg: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Register;
