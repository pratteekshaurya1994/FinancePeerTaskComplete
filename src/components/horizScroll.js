import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SizeConfig} from '../constants/size-config';

const HorizontalScrollComponent = ({navigation, imagePath}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={imagePath} resizeMode="cover" />
    </View>
  );
};

export default HorizontalScrollComponent;

const styles = StyleSheet.create({
  mainContainer: {
    height: SizeConfig.blockHeight * 25,
    width: SizeConfig.blockWidth * 30,
    // backgroundColor: "green",
    marginRight: SizeConfig.blockWidth * 32,
  },
  imageStyle: {
    height: SizeConfig.blockHeight * 25,
    width: SizeConfig.blockHeight * 30,
  },
});
