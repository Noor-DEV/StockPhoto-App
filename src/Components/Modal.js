import React, { useRef } from "react";
import download from "image-downloader";
import { useGlobalContext } from "./Context";
import {
  FaTimes,
  FaArrowCircleDown as Download,
  FaHeart,
} from "react-icons/fa";

const Modal = ({ src, description, likes }) => {
  const linkRef = useRef(null);
  const { showModal, setShowModal, downloadSrc } = useGlobalContext();
  const hideModal = () => {
    setShowModal(false);
  };
  const options = {
    url: downloadSrc,
    dest: "C:/Users/hp/Downloads",
  };
  const handleDownload = (e) => {
    console.log("the download feature has not been implemented yet....");
    // window.showOpenFilePicker().then((a) => console.log(a));
  };

  return (
    <div className={`modal-container ${showModal && "show-modal"}`}>
      <div className="modal">
        <FaTimes className="cancel" onClick={hideModal} />
        <div className="credentials">
          <h4 className="description">{description}</h4>
          <div className="actions">
            <h4 className="votes">
              <FaHeart className="heart" />
              {likes}
            </h4>
            <Download className="download" onClick={handleDownload} />
          </div>
        </div>
        <div className="modal-img">
          <img src={src} alt={description} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
// Description .. alt-description
// color
// created_at
// likes
