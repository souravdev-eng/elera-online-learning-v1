import {View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MessageCard from '../../components/MessageCard';
import LogoHeader from '../../components/LogoHeader';
import {colors} from '../../theme';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <LogoHeader
        title="Inbox"
        style={{
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.light.lightGrey2,
        }}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({item}) => <MessageCard />}
      />
      <TouchableOpacity style={styles.add}>
        <AntDesign name="plus" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default InboxScreen;
