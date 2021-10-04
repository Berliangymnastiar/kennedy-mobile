import axios from 'axios';
import {API_URL} from '@env';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useEffect, useState} from 'react';
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
  TextInput,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {editVehicle} from '../../redux/action/vehicleAction';

const EditVehicle = props => {
  const token = useSelector(state => state.auth.token);
  const isAdmin = useSelector(state => state.auth.userInfo[0].roles);
  const id = props.route.params.id;
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(1);
  const [available, setAvailable] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState(1);
  const [prevImg, setPrevImg] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
    }).then(image => {
      setImage(image);
    });
  };

  const sourceUri = image?.path
    ? {uri: image?.path}
    : {uri: `${API_URL}` + prevImg};

  useEffect(() => {
    axios
      .get(`${API_URL}/vehicles/${id}`, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      })
      .then(res => {
        console.log(res);
        let vehicle = res.data.result[0];
        setName(vehicle.name);
        setPrice(vehicle.price);
        setPrevImg(vehicle.picture);
        setAddress(vehicle.location);
        setAvailable(vehicle.available_item);
        setCapacity(vehicle.capacity);
        setDescription(vehicle.description);
      })
      .catch(err => console.log(err));
  }, []);

  const updateVehicle = () => {
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
    data.append('category_id', category);
    data.append('price', Number(price));
    data.append('description', description);
    data.append('available_item', stock);
    data.append('location', address);
    data.append('capacity', Number(capacity));
    if (image !== null && image !== undefined && image !== '') {
      data.append('picture', {
        name: new Date() + 'picture' + image.path,
        uri: image.path,
        type: image.mime,
      });
    }

    dispatch(editVehicle(data, id));
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={choosePhotoFromLibrary}>
        <ImageBackground
          style={styles.headerImage}
          source={sourceUri}
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
      </TouchableOpacity>
      <View>
        <View style={styles.wrapperContent}>
          <View style={styles.wrapperInputLeft}>
            <Text style={styles.label}>Name :</Text>
            <TextInput
              style={styles.textInputLeft}
              placeholder="Input vehicle name"
              placeholderTextColor="#9F9F9F"
              value={name}
              onChangeText={value => setName(value)}
            />
            <Text style={styles.label}>Capacity :</Text>
            <TextInput
              style={styles.textInputLeft}
              placeholder="Input vehicle capacity"
              placeholderTextColor="#9F9F9F"
              value={String(capacity)}
              onChangeText={value => setCapacity(value)}
            />
            <Text style={styles.label}>Price :</Text>
            <TextInput
              style={styles.textInputLeft}
              placeholder="Input vehicle price"
              placeholderTextColor="#9F9F9F"
              value={String(price)}
              onChangeText={value => setPrice(value)}
            />
            <Text style={styles.label}>Description :</Text>
            <TextInput
              style={styles.textInputLeft}
              placeholder="Input Description"
              placeholderTextColor="#9F9F9F"
              value={description}
              onChangeText={value => setDescription(value)}
            />
            <Text style={styles.labelSelect}>Location :</Text>
            <RNPickerSelect
              style={styles.inputSelect}
              placeholder={{label: address, value: address}}
              onValueChange={value => setAddress(value)}
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
            <Text style={styles.textAmount}>
              {isAdmin === 'admin' ? 'stock :' : 'Select vehicles :'}
            </Text>
            <TouchableOpacity onPress={() => stock > 1 && setStock(stock - 1)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> - </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.buttonText}>{stock}</Text>
            <TouchableOpacity onPress={() => setStock(stock + 1)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> +</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (
                typeof category === 'string' &&
                typeof category === null &&
                typeof category === undefined
              ) {
                return ToastAndroid.show(
                  'Please select category for update vehicle',
                  ToastAndroid.SHORT,
                );
              }
              updateVehicle();
            }}>
            <View style={styles.buttonReservation}>
              <Text style={styles.buttonText}>Update Item</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({vehicle}) => {
  return {
    vehicle,
  };
};

export default connect(mapStateToProps)(EditVehicle);
