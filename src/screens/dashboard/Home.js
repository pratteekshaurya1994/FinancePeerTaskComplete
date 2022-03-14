import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {SizeConfig} from '../../constants/size-config';
import {COLORS} from '../../constants/colors';
import HorizontalScrollComponent from '../../components/horizScroll';
import VerticalScrollComponent from '../../components/vertScroll';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bgImage2.jpg')}
        style={styles.bgImage}>
        <View style={styles.horizontalScroll}>
          <View style={styles.horizontalTitleContainer}>
            <Text style={styles.horizontalTitleText}>
              Horizontal Scroll Banner
            </Text>
          </View>
          <View style={styles.horizontaldescContainer}>
            <Text style={styles.horizontalDescText}>
              Scroll Horizontally to see all the images
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.horizontalScrollContainer}
            showsHorizontalScrollIndicator={false}>
            <HorizontalScrollComponent
              imagePath={require('../../assets/food1.jpg')}
            />
            <HorizontalScrollComponent
              imagePath={require('../../assets/food2.jpg')}
            />
            <HorizontalScrollComponent
              imagePath={require('../../assets/food3.jpg')}
            />
            <HorizontalScrollComponent
              imagePath={require('../../assets/food4.jpg')}
            />
            <HorizontalScrollComponent
              imagePath={require('../../assets/food5.jpg')}
            />
          </ScrollView>
        </View>
        <View style={styles.verticalScroll}>
          <View style={styles.verticalTitleContainer}>
            <Text style={styles.verticalTitleText}>Vertical Scroll Banner</Text>
          </View>
          <View style={styles.verticaldescContainer}>
            <Text style={styles.verticalDescText}>
              Scroll Vertically to see all the images
            </Text>
          </View>
          <ScrollView
            vertical={true}
            style={styles.verticalScrollContainer}
            showsVerticalScrollIndicator={false}>
            <VerticalScrollComponent
              imagePath={require('../../assets/food1.jpg')}
            />
            <VerticalScrollComponent
              imagePath={require('../../assets/food2.jpg')}
            />
            <VerticalScrollComponent
              imagePath={require('../../assets/food3.jpg')}
            />
            <VerticalScrollComponent
              imagePath={require('../../assets/food4.jpg')}
            />
            <VerticalScrollComponent
              imagePath={require('../../assets/food5.jpg')}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  horizontalTitleContainer: {
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
  },
  horizontalTitleText: {
    fontSize: SizeConfig.blockHeight * 3.5,
    fontWeight: 'bold',
    color: COLORS.whiteDark,
  },
  horizontaldescContainer: {
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    marginBottom: SizeConfig.blockHeight * 2,
  },
  horizontalDescText: {
    fontSize: SizeConfig.blockHeight * 2.2,
    color: COLORS.whiteDark,
    fontWeight: '700',
  },
  horizontalScrollContainer: {
    height: SizeConfig.blockHeight * 25,
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    // backgroundColor: "red",
  },
  verticalScroll: {
    marginTop: SizeConfig.blockHeight * 3,
    // backgroundColor: "red",
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    paddingBottom: SizeConfig.blockHeight * 5,
    alignItems: 'center',
  },
  verticalTitleContainer: {},
  verticalTitleText: {
    fontSize: SizeConfig.blockHeight * 3.5,
    fontWeight: 'bold',
    color: COLORS.whiteDark,
  },
  verticaldescContainer: {
    marginBottom: SizeConfig.blockHeight * 2,
  },
  verticalDescText: {
    fontSize: SizeConfig.blockHeight * 2.2,
    color: COLORS.whiteDark,
    fontWeight: '700',
  },
  verticalScrollContainer: {
    height: SizeConfig.blockHeight * 25,
    // backgroundColor: "red",
  },
});
