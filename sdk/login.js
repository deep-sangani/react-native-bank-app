import axios from './axiosConfig';

const login = async data => {
  const payload = {
    mobile: data.mobile,
  };

  try {
    return await axios.post('/app-login', payload);
  } catch (error) {
    console.log(error);
  }
};

export default login;
