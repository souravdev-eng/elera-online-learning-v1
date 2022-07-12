import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {colors, Icons} from '../../theme';

interface Props {
  name: string;
  bio: string;
  imageUri: string;
  aboutCourse: string;
}

const AboutCourse: FC<Props> = ({name, bio, imageUri, aboutCourse}) => {
  return (
    <>
      <View style={styles.container}>
        {/* mentor */}
        <Text style={styles.mentorHeading}>Mentor</Text>
        <View style={styles.mentor}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: imageUri}} style={styles.mentorImage} />
            <View style={{width: '70%'}}>
              <Text style={styles.mentorName}>{name}</Text>
              <Text style={styles.bio} numberOfLines={1}>
                {bio}
              </Text>
            </View>
          </View>
          <Pressable>
            <AntDesign name="message1" size={26} color={colors.light.primary} />
          </Pressable>
        </View>
        {/* About course */}
        <View style={{marginTop: 10}}>
          <Text style={styles.headingText}>About Course</Text>
          <Text style={styles.text}>{aboutCourse}</Text>
        </View>
        {/* Tools */}
        {/* BUY Button */}
      </View>
    </>
  );
};

export default AboutCourse;
