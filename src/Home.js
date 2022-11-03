import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [imgname, setImgname] = useState([]);
  return (
    <div className="bgimage ">
      <div id="hero ">
        <center>
          <h1 className="mb-4 font ">Search Images </h1>
          <input
            type="text"
            onChange={(e) => setImgname(e.target.value)}
            placeholder="Search"
            size="25"
          />
          <br />
          <div className="mt-2 col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => imgname && history.push(`/search/${imgname}`)}
            >
              Get Images
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Home;
