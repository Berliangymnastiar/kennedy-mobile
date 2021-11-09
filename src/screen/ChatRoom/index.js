import React, {useEffect, useRef, useState} from 'react';
import {format} from 'timeago.js';
import {API_URL} from '@env';
// import {SOCKET_URL} from '@env';
import {io} from 'socket.io-client';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getChat, postChat} from '../../utils/Chat';
import {connect} from 'react-redux';

const ChatRoom = props => {
  console.log(props);
  const scrollViewRef = useRef();
  const date = new Date();
  const formatedDate =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();

  const auth = useSelector(state => state.auth);
  const [chatData, setChatData] = useState([]);
  const [message, setMessage] = useState('');

  const getChatHandler = () => {
    const params = {
      sender_id: auth?.userInfo[0].id,
      receiver_id: props.route.params.receiverId,
    };
    return getChat(params)
      .then(res => {
        setChatData(res.data.result);
      })
      .catch(err => console.log(err));
  };

  const onSendMessages = () => {
    const data = {
      user_id_sender: auth.userInfo[0].id,
      user_id_receiver: props.route.params.receiverId,
      message,
      timestamp: formatedDate,
    };
    return postChat(data)
      .then(() => {
        getChatHandler();
        return setMessage('');
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    let socket = io(API_URL);
    getChatHandler();
    socket.on(auth?.userInfo[0]?.id, data => {
      getChatHandler();
    });
    return () => {
      socket.off(auth?.userInfo[0]?.id);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <Pressable
          style={styles.wrapperBack}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={26}></Icon>
          <Text style={styles.chat}>Chat Room</Text>
        </Pressable>
        {chatData?.map(chat => {
          return (
            <View style={styles.wrapperPosition} key={chat.id}>
              {chat.user_id_sender === auth.userInfo[0]?.id && (
                <View style={styles.wrapperChatSender}>
                  <Text style={styles.chatSender}>{chat.message}</Text>
                </View>
              )}
              {chat.user_id_sender !== auth.userInfo[0]?.id && (
                <View style={styles.wrapperChatReceiver}>
                  <Text style={styles.chatReceiver}>{chat.message}</Text>
                </View>
              )}
              <Text style={styles.time}>{format(chat.timestamp)}</Text>
            </View>
          );
        })}
        <View style={styles.wrapperInputSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Type a message"
            placeholderTextColor="gray"
            keyboardType={'email-address'}
            value={message}
            onChangeText={value => setMessage(value)}
          />
          <Icon
            name="send"
            style={styles.searchIcon}
            onPress={onSendMessages}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(ChatRoom);
