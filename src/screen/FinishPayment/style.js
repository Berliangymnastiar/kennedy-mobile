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
  paymentSuccess: {
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    color: '#087E0D',
  },
  wrapperIconPayment: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  imageVehicle: {
    borderRadius: 8,
    // borderBottomRightRadius: 12,
    width: '100%',
    height: 300,
    marginVertical: 35,
  },
  wrapperTextOrder: {
    marginTop: 20,
  },
  textOrder: {
    fontSize: 16,
    color: '#949499',
    marginVertical: 5,
    fontFamily: 'Nunito-Regular',
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    color: '#949499',
    marginTop: 10,
  },
  active: {
    color: '#087E0D',
    fontFamily: 'Nunito-Bold',
  },
  wrapperPrice: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'space-between',
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
