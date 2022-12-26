import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import ViewAll from '../ViewAll';
import styles from './styles';

const MentorsList = ({data}: {data: any}) => {
  const {navigation} = useAppNavigation();

  const navigateToCreatorProfile = (id: string) => {
    navigation.navigate('AuthorProfile', {id});
  };

  return (
    <>
      <ViewAll
        style={styles.viewAllContainer}
        title="Top Mentors"
        onPress={() => navigation.navigate('TopMentors')}
      />
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.userCard}
            onPress={() => navigateToCreatorProfile(item?.id)}>
            <Image
              source={{uri: item?.profileImage}}
              style={styles.userNameCardImage}
            />
            <Text style={styles.userNameCardText} numberOfLines={1}>
              {item?.nickName}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </>
  );
};

export default MentorsList;
