import axios from "axios";
const baseURL = "http://localhost:5001/musicapp-apollo/us-central1/app";

export const validateJWTToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtTokenValidation`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
