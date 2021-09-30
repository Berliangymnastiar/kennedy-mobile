import React, {useEffect, useState} from 'react';
import {API_URL} from '@env';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {vehicleAction} from '../../redux/action/vehicleAction';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewMore = props => {
  const title = props.route.params.title;

  useEffect(() => {
    const {query} = props.route.params;
    props.getAllVehicles(query);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wrapperBack}
        onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-back" size={26}></Icon>
        <Text style={styles.updateProfile}>{title}</Text>
      </Pressable>
      <ScrollView style={styles.wrapperData}>
        {props.vehicle.vehicleData.map(vehicle => {
          return (
            <Pressable
              style={styles.wrapperContainer}
              key={vehicle.id}
              onPress={() => {
                props.navigation.navigate('Orders', {id: vehicle.id});
              }}>
              <Image
                source={{uri: `${API_URL}` + vehicle.picture}}
                style={styles.image}
              />
              <View style={styles.wrapperText}>
                <Text style={styles.vehicleName}>{vehicle.name}</Text>
                <Text style={styles.text}>
                  Max for {vehicle.capacity} person
                </Text>
                <Text style={styles.text}>X km from your location</Text>
                <Text
                  style={
                    vehicle.available_item > 0
                      ? styles.textGreen
                      : styles.textRed
                  }>
                  {vehicle.available_item > 0 ? 'Available' : 'Not Available'}
                </Text>
                <Text style={styles.textPrice}>Rp. {vehicle.price}/day</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({vehicle}) => {
  return {
    vehicle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVehicles: query => {
      dispatch(vehicleAction(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMore);
