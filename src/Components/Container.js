import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Image from "./Image";

const API_KEY = "30292224-031e1cfd1b646821438ddae59";

const Container = () => {
  const { search_text } = useParams();

  const [searchUrl, setSearchUrl] = useState("");
  const [imageData, setImageData] = useState([]);
  
  useEffect(
    function effectFunction() {
      async function getImages() {
        if (search_text === undefined) {
          setSearchUrl(
            "https://pixabay.com/api/?key=30292224-031e1cfd1b646821438ddae59&image_type=photo&pretty=true"
          );
        } else {
          setSearchUrl(
            "https://pixabay.com/api/?key=" +
              API_KEY +
              "&q=" +
              encodeURIComponent(search_text) +
              "&image_type=photo"
          );
        }

        let url = searchUrl;
        let myObject = await fetch(url);
        let myText = await myObject.json();
        setImageData(myText.hits);
      }
      getImages();
    },
    [search_text, searchUrl]
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
