import React from 'react';
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

const ChatScreen = () => {
  const [text, setText] = React.useState('');
  const {handleGoBack} = useAppNavigation();

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
                <Image style={styles.userImage} source={Icons.User1} />
                <View>
                  <Text style={styles.userName}>Sourav Majumdar</Text>
                  <Text style={styles.online}>Online</Text>
                </View>
              </View>
              <Image source={Icons.More} style={styles.icon} />
            </View>

            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
        <TouchableOpacity
          onLongPress={() => console.warn('Long Press')}
          style={styles.voiceContainer}
          activeOpacity={0.8}>
          {text.length > 0 ? (
            <Ionicons name="ios-send" size={20} color="#fff" />
          ) : (
            <Ionicons name="mic" size={25} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </>
  );
};

export default ChatScreen;
