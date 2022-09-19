import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icons} from '../../theme';
import FilterCard from '../FilterCard';

const ReviewCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image source={Icons.User1} style={styles.userImage} />
          <Text style={styles.userName} numberOfLines={1}>
            Sourav Majumdar
          </Text>
        </View>
        <FilterCard title="4.2" star style={{width: 60}} />
      </View>
      <View style={styles.userRating}>
        <Text style={styles.userRatingText} numberOfLines={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          impedit aliquid accusantium consequatur nihil eos autem? Obcaecati,
          modi. Distinctio dolorum nulla ipsa modi repellat at aliquam.
          Perferendis excepturi ea nobis.
        </Text>
      </View>
    </>
  );
};

export default ReviewCard;
