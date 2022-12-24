import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface Props {
  title: string;
  image: string;
  onPress?: () => void;
  completePercentage: number;
  hrs: number;
  mins: number;
  videoNumber: number;
  videoComplete: number;
}

const MyCourseCard: FC<Props> = props => {
  const {
    title,
    image,
    hrs = 20,
    mins = 30,
    completePercentage = 20,
    videoNumber = 1,
    videoComplete = 3,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={{overflow: 'hidden'}}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={styles.courseImage}
        />
      </View>
      <View style={{width: '90%'}}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.timeText}>
          {hrs} hrs {mins} mins
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'pink',
            width: '70%',
          }}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progress, {width: `${completePercentage}%`}]}
            />
          </View>
          <Text style={styles.lesson}>
            {videoNumber} / {videoComplete}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyCourseCard;
