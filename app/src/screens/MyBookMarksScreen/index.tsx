import {View, FlatList} from 'react-native';
import React from 'react';
import {Tags} from '../../assets/data/tagdata';
import {CourseListData} from '../../assets/data/courseList.data';

import GoBack from '../../components/GoBack';
import CourseCard from '../../components/CourseCard';
import FilterCard from '../../components/FilterCard';
import {Icons} from '../../theme';

const MyBookMarksScreen = () => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}
        ListHeaderComponent={
          <>
            <GoBack title="My Bookmark" iconName={Icons.More} />
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Tags}
              style={{marginVertical: 12}}
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
      />
    </>
  );
};

export default MyBookMarksScreen;
