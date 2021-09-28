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
  wrapperTextPayment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentCode: {
    fontSize: 18,
    fontWeight: '600',
  },
  textPaymentCode: {
    marginVertical: 9,
    fontSize: 36,
    fontWeight: '600',
  },
  payBefore: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 13,
    color: '#616167',
  },
  textTimer: {
    fontSize: 24,
    fontWeight: '700',
    color: '#9B0A0A',
    marginTop: 15,
  },
  bankInformation: {
    fontSize: 16,
    fontWeight: '600',
    color: '#616167',
    marginTop: 10,
  },
  textNumberBank: {
    fontWeight: '700',
    fontSize: 24,
    marginTop: 10,
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    // color: '#949499',
    marginTop: 20,
  },
  wrapperBookingCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
  },
  bookingCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#616167',
  },
  textBookingCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#087E0D',
  },
  wrapperOrderDetails: {
    marginVertical: 21,
  },
  textOrder: {
    fontSize: 16,
    color: '#616167',
    marginTop: 8,
  },
  wrapperCopyPayment: {
    alignItems: 'center',
  },
  buttonCopy: {
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    marginTop: 24,
  },
  buttonCopyPayment: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
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
