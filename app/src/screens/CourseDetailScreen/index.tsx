import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ScrollViewComponent,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {colors, Icons} from '../../theme';
import {CourseDetail} from '../../assets/data/courseDetails.data';
import CourseDetailsTopNavigation from '../../navigation/CourseDetailsTopTabNavigation';

const CourseDetailScreen = () => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  const handelPlay = useCallback(() => {
    setIsPaused(false);
    console.log('isPaused', isPaused);
  }, [isPaused]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        height: '100%',
      }}>
      <>
        <View style={styles.container}>
          <VideoPlayer
            ref={videoRef}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            poster="https://i.imgur.com/oN8yGGA.jpg"
            style={styles.videoPlayer}
            showOnStart={false}
            posterResizeMod="cover"
            paused={isPaused}
            seekColor={colors.light.primary}
            disableBack={true}
            disableVolume={true}
            disablePlayPause={true}
            tapAnywhereToPause={true}
          />
          {isPaused === true && (
            <TouchableOpacity
              onPress={handelPlay}
              style={styles.playIconContainer}>
              <Ionicons
                name="ios-play-circle"
                size={40}
                color={colors.light.PrimaryLight}
                style={{alignSelf: 'center', marginLeft: 2, opacity: 0.8}}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{paddingHorizontal: 12}}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{CourseDetail.title}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <FontAwesome
                // active --> bookmark
                name="bookmark-o"
                size={25}
                color={colors.light.PrimaryLight}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.category}>
              <Text style={styles.categoryText}>{CourseDetail.category}</Text>
            </View>

            <Image source={Icons.Star} style={styles.star} />
            <Text style={styles.ratingText}>
              {CourseDetail.ratingAvg} ({CourseDetail.totalStudent} students)
            </Text>
          </View>
          <View style={[styles.row, {marginVertical: 12}]}>
            <Text style={styles.price}>${CourseDetail.price}</Text>
            <Text style={styles.originalPrice}>
              ${CourseDetail.originalPrice}
            </Text>
          </View>
          <View style={[styles.row, styles.courseDetailsWrapper]}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color={colors.light.PrimaryLight}
                style={{marginRight: 4}}
              />
              <Text style={styles.ratingText}>
                {CourseDetail.totalStudent} Students
              </Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="clock"
                size={20}
                color={colors.light.PrimaryLight}
                style={{marginRight: 4}}
              />
              <Text style={styles.ratingText}>
                {CourseDetail.durationHours} Hours
              </Text>
            </View>
            <View style={styles.row}>
              <Image source={Icons.FileText} style={styles.certificate} />
              <Text style={styles.ratingText}>Certificate</Text>
            </View>
          </View>
        </View>
        <CourseDetailsTopNavigation />
      </>
    </ScrollView>
  );
};

export default CourseDetailScreen;
