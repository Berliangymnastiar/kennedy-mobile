import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import ChatCard from '../../component/ChatCard';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {getLatestChat} from '../../utils/Chat';

const Chat = props => {
  const auth = useSelector(state => state.auth);
  const [chatData, setChatData] = useState([]);

  const getLatestChatHandler = () => {
    getLatestChat(auth.userInfo[0].id, auth.token)
      .then(res => {
        setChatData(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getLatestChatHandler();
    });
    getLatestChatHandler();
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pressable
          style={styles.wrapperBack}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={26}></Icon>
          <Text style={styles.chat}>Chat</Text>
        </Pressable>
        <View style={styles.wrapperInputSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Search Chat"
            placeholderTextColor="black"
            keyboardType={'email-address'}
          />
          <Icon name="search-outline" style={styles.searchIcon} />
        </View>
        {chatData?.map(chat => {
          const receiverId =
            chat.user_id_receiver !== auth.userInfo[0]?.id
              ? chat.user_id_receiver
              : chat.user_id_sender;
          return (
            <Pressable
              key={chat?.id}
              onPress={() =>
                props.navigation.navigate('Chat-Room', {
                  receiverId: receiverId,
                  // socketIo: socket,
                })
              }>
              <ChatCard
                user={
                  chat.user_id_receiver !== auth.userInfo[0]?.id
                    ? chat.receiver_name
                    : chat.sender_name
                }
                chat={chat.message}
                time={'just now'}
              />
            </Pressable>
          );
        })}
        <View style={styles.conversation}>
          <Text style={styles.textConversation}>
            You have no conversation left
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Chat;
