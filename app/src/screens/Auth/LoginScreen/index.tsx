import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import { Icons } from '../../../theme';
import { useAppNavigation } from '../../../hooks/useAppNavigation';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const { navigation } = useAppNavigation();

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '689817067732-tva4vg3hejpcd09v296b35nr8ufb6ija.apps.googleusercontent.com',
  //   });
  // }, []);

  const signIn = async () => {
    try {
      // const {user} = await GoogleSignin.signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Icons.Illus1} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>Let's you in</Text>
      <TouchableOpacity style={styles.button}>
        <Image source={Icons.Facebook} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Image source={Icons.Google} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={Icons.Apple} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={{ borderBottomWidth: 0.5, width: '35%' }} />
        <Text style={styles.orText}>OR</Text>
        <View style={{ borderBottomWidth: 0.5, width: '35%' }} />
      </View>
      <TouchableOpacity
        style={styles.signupButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LoginWithPassword')}>
        <Text style={styles.signupButtonText}>Sign in with password</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Don't have an account?
        <TouchableWithoutFeedback
          style={{ marginTop: 25, width: '20%' }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

export default LoginScreen;
