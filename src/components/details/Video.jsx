import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Video({ item }) {
  const videoImg = `https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`;

  return (
    <Link to={`https://www.youtube.com/watch?v=${item.key}`} target="_blank">
      <div className="relative">
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl text-white"
        />
        <img src={videoImg} alt={item.name} />
      </div>
      <h4 className="font-semibold text-sm bg-gray-200 p-1">{item.name}</h4>
    </Link>
  );
}

export default Video;
