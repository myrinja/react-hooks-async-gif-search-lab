import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gif, setGif] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8000/gifs")
      .then((res) => res.json())
      .then((data) => {
       
        setGif(data);
      });
  }, []);

 

  return (
    <>
    <GifSearch />
      <GifList gif={gif} />
      
    </>
  );
}

export default GifListContainer;
