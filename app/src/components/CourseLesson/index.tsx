import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import SectionTitle from '../SectionTitle';
import CardLesson from '../LessonCard';
import styles from './styles';

interface Props {
  data: any;
}

interface LessonProps {
  _id: string;
  title: string;
  videos: {title: string; videoUrl: string}[];
}

const CourseLesson: FC<Props> = ({data}) => {
  const handleRenderItem = ({item}: {item: LessonProps}) => {
    return (
      <SectionTitle key={item?._id} title={item?.title}>
        {item.videos.map((el, idx: number) => (
          <CardLesson index={idx} title={el?.title} key={idx} />
        ))}
      </SectionTitle>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.lessons}
        renderItem={handleRenderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default CourseLesson;
