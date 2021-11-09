import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#FFFFFF',
  },
  wrapperBack: {
    flexDirection: 'row',
    marginTop: 10,
  },
  chat: {
    marginLeft: 24,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  wrapperPosition: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrapperChatSender: {
    backgroundColor: '#393939',
    height: 60,
    borderRadius: 18,
    width: '60%',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  wrapperChatReceiver: {
    backgroundColor: '#FFCD61',
    height: 100,
    borderRadius: 18,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  chatSender: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
  },
  chatReceiver: {
    color: '#4E4E4E',
    fontFamily: 'Nunito-Regular',
  },
  time: {
    color: '#9F9F9F',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
  },
  wrapperInputSearch: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  inputSearch: {
    width: '100%',
    textDecorationLine: 'none',
    backgroundColor: '#EFEEEE',
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Nunito-Bold',
  },
  openConversation: {
    color: '#9F9F9F',
    textAlign: 'center',
    marginVertical: 270,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 25,
    color: '#9F9F9F',
  },
});
