import React, {useEffect, useState} from 'react';
import {API_URL} from '@env';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {vehicleAction} from '../../redux/action/vehicleAction';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = props => {
  console.log(props);
  const [vehicleName, setVehicleName] = useState('');

  const searchName = input => {
    setVehicleName({vehicleName: input});
  };

  const searchHandler = () => {
    const query = `?name=${vehicleName.vehicleName}`;
    props.getAllVehicles(query);
  };

  useEffect(() => {
    const {query} = props.route.params;
    props.getAllVehicles(query);
  }, [props.route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Search Vehicle"
            placeholderTextColor="#000000"
            keyboardType={'email-address'}
            onChangeText={searchName}
          />
          <Icon
            name="search-outline"
            style={styles.searchIcon}
            onPress={searchHandler}
            onPressIn={searchHandler}
          />
        </View>
        <Pressable
          style={styles.wrapperFilter}
          onPress={() => {
            props.navigation.navigate('Filter');
          }}>
          <Icon name="filter-outline" size={20} style={styles.iconFilter} />
          <Text>Filter</Text>
        </Pressable>
        <View style={styles.wrapperData}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
