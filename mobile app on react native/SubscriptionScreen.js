import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SubscriptionScreen = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);

  const handleSubscription = (subscriptionType) => {
    setSelectedSubscription(subscriptionType);
  };

  const handleSubscribe = () => {
    if (selectedSubscription) {
      setIsSubscriptionActive(true);
      alert(`Подписка на ${selectedSubscription} оформлена`);
    } else {
      alert('Сначала выберите подписку');
    }
  };

  const handleUnsubscribe = () => {
    setIsSubscriptionActive(false);
    setSelectedSubscription(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Подписка</Text>
      <TouchableOpacity
        style={[
          styles.subscriptionButton,
          selectedSubscription === 'неделю' ? { backgroundColor: 'red' } : null,
        ]}
        onPress={() => handleSubscription('неделю')}
      >
        <View style={styles.subscriptionItem}>
          <Image source={require('./pass.png')} style={styles.subscriptionImage} />
          <Text style={styles.subscriptionText}>На неделю - стоимость 200 рублей</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.subscriptionButton,
          selectedSubscription === 'месяц' ? { backgroundColor: 'red' } : null,
        ]}
        onPress={() => handleSubscription('месяц')}
      >
        <View style={styles.subscriptionItem}>
          <Image source={require('./pass.png')} style={styles.subscriptionImage} />
          <Text style={styles.subscriptionText}>На месяц - стоимость 500 рублей</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.subscriptionButton,
          selectedSubscription === 'год' ? { backgroundColor: 'red' } : null,
        ]}
        onPress={() => handleSubscription('год')}
      >
        <View style={styles.subscriptionItem}>
          <Image source={require('./pass.png')} style={styles.subscriptionImage} />
          <Text style={styles.subscriptionText}>На год - стоимость 1500 рублей</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.subscribeButton,
          selectedSubscription ? { backgroundColor: 'red' } : null,
        ]}
        onPress={handleSubscribe}
        disabled={!selectedSubscription}
      >
        <Text style={styles.buttonText}>Оформить подписку</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.unsubscribeButton,
          isSubscriptionActive ? { backgroundColor: 'red' } : null,
        ]}
        onPress={handleUnsubscribe}
        disabled={!isSubscriptionActive}
      >
        <Text style={styles.buttonText}>Отключить подписку</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subscriptionButton: {
    width: '50%',
    marginTop: 10,
    alignItems: 'center',
  },
  subscriptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriptionImage: {
    width: 50,
    height: 50,
  },
  subscriptionText: {
    marginLeft: 10,
  },
  subscribeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
  unsubscribeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
  },
});

export default SubscriptionScreen;
