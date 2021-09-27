import axios from 'axios';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import CardImage from '../../component/CardImage';

function Home({navigation}) {
  const [vehicles, setVehicle] = useState([]);
  const [motorbikes, setMotorbikes] = useState([]);
  const [cars, setCars] = useState([]);
  const [bikes, setBikes] = useState([]);
  const getToken = useSelector(state => state.auth);
  // const vehicle = useSelector(state => state.vehicle);
  // console.log(vehicle);
  const token = getToken.token;

  const dispatch = useDispatch();

  useEffect(() => {
    const getByCategory = filter => {
      axios
        .get('http://192.168.1.100:8000/vehicles', {
          params: {filter: filter, limit: 4},
          headers: {
            'x-access-token': `Bearer ${token}`,
          },
        })
        .then(({data}) => {
          if (filter === 'motorbike') {
            setMotorbikes(data.result);
          }
          if (filter === 'bikes') {
            setBikes(data.result);
          }
          if (filter === 'cars') {
            setCars(data.result);
          }
        })
        .catch(err => console.log(err));
    };

    getByCategory('motorbike');
    getByCategory('bikes');
    getByCategory('cars');
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.homeImage}
        source={require('../../assets/images/home-image.png')}
        resizeMode="cover"
      />
      <View style={styles.viewSection}>
        <Text style={styles.textCategory}>Cars</Text>
        <Text style={styles.viewMore}>
          View more{'  '}
          <Image source={require('../../assets/images/chevron-right.png')} />
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.viewSectionImage}>
        {cars.map(vehicle => {
          return (
            <Pressable
              key={vehicle.id}
              onPress={async () => {
                await navigation.navigate('Orders', {id: vehicle.id});
              }}>
              <CardImage key={vehicle.id} picture={vehicle.picture} />
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.viewSection}>
        <Text style={styles.textCategory}>Motorbikes</Text>
        <Text style={styles.viewMore}>
          View more{'  '}
          <Image source={require('../../assets/images/chevron-right.png')} />
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.viewSectionImage}>
        {motorbikes.map(vehicle => {
          return (
            <Pressable
              key={vehicle.id}
              onPress={async () => {
                await navigation.navigate('Orders', {id: vehicle.id});
              }}>
              <CardImage key={vehicle.id} picture={vehicle.picture} />
            </Pressable>
          );
        })}
      </ScrollView>
      <View style={styles.viewSection}>
        <Text style={styles.textCategory}>Bikes</Text>
        <Text style={styles.viewMore}>
          View more{'  '}
          <Image source={require('../../assets/images/chevron-right.png')} />
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.viewSectionImage}>
        {bikes.map(vehicle => {
          return (
            <Pressable
              key={vehicle.id}
              onPress={async () => {
                await navigation.navigate('Orders', {id: vehicle.id});
              }}>
              <CardImage key={vehicle.id} picture={vehicle.picture} />
            </Pressable>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}
export default Home;
