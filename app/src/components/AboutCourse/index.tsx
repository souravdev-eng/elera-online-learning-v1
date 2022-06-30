import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {colors, Icons} from '../../theme';

const AboutCourse = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        {/* mentor */}
        <Text style={styles.mentorHeading}>Mentor</Text>
        <View style={styles.mentor}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Icons.User1} style={styles.mentorImage} />
            <View style={{width: '70%'}}>
              <Text style={styles.mentorName}>John Doe</Text>
              <Text style={styles.bio} numberOfLines={1}>
                Senior UI/UX Designer at Google
              </Text>
            </View>
          </View>
          <Pressable>
            <AntDesign name="message1" size={26} color={colors.light.primary} />
          </Pressable>
        </View>
        {/* About course */}
        <View>
          <Text style={styles.headingText}>About Course</Text>
          <Text style={styles.text}>
            Data structures form the heart of Redis. Rather than hiding
            functionality behind complex abstractions, Redis exposes several
            powerful data structures that developers use to store and query
            data. Learning about these different data structures is the key to
            mastering Redis.
          </Text>
        </View>
        {/* Tools */}
        {/* BUY Button */}
      </View>
    </ScrollView>
  );
};

export default AboutCourse;
