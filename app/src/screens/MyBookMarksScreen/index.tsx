import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { Icons } from '../../theme';

import CourseCard from '../../components/CourseCard';
import FilterCard from '../../components/FilterCard';
import GoBack from '../../components/GoBack';
import { Tags } from '../../assets/data/tagdata';

import { showMyBookMarks } from '../../store/actions/bookMarks.action';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { useBookMarkHook } from '../../hooks/common/useBookMarked';
import { useUserSelector } from '../../store';

const MyBookMarksScreen = () => {
  const { myBookMarks, bookMarks } = useAppSelector(state => state.bookMarked);
  const { checkIsBookedMark, handleAddAndRemoveBookMarkPress } = useBookMarkHook()
  const { navigation } = useAppNavigation();
  const { userToken } = useUserSelector();
  const dispatch = useAppDispatch()
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCourse = activeFilter === "All" ? myBookMarks : myBookMarks.filter((el) => el.category.toLocaleUpperCase() === activeFilter.toLocaleUpperCase())


  useEffect(() => {
    dispatch(showMyBookMarks({ token: userToken! }))
  }, [bookMarks?.length])

  const navigateToCourseDetail = (id: string) => {
    navigation.navigate('CourseDetails', { id });
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}
        ListHeaderComponent={
          <>
            <GoBack title="My Bookmark" iconName={Icons.More} />
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Tags}
              style={{ marginVertical: 12 }}
              renderItem={({ item }) => (
                <FilterCard
                  title={item}
                  isActive={item === activeFilter ? true : false}
                  onPress={() => setActiveFilter(item)}
                />
              )}
              keyExtractor={(_, idx) => idx.toString()}
            />
          </>
        }
        data={filterCourse}
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center' }}>
            <CourseCard {...item}
              bookMarked={checkIsBookedMark(item)}
              onPress={() => navigateToCourseDetail(item?.id)}
              onBookmarkPress={() => handleAddAndRemoveBookMarkPress(item?.id)}
            />
          </View>
        )}
      />
    </>
  );
};

export default MyBookMarksScreen;
