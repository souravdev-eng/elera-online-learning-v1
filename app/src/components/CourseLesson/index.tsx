import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {colors} from '../../theme';
import SectionTitle from '../SectionTitle';

const CourseLesson = () => {
  return (
    <View style={styles.container}>
      <SectionTitle />
      <View style={styles.lessonCard}>
        <View>
          <Text style={styles.lessonText}>Lesson</Text>
          <Text style={styles.time}>10 mins</Text>
        </View>
        <Pressable>
          <MaterialCommunityIcons
            name="play-circle"
            size={30}
            color={colors.light.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CourseLesson;
