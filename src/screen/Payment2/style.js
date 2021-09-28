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
    fontWeight: '600',
    fontSize: 28,
    marginHorizontal: 24,
  },
  wrapperIconPayment: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  //   wrapperImagePayment: {
  //     paddingHorizontal: 18,
  //   },
  imageVehicle: {
    borderRadius: 8,
    // borderBottomRightRadius: 12,
    width: '100%',
    height: 300,
  },
  wrapperTextOrder: {
    marginTop: 20,
  },
  textOrder: {
    fontSize: 16,
    color: '#949499',
    marginVertical: 5,
  },
  borderBottom: {
    borderBottomWidth: 1,
    color: '#949499',
    marginTop: 10,
  },
  wrapperPrice: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'space-between',
  },
  textPrice: {
    fontWeight: '600',
    fontSize: 26,
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
});
