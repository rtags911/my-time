import axios from "axios";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const signUp = async (email, mobile, password) => {

  
  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  try {
    const response = await axios.post(
      "http://192.168.110.135:1337/api/registers",
      {
        data: {
          email: email,
          number: mobile,
          password: hashedPassword,
        },
      }
    );
    return response; // Return the response data
  } catch (error) {
    // Handle any errors (e.g., display an error message)
    console.error("Sign-up error:", error);
    throw error; // Re-throw the error so it can be caught higher up
  }
};






// export const Loginnow = async (email, pass) => {



//   try {
//     const response = await axios.post(
//       "http://192.168.110.135:1337/api/auth/local",
//       {
//         data: {
//           identifier: email,
//           password: pass,
//         },
//       }
//     );
//     return response; 
    
//     const authToken = response.data.jwt;
//     await AsyncStorage.setItem("authToken", authToken);  
       
//        // Return the response data
//   } catch (error) {
//     // Handle any errors (e.g., display an error message)
//     console.error("Sign-up error:", error);
//     throw error; // Re-throw the error so it can be caught higher up
//   }
// };





