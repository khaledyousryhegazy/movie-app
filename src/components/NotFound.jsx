import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container min-h-[calc(100vh-58px-120px)] flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <FontAwesomeIcon className="text-5xl text-[#BB86FC]" icon={faBan} />
        <h2 className="text-[#BB86FC] text-4xl">Page Not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;
