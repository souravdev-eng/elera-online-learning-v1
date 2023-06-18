import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

import MessageCard from '../../components/MessageCard';
import LogoHeader from '../../components/LogoHeader';
import {colors} from '../../theme';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {getAllUser} from '../../store/reducers/chat.reducer';

const InboxScreen = () => {
  const {navigation} = useAppNavigation();
  const {chatContactList} = useAppSelector(state => state.chat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [chatContactList.length]);

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
        data={chatContactList}
        renderItem={({item}) => <MessageCard {...item} />}
      />
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate('NewContact')}>
        <AntDesign name="plus" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default InboxScreen;
