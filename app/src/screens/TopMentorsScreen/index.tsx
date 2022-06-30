import React from 'react';
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
import {Icons} from '../../theme';
import styles from './styles';

const TopMentorsScreen = () => {
  return (
    <>
      <FlatList
        style={{backgroundColor: '#fff'}}
        data={MentorsListData}
        ListHeaderComponent={
          <>
            <GoBack title="Top Mentors" />
          </>
        }
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback>
                <>
                  <Image source={{uri: item.image}} style={styles.userImage} />
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subTitle}>{item.specialty}</Text>
                  </View>
                </>
              </TouchableWithoutFeedback>
            </View>
            <TouchableOpacity>
              <Image source={Icons.MessageOutline} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </>
  );
};

export default TopMentorsScreen;
