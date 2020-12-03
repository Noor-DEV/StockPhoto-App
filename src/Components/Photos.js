import React from "react";
import Photo from "./Photo";
const Photos = ({ photos, loading }) => {
  return (
    <div className="photos-container" style={{ marginTop: "3rem" }}>
      {photos.map((pic, index) => (
        <Photo
          key={pic.id}
          className={`${pic.id === "dpbXgTh0Lac" && "dpbXgTh0Lac"}`}
          {...pic}
        />
      ))}
    </div>
  );
};

export default Photos;
