import React, {useEffect, useState} from 'react';
import {API_URL} from '@env';
import axios from 'axios';
import styles from './style';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import LogoutModal from '../../component/Modal';
import trashImg from '../../assets/images/icon-trash.png';
// import {useSelector} from 'react-redux';

const HistoryAdmin = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions`)
      .then(({data}) => {
        setVehicle(data.result);
      })
      .catch(error => console.log(error));
  }, []);

  const deleteHistory = id => {
    console.log(id);
  };
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
                <LogoutModal
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                  buttonStyle={styles.logoutBtn}
                  nextHandler={deleteHistory}
                  buttonText="Delete"
                  leftButtonText="Yes"
                  rightButtonText="Cancel"
                  leftButtonColor="#FFCD61"
                  rightButtonColor="#393939"
                  titleText="Are you sure want to delete this history"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryAdmin;
