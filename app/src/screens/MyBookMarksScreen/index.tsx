import {View, FlatList} from 'react-native';
import React from 'react';
import {CourseListData} from '../../assets/data/courseList.data';
import {Tags} from '../../assets/data/tagdata';

import CourseCard from '../../components/CourseCard';
import FilterCard from '../../components/FilterCard';
import GoBack from '../../components/GoBack';
import {Icons} from '../../theme';
import {useAppSelector} from '../../hooks/useRedux';
import Loading from '../../components/Loading';

const MyBookMarksScreen = () => {
  const {loading, myBookMarks} = useAppSelector(state => state.user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          data={myBookMarks}
          renderItem={({item}) => (
            <View style={{alignItems: 'center'}}>
              <CourseCard {...item} />
            </View>
          )}
        />
      )}
    </>
  );
};

export default MyBookMarksScreen;
