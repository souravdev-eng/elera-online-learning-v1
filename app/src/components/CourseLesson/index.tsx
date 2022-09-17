import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {colors} from '../../theme';
import SectionTitle from '../SectionTitle';

const CourseLesson = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <SectionTitle
            title="Section 1 - Introduction"
            isActive={isActive}
            onPress={() => setIsActive(!isActive)}
          />
        }
        data={[1, 2, 3, 4, 5]}
        renderItem={({item: any}) =>
          isActive === false ? null : (
            <View style={styles.lessonCard}>
              <View>
                <Text style={styles.lessonText}>1. Welcome to the course!</Text>
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
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CourseLesson;
