import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatCard = ({chat, user, time}) => {
  return (
    <View style={styles.wrapperChat}>
      <View style={styles.wrapperUserChat}>
        <Text style={styles.textUser}>{user}</Text>
        <Text style={styles.textChat}>{chat}</Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperChat: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  textUser: {
    fontFamily: 'Nunito-Bold',
  },
  textChat: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#9A9A9D',
  },
});

export default ChatCard;
