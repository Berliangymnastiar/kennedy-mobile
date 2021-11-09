import axios from 'axios';
import {API_URL} from '@env';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import styles from './style';
import trashImg from '../../assets/images/icon-trash.png';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {CHANGE_LOADING} from '../../redux/reducer/actionString';
import AnimatingLoading from '../../component/ActivityIndicator';

function History(props) {
  console.log(props);
  const userId = useSelector(state => state.auth.userInfo[0].id);
  const [vehicle, setVehicle] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getHistory = props.navigation.addListener('focus', () => {
      dispatch({type: CHANGE_LOADING, payload: true});
      axios
        .get(`${API_URL}/transactions/history/${userId}`)
        .then(({data}) => {
          dispatch({type: CHANGE_LOADING, payload: false});
          setVehicle(data.result);
          console.log(data);
        })
        .catch(error => {
          dispatch({type: CHANGE_LOADING, payload: false});
          console.log(error);
        });
    });
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperHistoryOrder}>
          {props.vehicle.isLoading === true ? (
            <AnimatingLoading isLoading={props.vehicle.isLoading} />
          ) : (
            <>
              <Text style={styles.historyOrder}>History Order</Text>
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
                        <Text style={styles.textGreen}>Paid</Text>
                      </View>
                      <Pressable>
                        <Image source={trashImg} style={styles.trashImg} />
                      </Pressable>
                    </View>
                  );
                })}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = ({vehicle}) => {
  return {
    vehicle,
  };
};
export default connect(mapStateToProps)(History);
