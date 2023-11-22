import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, CheckBox } from 'react-native';

const ProfileTab = ({ user, onLogout }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('password123'); // Здесь нужно использовать реальный пароль пользователя

  return (
    <View style={styles.tabContainer}>
      <Text>Имя: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Номер телефона: {user.phone}</Text>
      {showPassword && <Text>Пароль: {password}</Text>}
      <CheckBox
        value={showPassword}
        onValueChange={setShowPassword}
        style={styles.checkbox}
      />
      <Text>Показать пароль</Text>
      <Button title="Выйти из профиля" onPress={onLogout} />
    </View>
  );
};

const MenuScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'Иван',
    email: 'ivan@example.com',
    phone: '1234567890',
    // Добавьте другие данные пользователя, если необходимо
  });
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    // Логика для выхода из профиля, например, сброс состояния пользователя и навигации на экран регистрации
    setUser({});
    setShowProfile(false);
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Профиль"
        onPress={() => setShowProfile(true)}
      />
      {showProfile && <ProfileTab user={user} onLogout={handleLogout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginTop: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default MenuScreen;
