import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {CourseCard, GoBack, Loading} from '../../components';
import {Icons} from '../../theme';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {getCreatorById} from '../../store/actions/creator.action';

const AuthorProfileScreen = () => {
  const dispatch = useAppDispatch();
  const {params} = useRoute();

  const {creatorDetails, loading} = useAppSelector(state => state.creator);
  const {courseList} = useAppSelector(state => state.course);
  const {data} = useAppSelector(state => state.user);

  useEffect(() => {
    // @ts-ignore
    dispatch(getCreatorById({token: data?.token!, id: params?.id}));
    // @ts-ignore
  }, [params?.id]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GoBack iconName={Icons.More} />
          <View style={styles.flex}>
            <Image
              source={{uri: creatorDetails?.profileImage}}
              style={styles.userImage}
            />
            <Text style={styles.title}>{creatorDetails?.nickName}</Text>
            <Text style={styles.subTitle}>{creatorDetails?.bio}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.title}>{creatorDetails?.totalCourse}</Text>
              <Text style={styles.subTitle}>Courses</Text>
            </View>
            <View style={styles.divider} />

            <View style={styles.column}>
              <Text style={styles.title}>{creatorDetails?.totalStudent}</Text>
              <Text style={styles.subTitle}>Students</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.column}>
              <Text style={styles.title}>{creatorDetails?.totalReviews}</Text>
              <Text style={styles.subTitle}>Reviews</Text>
            </View>
          </View>
          <View style={styles.buttonsGroup}>
            <TouchableOpacity style={styles.buttonFill} activeOpacity={0.7}>
              <Image source={Icons.Message} style={styles.iconWhite} />
              <Text style={styles.buttonFillText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutLine} activeOpacity={0.7}>
              <Image source={Icons.Message} style={styles.icon} />
              <Text style={styles.buttonOutLineText}>Website</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {courseList.map((item: any) => (
              <CourseCard {...item} key={item.id} />
            ))}
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
};

export default AuthorProfileScreen;
