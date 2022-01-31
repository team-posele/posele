import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native-web';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate.navigate('MyTabs');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    console.log(`you signed up`);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(`Signing up with user email: ${user.email}`);
      })
      .catch(error => {
        console.log(`error! ${error}`);
      });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(`Logging in with user email: ${user.email}`);
      })
      .catch(error => {
        console.log(`error! ${error}`);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Log in to your posele account</Text>
      </View>

      {/* behavior: padding makes the view get out of the way of the device keyboard*/}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText} onPress={handleLogin}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText} onPress={handleSignup}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Play as Guest</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {fontSize: 24, textAlign: 'center'},
  loginButton: {
    backgroundColor: '#414BB2',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: 'white',
    borderColor: '#414BB2',
    borderWidth: 3,
    width: '60%',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButtonText: {
    color: '#414BB2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#414BB233',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  inputcontainer: {flex: 5, width: '80%'},
});
