import axios from 'axios';
import {API_URL} from '@env';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {CHANGE_LOADING} from '../../redux/reducer/actionString';
import AnimatingLoading from '../../component/ActivityIndicator';

function Orders(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const isAdmin = useSelector(state => state.auth.userInfo[0]?.roles);
  const id = props.route.params.id;
  const userId = useSelector(state => state.auth.userInfo[0]?.id);

  const date = new Date();
  const formatedDate =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    date.getDate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(1);
  const [available, setAvailable] = useState('');
  const [address, setAddress] = useState('');
  const [totalVehicle, setTotalVehicle] = useState(1);
  const [image, setImage] = useState(null);
  const [bookingDate, setBookingDate] = useState('select date');
  const [bookingDuration, setBookingDuration] = useState('1 day');
  const [open, setOpen] = useState(false);

  const totalPrice = price * totalVehicle;

  useEffect(() => {
    dispatch({type: CHANGE_LOADING, payload: true});
    axios
      .get(`${API_URL}/vehicles/${id}`, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res);
        dispatch({type: CHANGE_LOADING, payload: false});
        let vehicle = res.data.result[0];
        setName(vehicle.name);
        setPrice(vehicle.price);
        setImage(vehicle.picture);
        setAddress(vehicle.location);
        setAvailable(vehicle.available_item);
        setCapacity(vehicle.capacity);
      })
      .catch(err => {
        dispatch({type: CHANGE_LOADING, payload: false});
        console.log(err);
      });
  }, []);

  const createTransaction = () => {
    const data = new URLSearchParams();
    data.append('user_id', userId);
    data.append('vehicle_id', id);
    data.append('booking_duration', bookingDuration);
    data.append('total_vehicle', totalVehicle);
    data.append('date', formatedDate);
    data.append('total_price', totalPrice);

    console.log(data);
    axios
      .post(`${API_URL}/transactions`, data)
      .then(res => {
        const transactionId = res.data.result.insertId;
        props.navigation.navigate('Payment1', {
          id: transactionId,
          totalPrice: totalPrice,
          picture: image,
        });
        return ToastAndroid.show('Reservation success!', ToastAndroid.SHORT);
      })
      .catch(err => console.log(err));
  };

  return (
    <ScrollView style={styles.container}>
      {props.vehicle.isLoading === true ? (
        <AnimatingLoading isLoading={props.vehicle.isLoading} />
      ) : (
        <>
          <ImageBackground
            style={styles.headerImage}
            source={{uri: `${API_URL}` + image}}
            resizeMode="cover">
            <Pressable
              style={styles.wrapperBack}
              onPress={() => props.navigation.goBack()}>
              <Icon name="arrow-back" size={26} color="white"></Icon>
            </Pressable>
            <Pressable style={styles.heart}>
              <Image
                source={require('../../assets/images/heart-icon.png')}></Image>
            </Pressable>
          </ImageBackground>
          <View>
            <View style={styles.wrapperContent}>
              <View style={styles.chatAndVehicle}>
                <Text style={styles.nameVehicle}>
                  {name} {'\n'}Rp. {price * totalVehicle}/day
                </Text>
                <Pressable>
                  <Icon
                    name="chatbubble-outline"
                    size={30}
                    color="#FFCD61"></Icon>
                </Pressable>
              </View>
              <View>
                <Text style={styles.textPerson}>Max for {capacity} person</Text>
                <Text style={styles.textPayment}>No prepayment</Text>
                <Text
                  style={
                    available > 0
                      ? styles.textStatusGreen
                      : styles.textStatusRed
                  }>
                  {available > 0 ? 'Available' : 'Not Available'}
                </Text>
              </View>
              <View style={styles.wrapperLocation}>
                <Image source={require('../../assets/images/icon-maps.png')} />
                <Text style={styles.textStreet}>{address}</Text>
              </View>
              <View style={styles.wrapperLocation}>
                <Image
                  source={require('../../assets/images/icon-person.png')}
                />
                <Text style={styles.textStreet}>
                  3.2 miles from your location
                </Text>
              </View>
              <View style={styles.wrapperSelect}>
                <Text style={styles.textAmount}>
                  {isAdmin === 'admin' ? 'stock :' : 'Select vehicles :'}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    totalVehicle > 1 && setTotalVehicle(totalVehicle - 1)
                  }>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}> - </Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.buttonText}>{totalVehicle}</Text>
                <TouchableOpacity
                  onPress={() =>
                    totalVehicle < available &&
                    setTotalVehicle(totalVehicle + 1)
                  }>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}> +</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {isAdmin !== 'admin' && (
                <>
                  <View style={styles.picker}>
                    <Pressable
                      style={styles.date}
                      onPress={() => setOpen(true)}>
                      <Text>
                        {typeof bookingDate === 'object'
                          ? bookingDate.toDateString()
                          : bookingDate}
                      </Text>
                    </Pressable>
                    <DatePicker
                      modal
                      mode="date"
                      open={open}
                      date={
                        typeof bookingDate === 'object'
                          ? bookingDate
                          : new Date()
                      }
                      onConfirm={value => {
                        setOpen(false);
                        setBookingDate(value);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    />
                  </View>
                  <RNPickerSelect
                    placeholder={{}}
                    onValueChange={value => setBookingDuration(value)}
                    items={[
                      {label: '1 Day', value: '1 day'},
                      {label: '2 Days', value: '2 day'},
                      {label: '3 Days', value: '3 day'},
                      {label: '4 Days', value: '4 day'},
                    ]}
                  />
                </>
              )}
              {isAdmin === 'admin' ? (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Edit-Vehicle', {
                      id: id,
                    });
                  }}>
                  <View style={styles.buttonReservation}>
                    <Text style={styles.buttonText}>Edit Item</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    if (typeof bookingDate === 'string') {
                      return ToastAndroid.show(
                        'Please select date for booking',
                        ToastAndroid.SHORT,
                      );
                    }
                    createTransaction();
                  }}>
                  <View style={styles.buttonReservation}>
                    <Text style={styles.buttonText}>Reservation</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const mapStateToProps = ({vehicle}) => {
  return {
    vehicle,
  };
};

export default connect(mapStateToProps)(Orders);
