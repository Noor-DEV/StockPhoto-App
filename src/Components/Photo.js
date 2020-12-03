import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const Photo = ({
  urls: { small },
  likes,
  user: {
    name,
    profile_image: { small: avatar },
  },
  tagline,
  color,
  alt_description,
  links: { download },
}) => {
  const [show, setShow] = useState(false);
  const {
    setShowModal,
    setModalSrc,
    setModalLikes,
    setModalDescription,
    setDownloadsrc,
  } = useGlobalContext();
  const handleHover = () => {
    setShow(true);
  };
  const handleLeave = () => {
    setShow(false);
  };
  const handleClick = () => {
    setShowModal(true);
    setModalSrc(small);
    setModalLikes(likes);
    setModalDescription(alt_description);
    setDownloadsrc(download);
  };
  return (
    <div
      className="img-container"
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <img src={`${small}`} alt={tagline} className="img" />
      <div className={`cred ${show ? `show` : null}`}>
        <div className="left">
          <h2 className="name">{name}</h2>
          <div className="likes-cont">
            <h2 className="likes">Likes</h2>
            <h3 className="num">{likes}</h3>
          </div>
        </div>
        <img src={avatar} alt={name} className="avatar" />
      </div>
    </div>
  );
};

export default Photo;
