import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import {
  SafeVi,
  TextSafe,
  SafeVi2,
  Texts,
  View_Holder2,
  Text_Holder,
  View_BtoLog,
  Button_signUp,
  TextButton_signUp,
  TextBtoLog,
  ViewsButton,
  Backbutton,
  View_Pos,
  Texthold2,
  TextButton_signUp2,
  Button_signUp2,
} from "../style-log/Safe";

import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Sign from "../login_sign/signup";
import Welcome from "../welcome";
import Home from "../Home";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";











const Login = ({ navigation }: { navigation: any }) => {
  const [email, setTextEmail] = React.useState("");
  const [pass, setTextPass] = React.useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setChecked] = useState(false);
const [isLoading, setIsLoading] = useState(false);


 const submitLogin = async () => {
   console.log("first", email);
   console.log("fffs", pass);

   try {
     const response = await axios.post(
       "http://192.168.1.13:1337/api/auth/local",
       {
         identifier: email, // Use the username or email entered by the user
         password: pass,
       }
     );
     // If the login is successful, you can save the authentication token
     const authToken = response.data.jwt;
     // Store the token in AsyncStorage for future requests
     await AsyncStorage.setItem("authToken", authToken);
     // Redirect to another screen (e.g., Home) after successful login
     navigation.navigate("Home");

     console.log("Login successful");
   } catch (error) {
     // Handle login error (e.g., incorrect credentials)
     console.error("Login failed:", error);
     // Show an alert to the user indicating login failure
     Alert.alert(
       "Login Failed",
       "Please check your credentials and try again."
     );
   }
 };





  return (
    <SafeVi>
      {/* Login TITLE CARD AND BACK BUTTON */}
      <ViewsButton>
        <TextSafe>Hey Welcome Back!</TextSafe>
      </ViewsButton>
      <Texts>Hello again, You have been missed.</Texts>

      <View_Pos>
        {/*  TEXT HOLDER FOR EMAIL AND PASS */}
        <View_Holder2>
          <Text_Holder>
            <Text>Email Address</Text>
          </Text_Holder>

          <Texthold2
            placeholder="Email"
            onChangeText={(newText) => setTextEmail(newText)}
            defaultValue={email}
          ></Texthold2>
        </View_Holder2>

        <View_Holder2>
          <Text_Holder>
            <Text>Password</Text>
          </Text_Holder>

          <Texthold2
            placeholder="Password"
            onChangeText={(newText) => setTextPass(newText)}
            defaultValue={pass}
            secureTextEntry={isPasswordShown}
          ></Texthold2>

          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              paddingTop: 55,
              right: 10,
            }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={30} color="black" />
            ) : (
              <Ionicons name="eye" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View_Holder2>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 40,
            marginBottom: -30,
          }}
        >
          <Checkbox
            style={{
              marginRight: 10,
            }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          ></Checkbox>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Remember Me
          </Text>
        </View>

        <Button_signUp2 onPress={submitLogin}>
          <TextButton_signUp2>Login</TextButton_signUp2>
        </Button_signUp2>

        <View_BtoLog>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <TextBtoLog>Don't have an account? Register</TextBtoLog>
          </Pressable>
        </View_BtoLog>
      </View_Pos>
    </SafeVi>
  );
};

export default Login;
