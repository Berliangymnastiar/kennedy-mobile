import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import iconPayment from '../../assets/images/icon-payment3.png';
import iconPricing from '../../assets/images/icon-pricing.png';
import styles from './style';

function Payment3(props) {
  const id = props.route.params.id;
  const name = props.route.params.vehicleName;
  const paymentCode = props.route.params.paymentCode;
  const bookingCode = props.route.params.bookingCode;
  const totalVehicle = props.route.params.totalVehicle;
  const paymentMethod = props.route.params.paymentMethod;
  const bookingDuration = props.route.params.bookingDuration;
  const totalPrice = props.route.params.totalPrice;
  const updateStatusPayment = 'WAITING APPROVE';

  const onFinishPayment = () => {
    const data = new URLSearchParams();
    data.append('status_payment', updateStatusPayment);
    axios
      .patch(`http://192.168.1.100:8000/transactions/${id}`, data)
      .then(result => {
        console.log(result);
        props.navigation.push('Finish-Payment', {
          id: id,
          paymentMethod: paymentMethod,
        });
        return ToastAndroid.show('Payment Success!', ToastAndroid.SHORT);
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
        <View style={styles.wrapperTextPayment}>
          <Text style={styles.paymentCode}>Payment Code :</Text>
          <Text style={styles.textPaymentCode}>{paymentCode}</Text>
          <Text style={styles.payBefore}>
            Insert your payment code while you transfer booking order Pay before
            :
          </Text>
          <Text style={styles.textTimer}>1:59:34</Text>
          <Text style={styles.bankInformation}>Bank account information</Text>
          <Text style={styles.textNumberBank}>0290-90203-345-2</Text>
          <Text style={styles.bankInformation}>Kennedy Vehicles</Text>
        </View>
        <View style={styles.borderBottom} />
        <View style={styles.wrapperBookingCode}>
          <Text style={styles.bookingCode}>Booking code : </Text>
          <Text style={styles.textBookingCode}>{bookingCode}</Text>
        </View>
        <View style={styles.wrapperCopyPayment}>
          <Text style={styles.payBefore}>
            Use booking code to pick up your vespa
          </Text>
          <TouchableOpacity>
            <View style={styles.buttonCopy}>
              <Text style={styles.buttonCopyPayment}>
                Copy Payment & Booking Code
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperOrderDetails}>
          <Text style={styles.textOrder}>Order details :</Text>
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
        <TouchableOpacity onPress={onFinishPayment}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Finish Payment</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}
export default Payment3;
