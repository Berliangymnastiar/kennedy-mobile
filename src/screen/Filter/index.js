import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {vehicleAction} from '../../redux/action/vehicleAction';

const Filter = props => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const filterHandler = () => {
    const queryFilter = `?filter=${type}&location=${location}`;
    props.navigation.navigate('Search', {query: queryFilter});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperButtonFilter}>
          <Pressable
            style={styles.wrapperBack}
            onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" size={26}></Icon>
            <Text style={styles.textFilter}>Filter</Text>
          </Pressable>
          <TouchableOpacity
            style={styles.buttonReset}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.buttonTextReset}>RESET</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperText}>
          <RNPickerSelect
            placeholder={{
              label: 'Your location',
              value: null,
            }}
            onValueChange={value => setLocation(value)}
            items={[
              {label: 'Jakarta', value: 'Jakarta'},
              {label: 'Medan', value: 'Medan'},
              {label: 'Yogyakarta', value: 'Yogyakarta'},
              {label: 'Bali', value: 'Bali'},
            ]}
          />
        </View>
        <View style={styles.wrapperTextType}>
          <RNPickerSelect
            placeholder={{
              label: 'Type',
              value: null,
            }}
            onValueChange={value => setType(value)}
            items={[
              {label: 'Cars', value: 'cars'},
              {label: 'Bikes', value: 'bikes'},
              {label: 'Motorbikes', value: 'motorbikes'},
            ]}
          />
        </View>
        <TouchableOpacity onPress={filterHandler}>
          <View style={styles.buttonSave}>
            <Text style={styles.buttonTextSave}>Apply</Text>
          </View>
        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
