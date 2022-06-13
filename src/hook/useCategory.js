import { useQuery } from "react-query";
import axios from "axios";

const getPostById = async () => {
  const { data } = await axios.get(
    "https://62a60ad1430ba53411d05109.mockapi.io/category"
  );
  return data;
};

export default function usePosts() {
  return useQuery("category", getPostById);
}
