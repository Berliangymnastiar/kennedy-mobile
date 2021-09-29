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
} from 'react-native';
import CardImage from '../../component/CardImage';
import {
  getBikes,
  getCars,
  getMotorbikes,
  vehicleAction,
} from '../../redux/action/vehicleAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleName: '',
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
    this.props.getByCars();
    this.props.getByMotorbike();
    this.props.getByBikes();
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
        <View style={styles.viewSection}>
          <Text style={styles.textCategory}>Cars</Text>
          <Text style={styles.viewMore}>
            View more{'  '}
            <Image source={require('../../assets/images/chevron-right.png')} />
          </Text>
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
          <Text style={styles.viewMore}>
            View more{'  '}
            <Image source={require('../../assets/images/chevron-right.png')} />
          </Text>
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
          <Text style={styles.viewMore}>
            View more{'  '}
            <Image source={require('../../assets/images/chevron-right.png')} />
          </Text>
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
