import React, {Fragment} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {addLeadingZero} from '../../utils/addLeadingZero';
import {Icons} from '../../theme';
import styles from './styles';

interface Video {
  title: string;
  videoUrl: string;
  _id: string;
}

interface Lesson {
  title: string;
  videos: Video[];
  _id: string;
}

const MyCourseDetailsList = ({data}: any) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}: {item: Lesson; index: number}) => (
        <Fragment key={index}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionText}>{item?.title}</Text>
            <Text style={styles.sectionTimeText}>15 mins</Text>
          </View>
          {item.videos.map((el: Video, idx: number) => (
            <View style={styles.listCardContainer} key={idx}>
              <View style={styles.flex}>
                <View style={styles.numberContainer}>
                  <Text style={styles.numberText}>
                    {addLeadingZero(idx + 1)}
                  </Text>
                </View>
                <View style={{width: '68%'}}>
                  <Text numberOfLines={1} style={styles.videoTitle}>
                    {el.title}
                  </Text>
                  <Text style={styles.videoTimeText}>10 mins</Text>
                </View>
                <TouchableOpacity
                  style={{marginHorizontal: 10}}
                  activeOpacity={0.8}
                  onPress={() => console.log(idx, el.videoUrl)}>
                  <Image source={Icons.PlayCircle} style={styles.playImage} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Fragment>
      )}
    />
  );
};

export default MyCourseDetailsList;
