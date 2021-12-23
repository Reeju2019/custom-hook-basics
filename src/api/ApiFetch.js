import axios from "axios";
import { useQuery } from "react-query";

const useDogPicture = () => {
  const { data, status, error } = useQuery("dogPicture", () =>
    axios.get("https://dog.ceo/api/breeds/image/random")
  );
  return { data, status, error };
};
export default useDogPicture;
