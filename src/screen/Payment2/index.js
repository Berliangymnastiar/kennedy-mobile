import axios from 'axios';
import React, {useEffect, useState} from 'react';
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
import iconPayment from '../../assets/images/icon-payment2.png';
import iconPricing from '../../assets/images/icon-pricing.png';

function Payment2(props) {
  // console.log(props);
  const [name, setName] = useState('');
  const [totalVehicle, setTotalVehicle] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('CASH');
  const [bookingDuration, setBookingDuration] = useState('1 day');
  const [totalPrice, setTotalPrice] = useState('');
  const codePayment = Math.floor(Math.random() * 100000000);
  const codeBooking = 'KV' + Math.floor(Math.random() * 100000);
  const id = props.route.params.id;
  const picture = props.route.params.picture;
  // console.log(totalVehicle);

  useEffect(() => {
    axios
      .get(`http://192.168.1.100:8000/transactions/${id}`)
      .then(result => {
        const data = result.data.result[0];
        setName(data.name);
        setTotalVehicle(data.total_vehicle);
        setPaymentMethod(data.payment_method);
        setBookingDuration(data.booking_duration);
        setTotalPrice(data.total_price);
      })
      .catch(err => console.log(err));
  }, []);

  const onGetCode = () => {
    const data = new URLSearchParams();
    data.append('payment_code', codePayment);
    data.append('booking_code', codeBooking);

    axios
      .patch(`http://192.168.1.100:8000/transactions/${id}`, data)
      .then(result => {
        console.log(result);
        props.navigation.navigate('Payment3', {
          id: id,
          totalPrice: totalPrice,
          bookingCode: codeBooking,
          paymentCode: codePayment,
          vehicleName: name,
          totalVehicle: totalVehicle,
          bookingDuration: bookingDuration,
          paymentMethod: paymentMethod,
        });
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
        <View style={styles.wrapperImagePayment}>
          <Image
            source={{uri: `${API_URL}` + picture}}
            style={styles.imageVehicle}
          />
        </View>
        <View style={styles.wrapperTextOrder}>
          <Text style={styles.textOrder}>
            {totalVehicle} {name}
          </Text>
          <Text style={styles.textOrder}>{paymentMethod}</Text>
          <Text style={styles.textOrder}>{bookingDuration}</Text>
        </View>
        <View style={styles.borderBottom} />
        <View style={styles.wrapperPrice}>
          <Text style={styles.textPrice}>Rp. {totalPrice}</Text>
          <Image source={iconPricing} />
        </View>
        <TouchableOpacity onPress={onGetCode}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Payment Code</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}
export default Payment2;
