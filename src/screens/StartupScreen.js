import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StartupScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FinancePeer</Text>
      <Text style={styles.title}>Task</Text>
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
