import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { ViewAll, CourseCard, FilterCard, MentorsList } from '../../components';
import { Tags } from '../../assets/data/tagdata';

import { useHomeHook } from './hooks/useHomeHooks';
import { useHomeLayout } from './useHomeLayout';

import { Icons } from '../../theme';
import styles from './styles';
import { useAppSelector } from '../../hooks/useRedux';


const HomeScreen: React.FC = () => {
  const { data, courseList, navigation, creatorList, navigateToCourseDetail, handleBookMarkPress } =
    useHomeHook();
  const { renderNotification, renderBookMark, renderSearchBar } = useHomeLayout();
  const [activeFilter, setActiveFilter] = useState("All");
  const { bookMarks } = useAppSelector((state) => state.bookMarked)


  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#FCFCFC' }}>
      <View style={styles.container}>
        {/* Heder wrapper */}
        <View style={styles.userHeaderWrapper}>
          <View style={{ flexDirection: 'row', width: '70%' }}>
            <Image source={Icons.User1} style={styles.userImage} />
            <View>
              <Text style={styles.gridText}>Good Morning 👋</Text>
              <Text style={styles.userName}>{data?.user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.iconWrapper}>
            {renderBookMark()}
            {renderNotification()}
          </View>
        </View>
        {renderSearchBar()}

        {/* <TouchableOpacity activeOpacity={0.8} style={styles.bannerContainer} /> */}
        <MentorsList data={creatorList} />

        <View style={{ marginTop: 22 }}>
          <ViewAll
            style={styles.viewAllContainer}
            title="Most Popular Course"
            onPress={() => navigation.navigate('MostPopularCourse')}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Tags}
            style={{ marginBottom: 12 }}
            renderItem={({ item }) => (
              <FilterCard
                title={item}
                isActive={item === activeFilter ? true : false}
                onPress={() => setActiveFilter(item)}
              />
            )}
            keyExtractor={(_, idx) => idx.toString()}
          />
          <View style={{ alignItems: 'center' }}>
            {courseList.map((el, index) => (
              <CourseCard
                bookMarked={bookMarks && bookMarks?.includes(el?.id) ? true : false}
                {...el}
                key={index}
                onPress={() => navigateToCourseDetail(el?.id)}
                onBookmarkPress={() => handleBookMarkPress(el?.id)}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
