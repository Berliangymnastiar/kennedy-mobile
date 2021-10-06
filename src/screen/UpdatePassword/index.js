import React from 'react';
import {API_URL} from '@env';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {useSelector} from 'react-redux';
import axios from 'axios';

function UpdatePassword() {
  const token = useSelector(state => state.auth.token);
  const id = useSelector(state => state.auth.userInfo[0].id);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onChangePassword = () => {
    if (oldPassword === '') {
      return ToastAndroid.show(
        'Please input your old password for change password',
        ToastAndroid.SHORT,
      );
    }
    if (newPassword === '') {
      return ToastAndroid.show(
        'Please input your new password for change password',
        ToastAndroid.SHORT,
      );
    }

    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    axios
      .patch(`${API_URL}/users/password/${id}`, data, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res);
        return ToastAndroid.show(
          'Change password success, password has been change!',
          ToastAndroid.SHORT,
        );
      })
      .catch(err => {
        console.log(err);
        return ToastAndroid.show(
          'Change password failed, wrong old password!',
          ToastAndroid.SHORT,
        );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.textHeader}>Update Passsword</Text>
      </View>
      <View style={styles.wrapperInput}>
        <Text style={styles.label}>Old Password :</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Input your old password"
          placeholderTextColor={'black'}
          value={oldPassword}
          onChangeText={value => setOldPassword(value)}
          secureTextEntry
        />
      </View>
      <View style={styles.wrapperInput}>
        <Text style={styles.label}>New Password :</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Input your new password"
          placeholderTextColor={'black'}
          value={newPassword}
          onChangeText={value => setNewPassword(value)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={onChangePassword}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default UpdatePassword;
