import axios from 'axios';
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
  FlatList,
} from 'react-native';
import CardImage from '../../component/CardImage';
import {
  getBikes,
  getCars,
  getMotorbikes,
  vehicleAction,
} from '../../redux/action/vehicleAction';
import {getVehicles} from '../../utils/Vehicle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleName: '',
      vehicle: [],
      cars: [],
      bikes: [],
      motorbike: [],
      nextPage: null,
      allVehicles: [],
    };
  }

  searchName = input => {
    this.setState({vehicleName: input});
  };

  searchHandler = () => {
    const query = `?name=${this.state.vehicleName}`;
    this.props.navigation.navigate('Search', {query: query});
  };

  handleGetAllVehicles = () => {
    const query = `?filter=`;
    this.props.navigation.navigate('View-More', {query, title: 'All Vehicles'});
  };

  getCarsHandler = () => {
    const query = '?filter=cars';
    this.props.navigation.navigate('View-More', {query: query, title: 'Cars'});
  };

  getMotorbikesHandler = () => {
    const query = '?filter=motorbike';
    this.props.navigation.navigate('View-More', {
      query: query,
      title: 'Motorbike',
    });
  };

  getBikesHandler = () => {
    const query = '?filter=bikes';
    this.props.navigation.navigate('View-More', {query: query, title: 'Bike'});
  };

  getAllVehiclesHandler = () => {
    const query = `?filter=`;
    return getVehicles(query).then(result => {
      console.log(result.data.result);
      this.setState({allVehicles: result.data.result});
      this.setState({nextPage: result.data.info.nextPage});
    });
  };

  componentDidMount() {
    this.getByCategory = this.props.navigation.addListener('focus', () => {
      this.props.getByCars();
      this.props.getByMotorbike();
      this.props.getByBikes();
      // this.props.getAllVehicles(query, this.state.nextPage);
    });
    this.getAllVehiclesHandler();
  }

  componentWillUnmount() {
    this.getByCategory();
  }

  render() {
    console.log('all Vehicles', this.state.allVehicles);
    console.log('Next Page', this.state.nextPage);
    // console.log(this.props.vehicle.vehicleData.result);
    // console.log('nex page', this.props.vehicle.vehicleData.info.nextPage);
    // const nextPage = this.props.vehicle.vehicleData.info.nextPage;
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
        {this.props.auth.userInfo[0]?.roles === 'admin' && (
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Add-Vehicle')}>
              <Text style={styles.buttonText}>Add New Item</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.viewSection}>
          <Text style={styles.textCategory}>All Vehicles</Text>
          <Pressable onPress={this.handleGetAllVehicles}>
            <Text style={styles.viewMore}>
              View more{'  '}
              <Image
                source={require('../../assets/images/chevron-right.png')}
              />
            </Text>
          </Pressable>
        </View>
        <View horizontal={true} style={styles.viewSectionImage}>
          <FlatList
            horizontal
            data={this.state.allVehicles}
            renderItem={({item}) => {
              console.log(item);
              return (
                <Pressable
                  onPress={async () => {
                    await this.props.navigation.navigate('Orders', {
                      id: item.id,
                    });
                  }}>
                  <CardImage picture={item.picture} />
                </Pressable>
              );
            }}
            keyExtractor={(_, index) => index}
            onEndReached={() => {
              this.state.nextPage !== null &&
                axios.get(`${API_URL}` + this.state.nextPage).then(result => {
                  this.setState({
                    allVehicles: [
                      ...this.state.allVehicles,
                      ...result.data.result,
                    ],
                    nextPage: result.data.info.nextPage,
                  });
                });
            }}
          />
          {/* {this.props.vehicle.vehicleData.map(vehicle => {
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
          })} */}
        </View>
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
          {this.props.vehicle.cars.map(vehicle => {
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
          {this.props.vehicle.motorbikes.map(vehicle => {
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
          {this.props.vehicle.bikes.map(vehicle => {
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
