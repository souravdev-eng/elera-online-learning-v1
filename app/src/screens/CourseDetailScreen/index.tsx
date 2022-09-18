import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {colors, Icons} from '../../theme';

import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {getCourseDetailsById} from '../../store/actions/course.action';
import {RootStackParamList} from '../../navigation/types';

import CourseLesson from '../../components/CourseLesson';
import AboutCourse from '../../components/AboutCourse';
import CourseReview from '../../components/CourseReview';
import Loading from '../../components/Loading';

type CourseDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'CourseDetails'
>;

const CourseDetailScreen = () => {
  const {params} = useRoute<CourseDetailScreenRouteProp>();
  const {handelGoBack} = useAppNavigation();
  const dispatch = useAppDispatch();
  const videoRef = useRef(null);
  const {courseDetails, loading} = useAppSelector(state => state.course);
  const {data} = useAppSelector(state => state.user);
  const [isPaused, setIsPaused] = useState(true);

  const handelPlay = useCallback(() => {
    setIsPaused(false);
  }, [isPaused]);

  useEffect(() => {
    dispatch(getCourseDetailsById({id: params.id, token: data.token}));
  }, []);

  return (
    <>
      {loading && <Loading />}
      {courseDetails && (
        <>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: '#fff',
              paddingBottom: '20%',
            }}>
            <>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 6,
                  zIndex: 1,
                  left: 4,
                }}
                onPress={handelGoBack}>
                <Image
                  source={Icons.ArrowBack}
                  style={{width: 30, height: 30, tintColor: '#fff'}}
                />
              </TouchableOpacity>
              <View style={styles.container}>
                <VideoPlayer
                  ref={videoRef}
                  source={{uri: courseDetails?.introVideo}}
                  poster={courseDetails?.image}
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
                  <Text style={styles.title}>{courseDetails?.title}</Text>
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
                    <Text style={styles.categoryText}>
                      {courseDetails?.category}
                    </Text>
                  </View>

                  <Image source={Icons.Star} style={styles.star} />
                  <Text style={styles.ratingText}>
                    {courseDetails?.ratingAvg} ({courseDetails?.totalStudent}{' '}
                    students)
                  </Text>
                </View>
                <View style={[styles.row, {marginVertical: 12}]}>
                  <Text style={styles.price}>${courseDetails?.price}</Text>
                  <Text style={styles.originalPrice}>
                    ${courseDetails?.originalPrice}
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
                      {courseDetails?.totalStudent} Students
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
                      {courseDetails?.durationHours} Hours
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Image source={Icons.FileText} style={styles.certificate} />
                    <Text style={styles.ratingText}>Certificate</Text>
                  </View>
                </View>
              </View>
              <CourseLesson />
              <AboutCourse
                imageUri={courseDetails?.creatorId?.profileImage}
                name={courseDetails?.creatorId?.nickName}
                bio={courseDetails?.creatorId?.bio}
                aboutCourse={courseDetails?.aboutCourse || ''}
              />
              <CourseReview />
            </>
          </ScrollView>
          <View style={{backgroundColor: '#fff', height: 48, width: '100%'}}>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default CourseDetailScreen;
