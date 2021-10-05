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
  wrapperInputSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 80,
    bottom: 50,
    padding: 18,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 25,
    color: 'black',
  },
  inputSearch: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 50,
    textDecorationLine: 'none',
    backgroundColor: '#EFEEEE',
    color: 'black',
    borderRadius: 10,
    fontFamily: 'Nunito-Bold',
  },
  conversation: {
    alignItems: 'center',
  },
  textConversation: {
    color: '#9A9A9D',
  },
});
