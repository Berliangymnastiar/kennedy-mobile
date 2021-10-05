import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import LogoutModal from '../../component/Modal';
import AppStatusBar from '../../component/AppStatusBar';
import styles from './style';

import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../redux/action/authAction';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const LogoutHandler = () => {
    dispatch(logoutAction(navigation));
  };

  return (
    <SafeAreaView style={styles.wrapperProfile}>
      <AppStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
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
          onPress={() => navigation.navigate('Update-Profile')}>
          <Text style={styles.text}>Update Profile</Text>
          <Icon name="arrow-forward" size={20} />
        </Pressable>
      </View>
      <LogoutModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        nextHandler={LogoutHandler}
        buttonStyle={styles.logoutBtn}
        buttonText="Log out"
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
