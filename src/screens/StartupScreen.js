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
      <Text style={styles.title}>pic</Text>
      <Text style={styles.title}>a</Text>
      <Text style={styles.title}>day</Text>
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
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
  },
});
