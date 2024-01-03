import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ReceiveMessage from '../../components/ReceiveMessage';
import SendMessage from '../../components/SendMessage';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {colors, Icons} from '../../theme';
import styles from './styles';
import io from 'socket.io-client';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {RootStackParamList} from '../../navigation/types';
import {addMessage} from '../../store/reducers/chat.reducer';

const socket = io('http://192.168.0.104:4000');

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

const ChatScreen = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const {data} = useAppSelector(state => state.user);
  const {chatList} = useAppSelector(state => state.chat);
  const {handleGoBack} = useAppNavigation();
  const {params} = useRoute<ChatScreenRouteProp>();

  const handleSend = () => {
    const payload = {
      message: text,
      sender: {
        id: data?.user?.id,
        nickName: data?.user?.fullName,
        profileImage:
          data?.user?.profileImage ||
          'https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000',
      },
      receiver: {
        id: params?.id,
        nickName: params?.nickName,
        profileImage: params.profileImage,
      },
      createdAt: Date.now(),
    };

    socket.emit('chat', payload);
    dispatch(addMessage(payload));
    setText('');
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.row}>
                <TouchableWithoutFeedback onPress={handleGoBack}>
                  <Image source={Icons.ArrowBack} style={styles.icon} />
                </TouchableWithoutFeedback>
                <Image
                  style={styles.userImage}
                  source={{uri: params?.profileImage}}
                />
                <View>
                  <Text style={styles.userName}>{params?.nickName}</Text>
                  <Text style={styles.online}>Online</Text>
                </View>
              </View>
              <Image source={Icons.More} style={styles.icon} />
            </View>

            <FlatList
              data={chatList}
              ListHeaderComponent={
                <View style={styles.messageDate}>
                  <Text style={styles.messageDateText}>Today</Text>
                </View>
              }
              renderItem={({item}) => (
                <>
                  <ReceiveMessage />
                  <SendMessage />
                </>
              )}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
      <View style={{backgroundColor: '#fff', height: 84, opacity: 0.2}} />
      <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <TextInput
            multiline
            placeholder="Message"
            style={styles.input}
            value={text}
            onChangeText={t => setText(t)}
          />
          <Pressable onPress={() => console.warn('Press')}>
            <Ionicons name="ios-image" size={25} color={colors.light.grey1} />
          </Pressable>
        </View>
        {text.length > 0 ? (
          <TouchableOpacity
            onPress={handleSend}
            style={styles.voiceContainer}
            activeOpacity={0.8}>
            <Ionicons name="ios-send" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onLongPress={() => console.warn('Long Press')}
            style={styles.voiceContainer}
            activeOpacity={0.8}>
            <Ionicons name="mic" size={25} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
      {/* </View> */}
    </>
  );
};

export default ChatScreen;
