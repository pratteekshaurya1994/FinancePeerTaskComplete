import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/dashboard/Home';
import ApiScreen from '../screens/dashboard/apiScreen';
import LocationScreen from '../screens/dashboard/locationScreen';
import SelfieScreen from '../screens/dashboard/selfieScreen';
import JsonDisplayScreen from '../screens/dashboard/jsonDisplayScreen';
// import {ImageConfig} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Gallery from '../screens/dashboard/Gallery';
// import Favourite from '../screens/dashboard/Favourite';
// import CircularButtonComponent from '../components/circularButton';
// import {ImageConfig, FontConfig} from '../constants';

const HomeStack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home Screen"
        component={Home}
        options={{headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};
const ApiStack = createNativeStackNavigator();
const ApiNavigator = () => {
  return (
    <ApiStack.Navigator initialRouteName="Home">
      <ApiStack.Screen
        name="Api Screen"
        component={ApiScreen}
        options={{headerShown: true}}
      />
    </ApiStack.Navigator>
  );
};
const LocationStack = createNativeStackNavigator();
const LocationNavigator = () => {
  return (
    <LocationStack.Navigator initialRouteName="Home">
      <LocationStack.Screen
        name="Location Screen"
        component={LocationScreen}
        options={{headerShown: true}}
      />
    </LocationStack.Navigator>
  );
};
const SelfieStack = createNativeStackNavigator();
const SelfieNavigator = () => {
  return (
    <SelfieStack.Navigator initialRouteName="Home">
      <SelfieStack.Screen
        name="Selfie Screen"
        component={SelfieScreen}
        options={{headerShown: true}}
      />
    </SelfieStack.Navigator>
  );
};
const JsonDataStack = createNativeStackNavigator();
const JsonDataNavigator = () => {
  return (
    <JsonDataStack.Navigator initialRouteName="Home">
      <JsonDataStack.Screen
        name="JSON Display Screen"
        component={JsonDisplayScreen}
        options={{headerShown: true}}
      />
    </JsonDataStack.Navigator>
  );
};

const iconSize = 24;
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={() => {
          return {
            tabBarIcon: props =>
              props.focused ? (
                <Icon name="home" size={20} color="#13cff4" />
              ) : (
                <Icon name="home" size={20} color="#a59a9a" />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Api"
        component={ApiNavigator}
        options={() => {
          return {
            tabBarIcon: props =>
              props.focused ? (
                <Icon name="filter" size={20} color="#13cff4" />
              ) : (
                <Icon name="filter" size={20} color="#a59a9a" />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationNavigator}
        options={() => {
          return {
            tabBarIcon: props =>
              props.focused ? (
                <Icon name="location-arrow" size={20} color="#13cff4" />
              ) : (
                <Icon name="location-arrow" size={20} color="#a59a9a" />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Selfie"
        component={SelfieNavigator}
        options={() => {
          return {
            tabBarIcon: props =>
              props.focused ? (
                <Icon name="images" size={20} color="#13cff4" />
              ) : (
                <Icon name="images" size={20} color="#a59a9a" />
              ),
          };
        }}
      />
      <Tab.Screen
        name="JsonDisplay"
        component={JsonDataNavigator}
        options={() => {
          return {
            tabBarIcon: props =>
              props.focused ? (
                <Icon name="database" size={20} color="#13cff4" />
              ) : (
                <Icon name="database" size={20} color="#a59a9a" />
              ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
