import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import styles from './styles';

interface Props {
  bio: string;
  nickName: string;
  profileImage: any;
  id: string;
}

const ContactList: FC<Props> = ({bio, nickName, profileImage, id}) => {
  const {navigation} = useAppNavigation();

  return (
    <>
      <TouchableOpacity
        style={styles.messageContainer}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('Chat', {
            nickName,
            id,
            profileImage,
          })
        }>
        <View style={styles.row}>
          <View style={styles.userImage}>
            <Image source={{uri: profileImage}} style={styles.userImage} />
          </View>
          <View style={{marginLeft: 10, width: '100%'}}>
            <Text style={styles.userName}>{nickName}</Text>
            <Text style={styles.message} numberOfLines={1}>
              {bio}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactList;
