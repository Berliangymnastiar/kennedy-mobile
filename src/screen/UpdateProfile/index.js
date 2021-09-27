import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import defaultPhoto from '../../assets/images/default-photo.png';
import CheckBox from '@react-native-community/checkbox';
import {useSelector} from 'react-redux';
import axios from 'axios';

function UpdateProfile({navigation}) {
  const token = useSelector(state => state.auth.token);
  const id = useSelector(state => state.auth.userInfo[0].id);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [imgPreview, setImagePreview] = useState(null);
  const [address, setAdress] = useState(null);
  const [phonenumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    axios
      .get(`http://192.168.1.100:8000/users/${id}`, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      })
      .then(res => {
        const data = res.data.result[0];
        console.log(data);
        setName(data.name);
        setEmail(data.email);
        setAdress(data.address);
        setPhoneNumber(data.phonenumber);
        setImage(data.picture);
      })
      .catch(err => console.log(err));
  }, []);

  const onSubmit = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('address', address);
    data.append('phonenumber', phonenumber);

    axios
      .patch(`http://192.168.1.100:8000/users/${id}`, data, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      })
      .then(res => {
        if (res) {
          console.log('success update');
          console.log(gender);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollIndicatorInsets="false">
        <Pressable
          style={styles.wrapperBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26}></Icon>
          <Text style={styles.updateProfile}>Update Profile</Text>
        </Pressable>
        <Pressable style={styles.wrapperPhoto}>
          <Image
            source={{uri: `http://192.168.1.100:8000` + image}}
            style={styles.photoUser}
          />
        </Pressable>
        <View style={styles.wrapperCheckbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.textGender}>Female</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.textGender}>Male</Text>
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Input your name"
            placeholderTextColor={'black'}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Email Address :</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            placeholder="Input your email"
            placeholderTextColor={'black'}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Phone Number :</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Input your phonenumber"
            placeholderTextColor={'black'}
            value={phonenumber}
            onChangeText={phonenumber}
            onChangeText={value => setPhoneNumber(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Text style={styles.label}>Delivery Address :</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Input your address"
            placeholderTextColor={'black'}
            value={address}
            onChangeText={address}
            onChangeText={value => setAdress(value)}
          />
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save Change</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UpdateProfile;
