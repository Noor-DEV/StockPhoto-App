import React, { useEffect } from "react";
import { useGlobalContext } from "./Components/Context";
import "./App.css";
import Photos from "./Components/Photos";
import Form from "./Components/Form";
import load from "./Components/load.gif";
import Modal from "./Components/Modal";
const App = () => {
  const {
    photos,
    loading,
    modalLikes,
    modalDescription,
    modalSrc,
    showModal,
  } = useGlobalContext();
  useEffect(() => {
    if (showModal) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showModal]);
  return (
    <>
      <Form />
      {loading ? (
        <div className="gif-container">
          <img src={load} alt="" className="gif" />
          <h1>Loading...</h1>
        </div>
      ) : photos.length ? (
        <Photos photos={photos} loading={loading} />
      ) : (
        <h1>No Photos To Display</h1>
      )}
      <Modal src={modalSrc} likes={modalLikes} description={modalDescription} />
    </>
  );
};

export default App;
