import {View, Text} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {
  const upload = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.6,
      maxHeight: 400,
      maxWidth: 400,
    });
    //
    console.log(result);
  };

  return (
    <View>
      <Text>ImagePicker</Text>
    </View>
  );
};

export default ImagePicker;
