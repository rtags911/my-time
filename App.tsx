import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Welcome, Signup } from "./screen";

//import Auth from "./main/auth"
import { createStackNavigator } from "@react-navigation/stack";


// type RootstackParamlist = {
//   Home: undefined; 
//   welcome:undefined;
//   Login: undefined;
//   singup:undefined;
//   Profile: { Name: string };
// };



// const stack = createStackNavigator<RootstackParamlist>();

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="welcome">
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        ></stack.Screen>

        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></stack.Screen>

        <stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
