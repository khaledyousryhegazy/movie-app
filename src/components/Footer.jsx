import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FooterData } from "../data/data";

function Footer() {
  return (
    <div className="container py-10 mt-20   flex justify-center items-center flex-col">
      {/* Social links */}
      <div className="flex gap-5 text-xl my-5 cursor-pointer">
        {FooterData.map((ele) => {
          return (
            <a key={ele.id} href={ele.href} target="_blank">
              <FontAwesomeIcon
                className="hover:text-[#BB86FC] transition duration-150"
                icon={ele.icon}
              />
            </a>
          );
        })}
      </div>
      {/* Copy right */}
      <div className="text-sm font-semibold">
        &copy; 2023 By <span className="text-[#BB86FC]">Khaled Yousry</span>
      </div>
    </div>
  );
}

export default Footer;
