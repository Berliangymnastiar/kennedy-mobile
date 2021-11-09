import axios from 'axios';
import {API_URL} from '@env';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import LogoutModal from '../../component/Modal';
import AppStatusBar from '../../component/AppStatusBar';
import styles from './style';

import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../../redux/action/authAction';
import {useEffect} from 'react';
import defaultPhoto from '../../assets/images/default-photo.png';

function Profile(props) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.userInfo[0]?.id);
  console.log(id);
  const token = useSelector(state => state.auth.token);
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const LogoutHandler = () => {
    dispatch(logoutAction(props.navigation));
  };

  useEffect(() => {
    const getUser = props.navigation.addListener('focus', () => {
      axios
        .get(`${API_URL}/users/${id}`, {
          headers: {
            'x-access-token': `Bearer ${token}`,
          },
        })
        .then(res => {
          console.log(res);
          const data = res.data.result[0];
          console.log(data);
          setUsername(data.name);
          setImage(data.picture);
        })
        .catch(err => console.log(err));
    });
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.wrapperProfile}>
      <AppStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.wrapperBack}>
        <Image
          source={
            image !== '' && image !== null
              ? {uri: `${API_URL}` + image}
              : defaultPhoto
          }
          style={styles.photo}
        />
        <Text style={styles.updateProfile}>{username}</Text>
      </View>
      <View style={styles.wrapperText}>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Your favourites</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <View style={styles.wrapperText}>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>FAQ</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <View style={styles.wrapperText}>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Help</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <View style={styles.wrapperText}>
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('Update-Profile')}>
          <Text style={styles.text}>Update Profile</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <View style={styles.wrapperText}>
        <Pressable
          style={styles.pressable}
          onPress={() => props.navigation.navigate('Update-Password')}>
          <Text style={styles.text}>Update Password</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <LogoutModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        nextHandler={LogoutHandler}
        buttonStyle={styles.logoutBtn}
        buttonText="Logout"
        leftButtonText="Yes"
        rightButtonText="Cancel"
        leftButtonColor="#FFCD61"
        rightButtonColor="#393939"
        titleText="Are you sure want to logout?"
      />
    </SafeAreaView>
  );
}
export default Profile;
