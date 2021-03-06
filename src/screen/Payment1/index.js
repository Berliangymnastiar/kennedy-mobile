import axios from 'axios';
import {API_URL} from '@env';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import iconPayment from '../../assets/images/icon-payment1.png';
import {useSelector} from 'react-redux';

function Payment1(props) {
  const userId = useSelector(state => state.auth.userInfo[0]?.id);
  const token = useSelector(state => state.auth.token);
  const [name, setName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('CASH');
  const id = props.route.params.id;
  const totalPrice = props.route.params.totalPrice;
  const image = props.route.params.picture;

  useEffect(() => {
    const getUser = props.navigation.addListener('focus', () => {
      axios
        .get(`${API_URL}/users/${userId}`, {
          headers: {
            'x-access-token': `Bearer ${token}`,
          },
        })
        .then(res => {
          console.log(res);
          const data = res.data.result[0];
          console.log(data);
          setName(data.name);
          setEmail(data.email);
          setPhoneNumber(data.phonenumber);
        })
        .catch(err => console.log(err));
    });
  }, [props.navigation]);

  const onSeeOrder = () => {
    const data = new URLSearchParams();
    data.append('name', name);
    data.append('id_card', idCard);
    data.append('phonenumber', phonenumber);
    data.append('payment_method', paymentMethod);
    data.append('email', email);

    console.log(data);
    axios
      .patch(`${API_URL}/transactions/${id}`, data)
      .then(res => {
        console.log(res);
        props.navigation.navigate('Payment2', {
          id: id,
          totalPrice: totalPrice,
          picture: image,
        });
        return ToastAndroid.show('Success Payment!', ToastAndroid.SHORT);
      })
      .catch(err => console.log(err));
  };

  return (
    <ScrollView>
      <ScrollView style={styles.container}>
        <Pressable
          style={styles.wrapperBack}
          onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={35}></Icon>
          <Text style={styles.payment}>Payment</Text>
        </Pressable>
        <View style={styles.wrapperIconPayment}>
          <Image source={iconPayment} style={{justifyContent: 'center'}} />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.textInput}
            value={idCard}
            placeholder="ID Card Number"
            placeholderTextColor={'#797979'}
            keyboardType="number-pad"
            onChangeText={value => setIdCard(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Name"
            placeholderTextColor={'#797979'}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.textInput}
            value={phonenumber}
            placeholder="Mobile phone (must be active)"
            placeholderTextColor={'#797979'}
            keyboardType="number-pad"
            onChangeText={value => setPhoneNumber(value)}
          />
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.textInput}
            value={email}
            placeholder="Email Address"
            placeholderTextColor={'#797979'}
            keyboardType="email-address"
            onChangeText={value => setEmail(value)}
          />
        </View>
        <Text style={styles.label}>Payment Method :</Text>
        <RNPickerSelect
          onValueChange={value => setPaymentMethod(value)}
          items={[
            {label: 'Cash', value: 'CASH'},
            {label: 'Transfer', value: 'TRANSFER'},
          ]}
        />
        <TouchableOpacity onPress={onSeeOrder}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>See Order Details</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

export default Payment1;
