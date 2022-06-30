import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {Icons} from '../../theme';

interface Props {
  title: string;
  price: number;
  originalPrice: number;
  ratingAvg: number;
  totalStudents: number;
  tag: string;
  image: string;
  onPress?: () => void;
  onBookmarkPress?: () => void;
}

const CourseCard: FC<Props> = props => {
  const {
    title,
    totalStudents,
    image,
    onBookmarkPress,
    onPress,
    originalPrice,
    price,
    ratingAvg,
    tag,
  } = props;
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
        <Image style={styles.bookMark} source={Icons.BookmarkOutline} />
      </TouchableOpacity>
      <View style={{overflow: 'hidden'}}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={styles.courseImage}
        />
      </View>
      <View style={{width: '60%'}}>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText} numberOfLines={1}>
            {tag}
          </Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.offerPrice}>${price}</Text>
          <Text style={styles.originalPrice}>${originalPrice}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icons.Star} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>
            {ratingAvg} | {totalStudents} students
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
