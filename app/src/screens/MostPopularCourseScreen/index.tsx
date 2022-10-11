import {View, FlatList} from 'react-native';
import React from 'react';
import CourseCard from '../../components/CourseCard';
import GoBack from '../../components/GoBack';
import {Tags} from '../../assets/data/tagData';
import FilterCard from '../../components/FilterCard';
import {useAppSelector} from '../../hooks/useRedux';

const MostPopularCourseScreen = () => {
  const {courseList} = useAppSelector(state => state.course);
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}
        ListHeaderComponent={
          <>
            <GoBack title="Most Popular Course" />
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Tags}
              style={{marginVertical: 12, backgroundColor: '#fff'}}
              renderItem={({item}) => (
                <FilterCard
                  title={item}
                  isActive={item === 'All' ? true : false}
                />
              )}
              keyExtractor={(_, idx) => idx.toString()}
            />
          </>
        }
        data={courseList}
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <CourseCard {...item} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default MostPopularCourseScreen;
