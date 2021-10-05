import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
  },
  wrapperHistoryOrder: {
    alignItems: 'center',
  },
  historyOrder: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    marginTop: 20,
  },
  wrapperData: {
    marginVertical: 25,
  },
  wrapperContainer: {
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  image: {
    width: 101,
    height: 88,
    borderRadius: 12,
  },
  wrapperText: {
    marginHorizontal: 24,
  },
  vehicleName: {
    fontSize: 13,
    color: '#393939',
    fontFamily: 'Nunito-Bold',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#393939',
  },
  textPrepaid: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: '#393939',
    marginTop: 10,
  },
  textGreen: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#087E0D',
  },
  textRed: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9B0A0A',
  },
  textPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#393939',
  },
  trashImg: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Nunito-Bold',
  },
  logoutBtn: {
    width: 'auto',
    height: 40,
    margin: 16,
    padding: 4,
    justifyContent: 'center',
    backgroundColor: '#FFCD61',
    alignItems: 'center',
    borderRadius: 10,
  },
});
