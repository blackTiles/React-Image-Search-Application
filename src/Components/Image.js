import React from "react";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Image = ({ attrs }) => {
  return (
    <>
      <div className="w-full h-full relative mb-[15px] bg-gray-500">
        <img
          className="w-full h-full"
          src={attrs.webformatURL}
          alt={attrs.tags}
        />
        <div
          onClick={() => {
            saveAs(`${attrs.largeImageURL}`, `${attrs.id}.jpg`);
          }}
          className="grid place-items-center absolute right-[10px] bottom-[10px] z-50 w-[40px] h-[40px] text-[16px] bg-white hover:bg-gray-200 active:bg-white rounded-xl shadow-lg shadow-black text-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </>
  );
};

export default Image;
