import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  image: {
    flex: 1,
    padding: 31,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 105,
  },
  textLabel: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
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
    marginVertical: 21,
  },
  button: {
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 18,
    marginTop: 24,
  },
  buttonResend: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 18,
    marginTop: 24,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  wrapTextBack: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textBack: {
    color: 'white',
    fontWeight: '300',
    marginLeft: 46,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
  },
  textSignUp: {
    color: 'white',
    fontWeight: 'bold',
  },
});
