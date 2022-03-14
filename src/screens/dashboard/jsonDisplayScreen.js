import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {SizeConfig} from '../../constants/size-config';
import {COLORS} from '../../constants/colors';
import * as dataFile from '../../data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JsonDisplayScreen = ({navigation}) => {
  const [dataList, setDataList] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setLocalItem = async () => {
    setIsLoading(true);
    setIsLoaded(false);
    AsyncStorage.setItem('somekey', JSON.stringify(dataFile)).then(
      json => console.log('success!'),
      setIsLoaded(true),
      setIsLoading(false),
    );
    Alert.alert('Data stored in local storage').catch(error =>
      console.log('error!'),
    );
  };

  const getLocalItem = async () => {
    setIsLoading(true);
    setIsLoaded(false);
    try {
      const jsonValue = await AsyncStorage.getItem('somekey');
      const list = JSON.parse(jsonValue);
      setDataList(list);
      setIsLoaded(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const RenderList = () => {
    return dataList != null
      ? Object.values(dataList).map(item => {
          return (
            <View style={styles.dataListContainer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.dataListTitleText}>ID: </Text>
                <Text
                  style={{marginTop: SizeConfig.blockHeight * 1, color: 'red'}}>
                  {item.id}
                </Text>
              </View>
              <View style={{}}>
                <Text style={styles.dataListTitleText}>Title: </Text>
                <Text style={{color: 'red'}}>{item.title}</Text>
              </View>
              <View style={{}}>
                <Text style={styles.dataListTitleText}>Body: </Text>
                <Text style={{color: 'red'}}>{item.body}</Text>
              </View>
            </View>
          );
        })
      : null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={setLocalItem}>
        <View style={styles.Btn}>
          <Text style={styles.BtnText}>Save file to local storage</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={getLocalItem}>
        <View style={styles.Btn}>
          <Text style={styles.BtnText}>Get file from local storage</Text>
        </View>
      </TouchableOpacity>
      {isLoading && (
        <>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={COLORS.blackDark} />
          </View>
        </>
      )}
      {isLoaded && (
        <>
          <ScrollView
            style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}>
            <RenderList />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default JsonDisplayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  Btn: {
    height: SizeConfig.blockHeight * 7,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    backgroundColor: COLORS.greenMedium,
    marginVertical: SizeConfig.blockHeight * 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red"
  },
  BtnText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 3,
    fontWeight: '700',
  },
  scrollViewContainer: {
    backgroundColor: COLORS.whiteDark,
    paddingVertical: SizeConfig.blockHeight * 2,
  },
  dataListContainer: {
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    borderColor: COLORS.whiteMedium,
    borderWidth: 2,
    marginBottom: SizeConfig.blockHeight * 2,
    paddingVertical: SizeConfig.blockHeight * 1,
  },
  dataListTitleText: {
    fontWeight: 'bold',
    marginTop: SizeConfig.blockHeight * 1,
    fontSize: SizeConfig.blockHeight * 2,
    color: 'black',
  },
});
