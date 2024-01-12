import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ViewAll from '../ViewAll';
import FilterCard from '../FilterCard';
import ReviewCard from '../ReviewCard';

import {RatingTags} from '../../assets/data/rating.data';

const CourseReview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Feedback</Text>
      <ViewAll
        star
        style={styles.viewAllContainer}
        title="4.8 (4,479 reviews)"
        // onPress={() => navigation.navigate('MostPopularCourse')}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {RatingTags.map(el => (
          <FilterCard
            star
            key={el}
            title={el}
            isActive={el === 'All' ? true : false}
          />
        ))}
      </ScrollView>
      {[1, 2, 3, 4, 5].map(el => (
        <ReviewCard key={el} />
      ))}
    </View>
  );
};

export default CourseReview;
