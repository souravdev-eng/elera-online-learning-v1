import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {GoBack} from '../../components';
import {useAppSelector} from '../../hooks/useRedux';
import {Icons} from '../../theme';
import styles from './styles';

const TopMentorsScreen = () => {
  const {creatorList} = useAppSelector(state => state.creator);

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
