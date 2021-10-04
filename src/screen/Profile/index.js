import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
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
      {/* <TouchableOpacity
        style={styles.wrapperButton}
        onPress={() => dispatch(logoutAction(navigation))}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </View>
      </TouchableOpacity> */}
      <LogoutModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        buttonStyle={styles.logoutBtn}
        nextHandler={LogoutHandler}
        buttonText="Log out"
        leftButtonText="Yes, Log me out"
        rightButtonText="Cancel"
        titleText="Are you sure you want to log out?"
        leftButtonColor="#b02a37"
      />
    </SafeAreaView>
  );
}
export default Profile;
