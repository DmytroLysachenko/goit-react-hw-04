import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.co";

export const fetchImages = async (configParams) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "uRwnyKgvBa0sMtoApVB0PJKflYAaPP8L2ItDpFfPbL4",
      orientation: "landscape",
      ...configParams,
    },
  });
  return data;
};

export const fetchImagesByQuery = async (configParams) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "uRwnyKgvBa0sMtoApVB0PJKflYAaPP8L2ItDpFfPbL4",
      orientation: "landscape",
      ...configParams,
    },
  });
  return data;
};
