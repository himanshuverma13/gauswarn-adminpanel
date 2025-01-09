import axios from "axios";

const URL = process.env.REACT_APP_API;

// ---------------- Feedback API --------------------------------

export const FeedbackAPI = async () => {
  try {
    const response = await axios.get(`${URL}/allfeedback`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data?.reviews;
  } catch (error) {
    console.log("error: ", error);
  }
};

//  ---------- Product CRUD API --------------------------------
export const GetProductAPI = async () => {
  try {
    const response = await axios.get(`${URL}/getAllProduct`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const UpdateProductAPI = async (id, payload) => {
  console.log("id,payload: ", id, payload);
  try {
    const response = await axios.post(
      `${URL}/updateProductById/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const DeleteProductAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/deleteProductById/${payload}`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const AddProductAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/createproduct`, payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

//  ---------- Login & Register API --------------------------------
export const LoginAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/login`,payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};
export const RegisterAPI = async (payload) => {
  try {
    const response = await axios.post(`${URL}/register`,payload, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

