import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://uni-meal-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
