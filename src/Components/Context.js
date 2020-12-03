import React, { useState, useContext, createContext, useEffect } from "react";
const AppContext = createContext();
const baseUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos/";
const Context = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalLikes, setModalLikes] = useState(0);
  const [modalDescription, setModalDescription] = useState("");
  const [downloadSrc, setDownloadsrc] = useState("");
  useEffect(() => {
    if (query.length > 0) {
      console.log(
        "Sorry, but due to the rate limit of the api i cannot make a call each time you enter a letter so you have to enter a word and hit enter"
      );
      setLoading(true);
      fetch(
        `${searchUrl}?client_id=${process.env.REACT_APP_access_KEY}&query=${query}&per_page=30&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPhotos(data.results);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          setPhotos([]);
          return;
        });
      fetch(
        `${searchUrl}?client_id=${process.env.REACT_APP_access_KEY}&query=${query}&per_page=30&page=6`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos((prev) => [...prev, ...data.results]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
      fetch(
        `${searchUrl}?client_id=${process.env.REACT_APP_access_KEY}&query=${query}&per_page=30&page=12`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos((prev) => [...prev, ...data.results]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
    } else {
      fetch(
        `${baseUrl}?client_id=${process.env.REACT_APP_access_KEY}&per_page=30&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
      fetch(
        `${baseUrl}?client_id=${process.env.REACT_APP_access_KEY}&per_page=30&page=3`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos((prev) => [...prev, ...data]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
      fetch(
        `${baseUrl}?client_id=${process.env.REACT_APP_access_KEY}&per_page=30&page=6`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos((prev) => [...prev, ...data]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
      fetch(
        `${baseUrl}?client_id=${process.env.REACT_APP_access_KEY}&per_page=30&page=8`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotos((prev) => [...prev, ...data]);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
    }
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        photos,
        query,
        setQuery,
        loading,
        showModal,
        setShowModal,
        modalDescription,
        downloadSrc,
        setDownloadsrc,
        setModalDescription,
        modalSrc,
        setModalSrc,
        modalLikes,
        setModalLikes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default Context;
