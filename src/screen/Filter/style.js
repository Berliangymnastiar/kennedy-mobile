import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#FFFFFF',
  },
  wrapperButtonFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperBack: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textFilter: {
    marginLeft: 24,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  buttonReset: {
    backgroundColor: '#EDEDF3',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 40,
    borderRadius: 15,
    padding: 5,
    marginTop: 8,
  },
  buttonTextReset: {
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },
  wrapperText: {
    paddingHorizontal: 8,
    marginTop: 50,
  },
  wrapperTextType: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSave: {
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    marginTop: 50,
  },
  buttonTextSave: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
});
