import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
  },
  wrapperText: {
    marginTop: 30,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
    color: '#393939',
  },
  wrapperInput: {
    marginTop: 30,
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
