import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {colors} from '../../theme';
import styles from './styles';

const LearningList = ({data}: {data: string[]}) => {
  return (
    <>
      {data.map((el: any, index) => (
        <View style={styles.container} key={index}>
          <MaterialIcons
            name="done"
            size={26}
            color={colors.light.darkGrey}
            style={{marginRight: 8}}
          />
          <Text style={styles.pointText}>{el}</Text>
        </View>
      ))}
    </>
  );
};

export default LearningList;
