import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddVehicle,
  Chat,
  EditVehicle,
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
  Search,
  UpdateProfile,
  ViewMore,
  HistoryAdmin,
  SplashScreen,
  UpdatePassword,
  Filter,
  ChatRoom,
  CheckCode,
  NewPassword,
} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  const getToken = useSelector(state => state.auth.token);
  console.log(getToken);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {props => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Search" options={{headerShown: false}}>
        {props => <Search {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{headerShown: false}}
      />
      <Stack.Screen name="View-More" options={{headerShown: false}}>
        {props => <ViewMore {...props} />}
      </Stack.Screen>
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
      <Stack.Screen
        name="Add-Vehicle"
        component={AddVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit-Vehicle"
        component={EditVehicle}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Update-Profile"
        component={UpdateProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Update-Password"
        component={UpdatePassword}
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
      <Stack.Screen
        name="Check-Code"
        component={CheckCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="New-Password"
        component={NewPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat-Room"
        component={ChatRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const isAdmin = useSelector(state => state.auth.userInfo[0]?.roles);
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
      {isAdmin === 'admin' ? (
        <Tab.Screen
          name="History-Admin"
          component={HistoryAdmin}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => (
              <Icon name="copy" color={color} size={26} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => (
              <Icon name="copy" color={color} size={26} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash-Screen'}>
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
        <Stack.Screen
          name="Splash-Screen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
