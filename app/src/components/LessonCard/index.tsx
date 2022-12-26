import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {colors} from '../../theme';

const CardLesson = ({index, title}: {index: number; title: string}) => {
  return (
    <View style={styles.lessonCard}>
      <View>
        <Text style={styles.lessonText}>
          {index + 1}. {title}
        </Text>
        <Text style={styles.time}>Video - 10:04 mins</Text>
      </View>
      <Pressable>
        <MaterialCommunityIcons
          name="play-circle"
          size={30}
          color={colors.light.primary}
        />
      </Pressable>
    </View>
  );
};

export default CardLesson;
