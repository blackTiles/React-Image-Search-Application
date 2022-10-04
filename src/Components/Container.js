import React, { useState, useEffect } from "react";
import Image from "./Image";

const Container = ({ searchUrl }) => {
  const [imageData, setImageData] = useState([]);
  useEffect(
    function effectFunction() {
      async function getImages() {
        let url = searchUrl;
        let myObject = await fetch(url);
        let myText = await myObject.json();
        setImageData(myText.hits);
      }
      getImages();
    },
    [searchUrl]
  );

  return (
    <div className="container md:px-5 px-2 py-5 w-full mx-auto">
      {imageData.length > 0 ? (
        <div class="columns-1 md:columns-2 lg:columns-3 gap-[16px] gap-y-[20px] mx-auto">
          {imageData.map((img) => {
            return <Image key={img.id} attrs={img} />;
          })}
        </div>
      ) : (
        <h1 className="text-center text-gray-500 text-[25px] lg:text-[50px] w-full md:w-1/2 mx-auto">
          Sorry, Images not available with this tag
        </h1>
      )}
    </div>
  );
};

export default Container;
