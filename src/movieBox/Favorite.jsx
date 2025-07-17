import React from "react";
import star from "../assets/star.svg";

function Favorite({ value }) {
  const stars = Array(value).fill(star);

  return (
    <>
      {stars.map((starItem, index) => (
        <img
          key={index}
          src={starItem}
          width="14"
          height="14"
          alt="star"
        />
      ))}
    </>
  );
}

export default Favorite;
