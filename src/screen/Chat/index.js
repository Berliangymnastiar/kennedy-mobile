import React from 'react';
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

function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pressable
          style={styles.wrapperBack}
          onPress={() => navigation.goBack()}>
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
        <View style={styles.conversation}>
          <Text style={styles.textConversation}>
            You have no conversation left
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Chat;
