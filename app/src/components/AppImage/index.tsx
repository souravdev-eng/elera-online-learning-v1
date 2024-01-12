import React, { FC } from 'react';
import { Image } from 'react-native'
// import FastImage from 'react-native-fast-image';

interface Props {
  imageUri: string;
  style?: any;
  resizeMode?: any;
}

const AppImage: FC<Props> = ({
  imageUri,
  style
}) => (
  <Image
    style={[style, { resizeMode: "contain" }]}
    source={{
      uri: imageUri,
    }}
  />
);

export default AppImage;
