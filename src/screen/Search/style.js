import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
  },
  wrapperInputSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 20,
    bottom: 230,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 25,
    color: '#000000',
  },
  inputSearch: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 50,
    textDecorationLine: 'none',
    backgroundColor: 'rgba(96, 98, 120, 0.1)',
    color: '#000000',
    borderRadius: 10,
  },
  wrapperFilter: {
    flexDirection: 'row',
    marginTop: 80,
    padding: 3,
  },
  iconFilter: {
    color: '#848484',
    marginHorizontal: 5,
  },
  filter: {
    color: '#848484',
  },
  wrapperData: {
    flexDirection: 'row',
    marginVertical: 25,
  },
  wrapperContainer: {
    marginHorizontal: 18,
    flexDirection: 'row',
  },
  image: {
    width: 101,
    height: 88,
    borderRadius: 12,
  },
  wrapperText: {
    marginHorizontal: 24,
    lineHeight: 50,
  },
  vehicleName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#393939',
  },
  text: {
    fontSize: 12,
    color: '#393939',
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
});
