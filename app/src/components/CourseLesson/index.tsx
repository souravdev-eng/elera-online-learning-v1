import {View, Text, Pressable, FlatList} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {colors} from '../../theme';
import SectionTitle from '../SectionTitle';

interface Props {
  data: any;
}

const CourseLesson: FC<Props> = ({data}) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveData, setActiveData] = useState(data);

  useEffect(() => {
    let res = isActiveData?.lessons?.map((el: any) => {
      el.isSelected = false;
      return {...el};
    });
    setActiveData({isActiveData: res});
  }, []);

  const handelActive = (index: any) => {
    let arr = isActiveData?.lessons?.map((el: any, idx: any) => {
      if (idx === index) {
        el.isSelected = !el.isSelected;
      }
      return {...el};
    });
    setActiveData({isActiveData: arr});
  };

  const handelRenderItem = ({item, index}: {item: any; index: any}) =>
    isActive === false ? null : (
      <View style={styles.lessonCard}>
        <View>
          <Text style={styles.lessonText}>
            {index + 1}. {item?.title}
          </Text>
          <Text style={styles.time}>Video - 10:04 mins</Text>
        </View>
        <Pressable>
          <MaterialCommunityIcons
            name="play-circle"
            size={30}
            color={colors.light.primary}
          />
        </Pressable>
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            {data.lessons.map((el: any, index: any) => (
              <SectionTitle
                key={el?._id}
                title={el?.title}
                isActive={el?.isSelected}
                onPress={() => handelActive(index)}
              />
            ))}
          </>
        }
        data={data?.lessons}
        renderItem={handelRenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CourseLesson;
