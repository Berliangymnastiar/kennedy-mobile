import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  image: {
    flex: 1,
    padding: 31,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 40,
  },
  textInput: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'rgb(240, 240, 240)',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    backgroundColor: 'rgb(240, 240, 240)',
    opacity: 0.7,
    color: 'black',
    marginTop: 200,
    fontWeight: '600',
    fontSize: 16,
  },
  textInputPassword: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'rgb(240, 240, 240)',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    backgroundColor: 'rgb(240, 240, 240)',
    color: 'black',
    opacity: 0.7,
    marginTop: 18,
    fontWeight: '600',
  },
  forgotPass: {
    color: 'white',
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'Nunito-Regular',
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
  textConfirmation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  textHaveAccount: {
    color: 'white',
    fontFamily: 'Nunito-Regular',
  },
  textSignUp: {
    color: 'white',
    fontWeight: 'bold',
  },
});
