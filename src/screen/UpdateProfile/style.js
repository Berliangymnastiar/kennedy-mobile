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
  updateProfile: {
    marginLeft: 24,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  wrapperPhoto: {
    alignItems: 'center',
    marginTop: 40,
  },
  photoUser: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    borderRadius: 100,
  },
  wrapperCheckbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 10,
  },
  textGender: {
    marginLeft: 5,
    marginTop: 4,
    marginRight: 5,
    fontFamily: 'Nunito-Regular',
  },
  wrapperInput: {
    marginTop: 22,
  },
  label: {
    color: '#393939',
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
  },
  textInput: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    backgroundColor: 'transparent',
    color: 'black',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    marginTop: 24,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
});
