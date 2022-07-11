import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {MentorsListData} from '../../assets/data/mentorsList.data';
import GoBack from '../../components/GoBack';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {getCreatorList} from '../../store/actions/creator.action';
import {Icons} from '../../theme';
import styles from './styles';

const TopMentorsScreen = () => {
  const {token} = useAppSelector(state => state.user.data);
  const {creatorList, loading} = useAppSelector(state => state.creator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCreatorList(token));
  }, []);

  return (
    <>
      <FlatList
        style={{backgroundColor: '#fff'}}
        data={creatorList}
        ListHeaderComponent={<GoBack title="Top Mentors" />}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback>
                <>
                  <Image
                    source={{uri: item.profileImage}}
                    style={styles.userImage}
                  />
                  <View style={{width: '78%'}}>
                    <Text style={styles.title}>{item.nickName}</Text>
                    <Text style={styles.subTitle} numberOfLines={1}>
                      {item.bio}
                    </Text>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </View>
            <TouchableOpacity style={{}}>
              <Image source={Icons.MessageOutline} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </>
  );
};

export default TopMentorsScreen;
