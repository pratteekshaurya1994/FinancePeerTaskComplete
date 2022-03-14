import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {SizeConfig} from '../../constants/size-config';
import {COLORS} from '../../constants/colors';
import * as ImagePicker from 'react-native-image-picker';

const SelfieScreen = ({navigation}) => {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
      cameraType: 'front',
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.assets[0].uri};
        setImageSource(source.uri);
      }
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainConatiner}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Click the button below to take a selfie
          </Text>
        </View>
        <TouchableOpacity onPress={selectImage} style={styles.imageBtn}>
          <Text style={styles.imageBtnText}>
            Click here to take an awesome seflie
          </Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {imageSource === null ? (
            <Image
              source={require('../../assets/placeholder.png')}
              style={styles.imageBox}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={{uri: imageSource}}
              style={styles.imageBox}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelfieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteMedium,
  },
  mainConatiner: {
    width: SizeConfig.blockWidth * 94,
    marginHorizontal: SizeConfig.blockWidth * 3,
    flex: 1,
  },
  titleContainer: {
    height: SizeConfig.blockHeight * 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: SizeConfig.blockHeight * 2.3,
    fontWeight: '700',
    color: 'red',
  },
  imageBtn: {
    height: SizeConfig.blockHeight * 7,
    backgroundColor: COLORS.greenMedium,
    marginVertical: SizeConfig.blockHeight * 2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBtnText: {
    color: COLORS.whiteDark,
    fontSize: SizeConfig.blockHeight * 2,
  },
  imageContainer: {
    marginTop: SizeConfig.blockHeight * 10,
  },
  imageBox: {
    width: SizeConfig.blockWidth * 94,
    height: SizeConfig.blockHeight * 30,
  },
});
