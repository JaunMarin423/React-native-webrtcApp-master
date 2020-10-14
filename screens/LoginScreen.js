import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function LoginScreen(props) {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      await AsyncStorage.setItem('userId', userId);
      setLoading(false);
      props.navigation.push('Call');
    } catch (err) {
      console.log('Error', err);
      setLoading(false);
    }
  };

  const login = async () => {
    await AsyncStorage.setItem('userId', userId);
    let user = await AsyncStorage.getItem('userId', userId);
    alert(user);
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.heading}>Correo</Text>
        <TextInput
          placeholder="Correo@example.com"
          onChangeText={text => setUserId(text)}
          mode="outlined"
          style={styles.input}
        />
        <Text style={styles.heading2}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          onChangeText={text => setUserPass(text)}
          mode="outlined"
          style={styles.input}
        />

        <Button onPress={login} title="hola"/>

        <Button
          title="LOGIN"
          mode="contained"
          onPress={onLogin}
          loading={loading}
          style={styles.btn}
          contentStyle={styles.btnContent}
          disabled={userId.length === 0}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#674a95',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    // alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  heading: {
    backgroundColor: '#3fb7c6',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    padding: 20,
    margin: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: '#ffffff'
  },
  heading2: {
    backgroundColor: '#3fb7c6',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    padding: 20,
    margin: 10,
    color: '#ffffff'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#3fb7c6',
    borderWidth: 1,
  },
  btn: {
    height: 60,
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 18,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
