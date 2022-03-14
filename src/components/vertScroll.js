import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SizeConfig} from '../constants/size-config';
// import { COLORS } from '../../constants/colors';

const VerticalScrollComponent = ({navigation, imagePath}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={imagePath} resizeMode="cover" />
    </View>
  );
};

export default VerticalScrollComponent;

const styles = StyleSheet.create({
  mainContainer: {
    height: SizeConfig.blockHeight * 25,
    width: SizeConfig.blockWidth * 60,
    // backgroundColor: "green",
    marginBottom: SizeConfig.blockHeight * 5,
  },
  imageStyle: {
    height: SizeConfig.blockHeight * 25,
    width: SizeConfig.blockHeight * 30,
  },
});
