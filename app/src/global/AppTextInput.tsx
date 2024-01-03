import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {colors, width} from '../theme';
const {light} = colors;

interface AppTextInputProps {
  children: React.ReactNode;
  isActive: boolean;
  style?: StyleProp<ViewStyle>;
  row?: boolean;
}

const AppTextInput: FC<AppTextInputProps> = ({
  children,
  isActive = false,
  style,
  row = false,
}) => {
  return (
    <View
      style={[
        styles.textInput,
        isActive && styles.textInputActive,
        row && styles.row,
        style,
      ]}>
      {children}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: light.lightGrey,
    borderColor: light.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    height: 56,
    marginVertical: 10,
    width: width / 1.1,
    paddingRight: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputActive: {
    backgroundColor: light.blueLight,
    borderWidth: 1,
    borderColor: light.primary,
  },
});
