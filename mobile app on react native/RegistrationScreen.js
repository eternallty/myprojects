// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';


export default function RegistrationScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = () => {
    if (name === '' || email === '' || phone === '' || password === '') {
    alert('Пожалуйста, заполните все поля перед регистрацией.');
    return; // Прерываем выполнение функции, если какое-то поле не заполнено
  }
  if (name.length < 5 || name.length > 50) {
    alert('Имя должно содержать от 5 до 50 символов.');
    return;
  }
  if (!email.includes('@') || email.length < 8) {
    alert('Пожалуйста, введите действительный адрес электронной почты.');
    return;
  }
  if (!/^\d{11}$/.test(phone)) {
    alert('Пожалуйста, введите действительный номер телефона (11 цифр).');
    return;
  }
  if (password.length < 8 || password.length > 50) {
    alert('Пароль должен содержать от 8 до 50 символов.');
    return;
  }
  alert('Успешная регистрация!');
    navigation.navigate('Main', { screen: 'Menu' });
  };

  const handleLogin = () => {
  navigation.navigate('Login'); // Замените 'Login' на имя вашего экрана входа
};


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegistration}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 10,
    width: 300,
  },
  registerButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
