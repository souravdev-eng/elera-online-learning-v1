import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';

interface Props {
  imageUri: string;
  style?: any;
  resizeMode?: any;
}

const AppImage: FC<Props> = ({
  imageUri,
  style,
  resizeMode = FastImage.resizeMode.contain,
}) => (
  <FastImage
    style={style}
    source={{
      uri: imageUri,
      priority: FastImage.priority.normal,
    }}
    resizeMode={resizeMode}
  />
);

export default AppImage;
