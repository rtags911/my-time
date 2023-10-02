import axios from 'axios';



export const signUp = async (email, mobile, password) => {
  try {
    const response = await axios.post('http://192.168.110.135:1337/api/user-datas', {
      "data": {
        Uemail: email,
        Unumber: mobile,
        Upass: password,
      }
    });

    console.log(response);
    return response.data; // Return the data if needed

  } catch (error) {
    throw error;
  }
};



