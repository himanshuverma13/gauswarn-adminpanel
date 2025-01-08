import axios from "axios";

const URL = process.env.REACT_APP_API


export const FeedbackAPI = async()=>{
    try {
        const response = await axios.get(`${URL}/allfeedback`)
        return response?.data?.reviews
    } catch (error) {
        console.log('error: ', error);
    }

}