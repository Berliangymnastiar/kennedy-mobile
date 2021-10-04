import React, {useEffect, useState} from 'react';
import {API_URL} from '@env';
import axios from 'axios';
import styles from './style';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import trashImg from '../../assets/images/icon-trash.png';
// import {useSelector} from 'react-redux';

const HistoryAdmin = () => {
  // const userId = useSelector(state => state.auth.userInfo[0].id);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions`)
      .then(({data}) => {
        setVehicle(data.result);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperHistoryOrder}>
          <Text style={styles.historyOrder}>History Order Admin</Text>
        </View>
        <View style={styles.wrapperData}>
          {vehicle.map(vehicle => {
            return (
              <View style={styles.wrapperContainer} key={vehicle.id}>
                <Image
                  source={{uri: `${API_URL}` + vehicle.picture}}
                  style={styles.image}
                />
                <View style={styles.wrapperText}>
                  <Text style={styles.vehicleName}>{vehicle.name}</Text>
                  <Text style={styles.text}>
                    Max for {vehicle.capacity} person
                  </Text>
                  <Text style={styles.textPrepaid}>
                    Prepayment : Rp. {vehicle.price}
                  </Text>
                  <Text style={styles.textGreen}>{vehicle.status_payment}</Text>
                </View>
                <Pressable>
                  <Image source={trashImg} style={styles.trashImg} />
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryAdmin;
