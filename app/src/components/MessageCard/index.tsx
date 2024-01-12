import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './styles';

interface Props {
  id: string;
  nickName: string;
  profileImage: string;
}

const MessageCard: FC<Props> = ({id, nickName, profileImage}) => {
  const {navigation} = useAppNavigation();

  return (
    <>
      <TouchableOpacity
        style={styles.messageContainer}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('Chat', {
            id,
            nickName,
            profileImage,
          })
        }>
        <View style={styles.row}>
          <Image source={{uri: profileImage}} style={styles.userImage} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.userName}>{nickName}</Text>
            <Text style={styles.message} numberOfLines={1}>
              How are you
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.numberOfMessageContainer}>
            <Text style={styles.numberOfMessage}>2</Text>
          </View>
          <Text style={styles.time}>10:20 PM</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessageCard;
