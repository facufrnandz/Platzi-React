import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
    fetch(API)
      .then((response) => (
        response.json()
      ))
      .then((data) => {
        setCategories(Object.keys(data));
        setVideos(data);
      });
  }, [API]);
  
  let response = {
    videos: videos,
    categories : categories
  }

  return response;
 
};

export default useInitialState;
