import { useEffect, useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { fetchImagesByQuery } from "../api/api";
import { ImageModal } from "./ImageModal/ImageModal";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";

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
    if (query === "") {
      toast.error("Ops, wrong input value. Try another one!", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }
    setQuery((prev) => {
      if (prev !== query) {
        setImages([]);
        setPage(1);
      }
      return query;
    });
  };

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const onClickImage = (src) => {
    setLargeImg(src);
    openModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    setLargeImg("");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onClickImage={onClickImage} />
      )}
      {largeImg && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          {" "}
          <ImageModal src={largeImg} closeModalBtn={closeModal} />{" "}
        </Modal>
      )}
      {Math.ceil(total / 10) > page && (
        <LoadMoreBtn onClick={handleClickLoadMore} />
      )}
      <ToastContainer />
    </>
  );
};
