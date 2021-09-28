import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL} from '@env';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import imageVespa from '../../assets/images/order-image.png';
import {useSelector} from 'react-redux';

function FinishPayment(props) {
  const id = props.route.params.id;
  const paymentMethod = props.route.params.paymentMethod;
  const address = useSelector(state => state.auth.userInfo[0].address);
  const [idCard, setIdCard] = useState(null);
  const [vehicleName, setVehicleName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [picture, setPicture] = useState(null);
  const [totalVehicle, setTotalVehicle] = useState(1);
  const [bookingDuration, setBookingDuration] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${id}`)
      .then(result => {
        const data = result.data.result[0];
        setIdCard(data.id_card);
        setUsername(data.username);
        setVehicleName(data.name);
        setEmail(data.email);
        setPhonenumber(data.phonenumber);
        setPicture(data.picture);
        setTotalVehicle(data.total_vehicle);
        setBookingDuration(data.booking_duration);
        setTotalPrice(data.total_price);
      })
      .catch();
  }, []);

  return (
    <ScrollView>
      <ScrollView style={styles.container}>
        <Pressable
          style={styles.wrapperBack}
          onPress={() => props.navigation.push('Home')}>
          <Icon name="arrow-back" size={35}></Icon>
          <Text style={styles.payment}>Back To Home</Text>
        </Pressable>
        <View style={styles.wrapperIconPayment}>
          <Text style={styles.paymentSuccess}>Payment Success!</Text>
        </View>
        <View style={styles.wrapperImagePayment}>
          <Image
            source={{uri: `${API_URL}` + picture}}
            style={styles.imageVehicle}
          />
        </View>
        <View style={styles.wrapperTextOrder}>
          <Text style={styles.textOrder}>
            {totalVehicle} {vehicleName}
          </Text>
          <Text style={styles.textOrder}>{paymentMethod}</Text>
          <Text style={styles.textOrder}>{bookingDuration}</Text>
        </View>
        <View style={styles.borderBottom} />
        <View style={styles.wrapperTextOrder}>
          <Text style={styles.textOrder}>ID : {idCard}</Text>
          <Text style={styles.textOrder}>
            {userName} ({email})
          </Text>
          <Text style={styles.textOrder}>
            {phonenumber} <Text style={styles.active}>(active)</Text>
          </Text>
          <Text style={styles.textOrder}>{address}, Indonesia</Text>
        </View>
        <View style={styles.borderBottom} />
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Total : {totalPrice}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}
export default FinishPayment;
