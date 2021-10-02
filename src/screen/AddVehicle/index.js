import axios from 'axios';
import {API_URL} from '@env';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import iconCamera from '../../assets/images/icon-camera.png';
import {connect, useDispatch} from 'react-redux';
import {
  addVehicles,
  addVehiclesAction,
  vehicleAction,
} from '../../redux/action/vehicleAction';

const AddVehicle = props => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const [stock, setStock] = useState(1);
  const [image, setImage] = useState({});
  const dispatch = useDispatch();

  // const choosePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image.path);
  //     setImage(image.path);
  //   });
  // };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
    }).then(image => {
      // console.log(image);
      setImage(image);
    });
  };

  // console.log(image.mime);

  const sourceUri = image.path
    ? {uri: image.path}
    : require('../../assets/images/icon-camera.png');

  const createVehicle = () => {
    if (name === '') {
      return ToastAndroid.show(
        'Please input name for add vehicle',
        ToastAndroid.SHORT,
      );
    } else if (price === '') {
      return ToastAndroid.show(
        'Please input price for add vehicle',
        ToastAndroid.SHORT,
      );
    } else if (description === '') {
      return ToastAndroid.show(
        'Please input description for add vehicle',
        ToastAndroid.SHORT,
      );
    } else if (location === null) {
      return ToastAndroid.show(
        'Please input location for add vehicle',
        ToastAndroid.SHORT,
      );
    } else if (category === null) {
      return ToastAndroid.show(
        'Please input category for add vehicle',
        ToastAndroid.SHORT,
      );
    }

    const data = new FormData();
    data.append('name', name);
    data.append('location', location);
    data.append('price', price);
    data.append('description', description);
    data.append('available_item', stock);
    data.append('category_id', category);
    data.append('picture', {
      name: new Date() + 'picture' + image.path,
      uri: image.path,
      type: image.mime,
    });

    dispatch(addVehicles(data, props));
    // axios
    //   .post(`${API_URL}/vehicles`, data, {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   })
    //   .then(result => {
    //     props.navigation.navigate('Home', {name: name});
    //     console.log(result);
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapperHeader}>
          <Pressable
            style={styles.wrapperBack}
            onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" size={26}></Icon>
            <Text style={styles.addVehicle}>Add New Item</Text>
          </Pressable>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.wrapperCamera}>
          <TouchableOpacity onPress={choosePhotoFromLibrary}>
            <Image source={sourceUri} style={styles.vehicleImg} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.buttonText}>Add pictures</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Type product name min. 30 characters"
            placeholderTextColor="#9F9F9F"
            value={name}
            onChangeText={value => setName(value)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Type product price"
            placeholderTextColor="#9F9F9F"
            keyboardType="number-pad"
            value={price}
            onChangeText={value => setPrice(value)}
          />
        </View>
        <View style={styles.wrapperInputLeft}>
          <Text style={styles.label}>Description :</Text>
          <TextInput
            style={styles.textInputLeft}
            placeholder="Describe your product min. 150 characters"
            placeholderTextColor="#9F9F9F"
            value={description}
            onChangeText={value => setDescription(value)}
          />
          <Text style={styles.labelSelect}>Location :</Text>
          <RNPickerSelect
            style={styles.inputSelect}
            placeholder={{label: 'Select location', value: null}}
            onValueChange={value => setLocation(value)}
            items={[
              {label: 'Jakarta', value: 'Jakarta'},
              {label: 'Medan', value: 'Medan'},
              {label: 'Yogyakarta', value: 'Yogyakarta'},
              {label: 'Bali', value: 'Bali'},
            ]}
          />
          <Text style={styles.labelSelect}>Add to :</Text>
          <RNPickerSelect
            placeholder={{label: 'Select categoty', value: null}}
            onValueChange={value => setCategory(value)}
            items={[
              {label: 'Cars', value: '1'},
              {label: 'Bikes', value: '2'},
              {label: 'Motorbikes', value: '3'},
            ]}
          />
        </View>
        <View style={styles.wrapperSelect}>
          <Text style={styles.textAmount}>Available stock : </Text>
          <TouchableOpacity onPress={() => stock > 1 && setStock(stock - 1)}>
            <View style={styles.available}>
              <Text style={styles.amount}> - </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.amount}>{stock}</Text>
          <TouchableOpacity onPress={() => setStock(stock + 1)}>
            <View style={styles.available}>
              <Text style={styles.amount}> +</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={createVehicle}>
          <View style={styles.buttonSave}>
            <Text style={styles.buttonTextSave}>Save Change</Text>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     createVehicles: query => {
//       dispatch(vehicleAction(query));
//     },
//   };
// };

export default connect(mapStateToProps)(AddVehicle);
