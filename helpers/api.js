import axios from "axios";

export const getFaqs = () => {
  // return axios.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/faq`)
  try {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/faq`)
  }
  catch (error) {
    return error
  }
};