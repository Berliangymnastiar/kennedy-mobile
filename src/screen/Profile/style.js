import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperProfile: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  wrapperText: {
    padding: 18,
    marginTop: 24,
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
  button: {
    backgroundColor: '#FFCD61',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    marginTop: 24,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  wrapperButton: {
    padding: 18,
    flex: 2,
    justifyContent: 'flex-end',
  },
  logoutBtn: {
    width: 'auto',
    height: 50,
    margin: 16,
    justifyContent: 'center',
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    borderRadius: 10,
  },
  photo: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: -10,
    borderRadius: 100,
  },

  wrapperBack: {
    paddingLeft: 18,
    flexDirection: 'row',
    marginTop: 10,
  },
  updateProfile: {
    marginLeft: 24,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
});
