import { View, Text, TouchableOpacity } from "react-native";
import {
  TextSafe,
  SafeVi2,
  Texthold,
  View_Holder,
  Text_Holder,
  View_BtoLog,
  Button_signUp,
  TextButton_signUp,
  TextBtoLog,
  ViewsButton,
  Backbutton,
} from "../style-log/Safe";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "../login_sign/login";
import Welcome from "../welcome";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { signUp} from "../../apis/Signup_Users";
import axios from "axios";



const Signup = ({ navigation }: { navigation: any }) => {
  const [email, setTextEmail] = React.useState("");
  const [mobile, setTextMobile] = React.useState("");
  const [password, setTextPass] = React.useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);


const handleSignUp = async () => {
  try {
  const userResponse = await signUp(email, mobile, password);
  console.log('User Response:', userResponse); // Log the entire response

  if (userResponse && userResponse.status >= 200 || userResponse.status < 300) {
    // Handle the successful response here
    console.log('User created successfully:', userResponse.data);
  } else {
    // Handle other status codes or error cases
   // console.error('User creation failed with status:', userResponse.status);
    //console.error('Response Data:', userResponse.data);
  }
} catch (error) {
  // Handle any errors (e.g., display an error message)
  console.error('Sign-up error:', error);
}

};



const handleConst = async () => {
console.log("TESTER");
};

  return (
    <SafeVi2>
      <ViewsButton>
        {/* <Backbutton onPress={()=>navigation.navigate("Welcome")}>
          
          <Ionicons name="chevron-back-outline" size={35} color="black" style = {{
            justifyContent: "center",
            paddingTop:8,
          }}/>
        </Backbutton> */}

        <TextSafe> Create Account</TextSafe>
      </ViewsButton>
      {/*   Email */}

      <View_Holder>
        <Text_Holder>
          <Text>Email Address</Text>
        </Text_Holder>

        <Texthold
          placeholder="Email"
          onChangeText={(newText) => setTextEmail(newText)}
          defaultValue={email}
        ></Texthold>
      </View_Holder>

      {/* Number   */}
      <View_Holder>
        <Text_Holder>
          <Text>Mobile Number</Text>
        </Text_Holder>
        <Texthold
          placeholder="Mobile Number"
          onChangeText={(newText) => setTextMobile(newText)}
          defaultValue={mobile}
          keyboardType="numeric"
        ></Texthold>
      </View_Holder>

      {/* Password */}

      <View_Holder>
        <Text_Holder>
          <Text>Password</Text>
        </Text_Holder>

        <Texthold
          placeholder="Password"
          onChangeText={(newText) => setTextPass(newText)}
          defaultValue={password}
          secureTextEntry={isPasswordShown}
        ></Texthold>

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: "absolute",
            paddingTop: 20,
            right: 10,
          }}
        >
          {isPasswordShown == true ? (
            <Ionicons name="eye-off" size={25} color="black" />
          ) : (
            <Ionicons name="eye" size={25} color="black" />
          )}
        </TouchableOpacity>
      </View_Holder>

      <Button_signUp onPress={handleSignUp}>
        <TextButton_signUp>Sign Up</TextButton_signUp>
      </Button_signUp>

      <View_BtoLog>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <TextBtoLog>Already have an account? </TextBtoLog>
        </Pressable>
      </View_BtoLog>
    </SafeVi2>
  );
};

export default Signup;
