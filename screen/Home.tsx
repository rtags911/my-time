import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home1 from '../screen_main/Fhome';
import Search1 from "../screen_main/FSearch";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();


const Homes = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home1}
        options={{
          title: " Sett Page",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="search"
        component={Search1}
        options={{
          title: " Sett Page",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-circle" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );


};


export default Homes;

