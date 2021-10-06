import React from 'react';
import styles from './style';
import {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import logo from '../../assets/images/icon.png';

const SplashScreen = ({navigation}) => {
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    token
      ? setTimeout(() => {
          navigation.replace('Main-Tabs');
        }, 500)
      : setTimeout(() => {
          navigation.replace('Auth');
        }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.text}>Kennedy's Vehicle</Text>
    </View>
  );
};

export default SplashScreen;
