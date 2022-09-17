import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {colors} from '../../theme';
import styles from './styles';

interface Props {
  point: string;
}

const LearningList = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((el: any) => (
        <View style={styles.container} key={Math.random()}>
          <MaterialIcons
            name="done"
            size={26}
            color={colors.light.darkGrey}
            style={{marginRight: 8}}
          />
          <Text style={styles.pointText}>Learn all fundamental about k8s</Text>
        </View>
      ))}
    </>
  );
};

export default LearningList;
