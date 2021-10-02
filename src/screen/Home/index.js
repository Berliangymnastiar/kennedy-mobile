import {API_URL} from '@env';
import styles from './style';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CardImage from '../../component/CardImage';
import {
  getBikes,
  getCars,
  getMotorbikes,
  vehicleAction,
} from '../../redux/action/vehicleAction';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleName: '',
      vehicle: [],
      cars: [],
      bikes: [],
      motorbike: [],
    };
  }

  searchName = input => {
    this.setState({vehicleName: input});
  };

  searchHandler = () => {
    const query = `?name=${this.state.vehicleName}`;
    this.props.navigation.navigate('Search', {query: query});
  };

  componentDidMount() {
    const getByCategory = filter => {
      axios
        .get(`${API_URL}/vehicles`, {
          params: {filter: filter},
        })
        .then(({data}) => {
          // console.log(data);
          // console.log(data.result);
          if (filter === 'motorbike') {
            this.setState({
              motorbike: data.result,
            });
          }
          if (filter === 'bikes') {
            this.setState({
              bikes: data.result,
            });
          }
          if (filter === 'cars') {
            this.setState({
              cars: data.result,
            });
          }
        });
    };

    getByCategory('motorbike');
    getByCategory('bikes');
    getByCategory('cars');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const getByCategory = filter => {
      axios
        .get(`${API_URL}/vehicles`, {
          params: {filter: filter},
        })
        .then(({data}) => {
          if (filter === 'motorbike') {
            if (data.result.length === this.state.motorbike.length) {
              return false;
            }
            this.setState({
              motorbike: data.result,
            });
          }
          if (filter === 'bikes') {
            if (data.result.length === this.state.bikes.length) {
              return false;
            }
            this.setState({
              bikes: data.result,
            });
          }
          if (filter === 'cars') {
            if (data.result.length === this.state.cars.length) {
              return false;
            }
            this.setState({
              cars: data.result,
            });
          }
        });
    };

    getByCategory('cars');
    getByCategory('bikes');
    getByCategory('motorbike');

    return true;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.homeImage}
          source={require('../../assets/images/home-image.png')}
        />
        <View style={styles.wrapperInputSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Search Vehicle"
            placeholderTextColor="#fff"
            keyboardType={'email-address'}
            onChangeText={this.searchName}
          />
          <Icon
            name="search-outline"
            style={styles.searchIcon}
            onPress={this.searchHandler}
            onPressIn={this.searchHandler}
          />
        </View>
        {this.props.auth.userInfo[0].roles === 'admin' && (
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Add-Vehicle')}>
              <Text style={styles.buttonText}>Add New Item</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.viewSection}>
          <Text style={styles.textCategory}>Cars</Text>
          <Pressable onPress={this.getCarsHandler}>
            <Text style={styles.viewMore}>
              View more{'  '}
              <Image
                source={require('../../assets/images/chevron-right.png')}
              />
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} style={styles.viewSectionImage}>
          {this.state.cars.map(vehicle => {
            return (
              <Pressable
                key={vehicle.id}
                onPress={async () => {
                  await this.props.navigation.navigate('Orders', {
                    id: vehicle.id,
                  });
                }}>
                <CardImage key={vehicle.id} picture={vehicle.picture} />
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.viewSection}>
          <Text style={styles.textCategory}>Motorbikes</Text>
          <Pressable onPress={this.getMotorbikesHandler}>
            <Text style={styles.viewMore}>
              View more{'  '}
              <Image
                source={require('../../assets/images/chevron-right.png')}
              />
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} style={styles.viewSectionImage}>
          {this.state.motorbike.map(vehicle => {
            return (
              <Pressable
                key={vehicle.id}
                onPress={async () => {
                  await this.props.navigation.navigate('Orders', {
                    id: vehicle.id,
                  });
                }}>
                <CardImage key={vehicle.id} picture={vehicle.picture} />
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.viewSection}>
          <Text style={styles.textCategory}>Bikes</Text>
          <Pressable onPress={this.getBikesHandler}>
            <Text style={styles.viewMore}>
              View more{'  '}
              <Image
                source={require('../../assets/images/chevron-right.png')}
              />
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} style={styles.viewSectionImage}>
          {this.state.bikes.map(vehicle => {
            return (
              <Pressable
                key={vehicle.id}
                onPress={() => {
                  this.props.navigation.navigate('Orders', {id: vehicle.id});
                }}>
                <CardImage key={vehicle.id} picture={vehicle.picture} />
              </Pressable>
            );
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({auth, vehicle}) => {
  return {
    auth,
    vehicle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllVehicles: query => {
      dispatch(vehicleAction(query));
    },
    getByCars: () => {
      dispatch(getCars());
    },
    getByMotorbike: () => {
      dispatch(getMotorbikes());
    },
    getByBikes: () => {
      dispatch(getBikes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// getCarsHandler = () => {
//   const query = `?filter=cars`;
//   this.props.navigation.navigate('View-More', {query: query, title: 'Cars'});
// };

// getMotorbikesHandler = () => {
//   const query = `?filter=motorbike`;
//   this.props.navigation.navigate('View-More', {
//     query: query,
//     title: 'Motorbike',
//   });
// };

// getBikesHandler = () => {
//   const query = `?filter=bikes`;
//   this.props.navigation.navigate('View-More', {
//     query: query,
//     title: 'Bikes',
//   });
// };
