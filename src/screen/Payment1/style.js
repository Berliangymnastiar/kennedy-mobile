import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
  },
  wrapperBack: {
    flexDirection: 'row',
    marginTop: 10,
  },
  payment: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    marginHorizontal: 24,
  },
  wrapperIconPayment: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  wrapperInput: {
    marginTop: 22,
  },
  label: {
    color: '#5C5959',
    fontFamily: 'Nunito-Bold',
    marginTop: 10,
  },
  textInput: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    // backgroundColor: 'transparent',
    color: '#000000',
    opacity: 0.4,
    marginVertical: 10,
    backgroundColor: '#B8B8B8',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
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
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});
