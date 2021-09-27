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
    borderColor: 'white',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    color: 'black',
    opacity: 0.4,
    marginTop: 200,
    fontWeight: '600',
    fontSize: 16,
  },
  textInputPassword: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    color: 'black',
    opacity: 0.4,
    marginTop: 18,
  },
  forgotPass: {
    color: 'white',
    marginTop: 10,
    textAlign: 'left',
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  textConfirmation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  textHaveAccount: {
    color: 'white',
    fontWeight: '300',
  },
  textSignUp: {
    color: 'white',
    fontWeight: 'bold',
  },
});
