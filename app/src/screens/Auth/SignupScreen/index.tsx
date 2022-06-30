import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {colors, Icons} from '../../../theme';
import {useAppNavigation} from '../../../hooks/useAppNavigation';

const SignupScreen = () => {
  const {handelGoBack, navigation} = useAppNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginTop: 10, marginBottom: 30}}
        onPress={handelGoBack}>
        <AntDesign name="arrowleft" size={24} color={colors.light.grey} />
      </TouchableOpacity>
      <Text style={styles.title}>Create your account</Text>

      <View style={[styles.textInput, isEmailActive && styles.textInputActive]}>
        <Ionicons
          name="mail"
          size={18}
          color={isEmailActive ? colors.light.primary : colors.light.grey1}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={colors.light.grey1}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          onFocus={() => setIsEmailActive(true)}
          onBlur={() => setIsEmailActive(false)}
        />
      </View>
      <View
        style={[styles.textInput, isPasswordActive && styles.textInputActive]}>
        <Ionicons
          name="md-lock-closed"
          size={18}
          color={isPasswordActive ? colors.light.primary : colors.light.grey1}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor={colors.light.grey1}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          onFocus={() => setIsPasswordActive(true)}
          onBlur={() => setIsPasswordActive(false)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View style={styles.divider}>
          <View style={{borderBottomWidth: 0.5, width: '32%'}} />
          <Text style={styles.orText}>or continue with</Text>
          <View style={{borderBottomWidth: 0.5, width: '32%'}} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Image source={Icons.Google} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Image source={Icons.Facebook} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Image source={Icons.Apple} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>
          Already have an account?
          <TouchableWithoutFeedback
            style={{marginTop: 25, width: '20%'}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signinText}> Sign In</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;
