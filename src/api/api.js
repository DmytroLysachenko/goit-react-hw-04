import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesByQuery = async (configParams) => {
  const result = await axios.get("/search/photos", {
    params: {
      per_page: 12,
      client_id: "uRwnyKgvBa0sMtoApVB0PJKflYAaPP8L2ItDpFfPbL4",
      ...configParams,
    },
  });
  return result;
};
