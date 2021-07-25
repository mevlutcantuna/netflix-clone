import React, { useEffect, useState } from "react";
import axios from "axios";

const Video: React.FC = () => {
  const [video, setVideo] = useState<string>();

  useEffect(() => {
    //url must be change
    axios.get(
      "https://image.tmdb.org/t/p?api_key=644c8949ded7d68ea2417f06b191df75"
    );
  }, []);
  return <></>;
};

export default Video;
