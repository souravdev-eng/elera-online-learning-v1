import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {CourseListData} from '../../assets/data/courseList.data';
import CourseCard from '../../components/CourseCard';
import GoBack from '../../components/GoBack';
import {Tags} from '../../assets/data/tagdata';
import FilterCard from '../../components/FilterCard';

const MostPopularCourseScreen = () => {
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
        data={CourseListData}
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
