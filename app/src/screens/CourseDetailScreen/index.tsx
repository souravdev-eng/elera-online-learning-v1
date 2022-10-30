import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

<<<<<<< HEAD
import styles from './styles';
import {colors, Icons} from '../../theme';

import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
=======
>>>>>>> 49990abfaa3e1cfe0c7afc9fc29ca9d4a5701751
import {getCourseDetailsById} from '../../store/actions/course.action';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {RootStackParamList} from '../../navigation/types';
import {
  CourseLesson,
  AboutCourse,
  CourseReview,
  Loading,
  LearningList,
  VirtualizedScrollView,
} from '../../components';

import {colors, Icons} from '../../theme';
import styles from './styles';

type CourseDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'CourseDetails'
>;

const CourseDetailScreen = () => {
  const {params} = useRoute<CourseDetailScreenRouteProp>();
<<<<<<< HEAD
  const {handelGoBack} = useAppNavigation();
  const dispatch = useAppDispatch();
  const videoRef = useRef(null);
  const {courseDetails, loading} = useAppSelector(state => state.course);
  const {data} = useAppSelector(state => state.user);
  const [isPaused, setIsPaused] = useState(true);
=======
  const {data} = useAppSelector(state => state.user);
  const {courseDetails, loading} = useAppSelector(state => state.course);
  const videoRef = useRef(null);
  const dispatch = useAppDispatch();
>>>>>>> 49990abfaa3e1cfe0c7afc9fc29ca9d4a5701751

  const [isPaused, setIsPaused] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const token = data?.token!;
  const handelPlay = useCallback(() => {
    setIsPaused(false);
  }, [isPaused]);

  useEffect(() => {
    dispatch(getCourseDetailsById({id: params.id, token}));
  }, []);

  return (
    <>
      {loading && <Loading />}
      {courseDetails && (
<<<<<<< HEAD
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
=======
        <VirtualizedScrollView
          style={{
            flexGrow: 1,
            backgroundColor: '#fff',
            paddingBottom: '20%',
          }}>
          <>
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
                    style={{
                      alignSelf: 'center',
                      marginLeft: 2,
                      opacity: 0.8,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={{paddingHorizontal: 12}}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>{courseDetails?.title}</Text>
>>>>>>> 49990abfaa3e1cfe0c7afc9fc29ca9d4a5701751
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
<<<<<<< HEAD
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
=======
            </View>
            {/* @@@@@@@@@@@@@@@@ Buttons @@@@@@@@@@@@@@@*/}
            <View style={styles.buttonsWrapper}>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyNowText}>Buy Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addToCart}>
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
            <LearningList />
            <Text style={styles.mentorHeading}>Curriculum</Text>
            <CourseLesson
              data={courseDetails}
              // isActive={isActive}
              // onActivePress={() => setIsActive(!isActive)}
            />

            <AboutCourse
              imageUri={courseDetails?.creatorId?.profileImage}
              name={courseDetails?.creatorId?.nickName}
              bio={courseDetails?.creatorId?.bio}
              aboutCourse={courseDetails?.aboutCourse || ''}
            />
            <CourseReview />
          </>
        </VirtualizedScrollView>
>>>>>>> 49990abfaa3e1cfe0c7afc9fc29ca9d4a5701751
      )}
    </>
  );
};

export default CourseDetailScreen;
