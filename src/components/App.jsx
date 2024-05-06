import { useEffect, useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import axios from "axios";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchImages = async (params) => {
      try {
        setIsLoading(true);
        axios.defaults.baseURL = "https://api.unsplash.co";
        const { data } = await axios.get("/search/photos", { params });
        setImages(data.results);
        setTotal(data.total);
        setPage((prev) => prev++);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    const params = {
      client_id: "uRwnyKgvBa0sMtoApVB0PJKflYAaPP8L2ItDpFfPbL4",
      orientation: "landscape",
      page,
      query,
    };

    fetchImages(params);
  }, [query, page]);

  return (
    <>
      <SearchBar setQuery={setQuery} setPage={setPage} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 ? (
        <ImageGallery />
      ) : (
        <p>Unfortunately no images found by your request</p>
      )}
      {Math.ceil(total / 10) < page && <LoadMoreBtn />}
    </>
  );
};
