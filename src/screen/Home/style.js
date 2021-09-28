import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  homeImage: {
    width: '100%',
    height: 300,
    flex: 2,
  },
  textInputPassword: {
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.4,
    fontWeight: 'bold',
    height: 51,
    marginTop: 18,
    marginHorizontal: 30,
  },
  viewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  textCategory: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 22,
    color: '#393939',
  },
  viewMore: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 28,
  },
  viewSectionImage: {
    flexDirection: 'row',
    padding: 13,
  },
  wrapperImage: {
    width: 265,
    height: 168,
    borderRadius: 8,
    marginRight: 25,
  },
});
