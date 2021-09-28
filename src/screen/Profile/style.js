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
    fontWeight: 'bold',
    fontSize: 18,
  },
  wrapperButton: {
    padding: 18,
    flex: 2,
    justifyContent: 'flex-end',
  },
});