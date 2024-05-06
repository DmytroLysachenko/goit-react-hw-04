import { useEffect, useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { fetchImages, fetchImagesByQuery } from "../api/api";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = query
          ? await fetchImagesByQuery({ page, query })
          : await fetchImages({ page, query });
        setImages((prev) => ({ ...prev, ...data.results }));
        setTotal(data.total);
        setPage((prev) => prev++);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);
  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };
  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 ? (
        <ImageGallery />
      ) : (
        <p>Unfortunately no images found by your request</p>
      )}
      {Math.ceil(total / 10) < page && <LoadMoreBtn setPage={setPage} />}
    </>
  );
};
