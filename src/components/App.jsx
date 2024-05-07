import { useEffect, useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { fetchImagesByQuery } from "../api/api";
import { ImageModal } from "./ImageModal/ImageModal";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [largeImg, setLargeImg] = useState("");

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = query && (await fetchImagesByQuery({ page, query }));
        setImages((prev) => [...prev, ...data.results]);
        setTotal(data.total);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && getImages();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickImage = (src) => {
    setLargeImg(src);
  };

  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onClickImage={handleClickImage} />
      )}
      {largeImg && <ImageModal src={largeImg} />}
      {Math.ceil(total / 10) > page && (
        <LoadMoreBtn onClick={handleClickLoadMore} />
      )}
    </>
  );
};
