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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const onChangePassword = () => {
    if (oldPassword === '') {
      return setError('Please input your old password!');
    }
    if (newPassword === '') {
      return setError('Please input your new password for change password');
    }
    if (newPassword.length <= 6) {
      return setError('Password must contain 6 or more charachters');
    }
    if (newPassword !== confirmPassword) {
      return setError('Password not match!');
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
        return setError('Change password failed, wrong old password!');
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
          placeholderTextColor={'grey'}
          value={oldPassword}
          onChangeText={value => {
            setOldPassword(value);
            setError(false);
          }}
          secureTextEntry
        />
      </View>
      <View style={styles.wrapperInput}>
        <Text style={styles.label}>New Password :</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Input new password"
          placeholderTextColor={'grey'}
          value={newPassword}
          onChangeText={value => {
            setNewPassword(value);
            setError(false);
          }}
          secureTextEntry
        />
      </View>
      <View style={styles.wrapperInput}>
        <Text style={styles.label}>Confirm Password :</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Input confirm password"
          placeholderTextColor={'grey'}
          value={confirmPassword}
          onChangeText={value => {
            setConfirmPassword(value);
            setError(false);
          }}
          secureTextEntry
        />
      </View>
      {error && (
        <View>
          <Text style={{color: 'red', fontFamily: 'Nunito-Bold'}}>{error}</Text>
        </View>
      )}
      <TouchableOpacity onPress={onChangePassword}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default UpdatePassword;
