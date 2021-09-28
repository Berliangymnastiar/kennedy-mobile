import React, {Fragment} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Chat,
  FinishPayment,
  ForgotPassword,
  History,
  Home,
  Login,
  Orders,
  Payment1,
  Payment2,
  Payment3,
  Profile,
  Register,
  UpdateProfile,
} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import defaultPhoto from '../assets/images/default-photo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  const getToken = useSelector(state => state.auth.token);
  console.log(getToken);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment1"
        component={Payment1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment2"
        component={Payment2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment3"
        component={Payment3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Finish-Payment"
        component={FinishPayment}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const photoUser = useSelector(state => state.auth.userInfo[0].picture);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'Profile',
          headerTitleStyle: {fontSize: 22},
          headerStyle: {
            backgroundColor: '#FFFFFF',
            height: 82,
          },
          headerLeft: () => (
            <Image
              source={{uri: `http://192.168.1.100:8000` + photoUser}}
              style={{
                width: 60,
                height: 60,
                marginHorizontal: 18,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Update-Profile"
        component={UpdateProfile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot-Password"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFC7A7"
      barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => <Icon name="copy" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <Icon name="chatbubbles" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  const token = useSelector(state => state.auth.token);
  console.log(token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token && (
          <Stack.Screen
            name="Main-Tabs"
            component={MainTabs}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
