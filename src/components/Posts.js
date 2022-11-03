import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className=" ">
      <div className="row row-margin-05  ">
        {posts &&
          posts.map((value, index) => {
            return (
              <div key={index} className="col-4  mb-5">
                <div className="card" style={{ width: "25rem" }} >
                  <img
                    src={value.previewURL}
                    className={"card-img-top"}
                    alt="image"
                  />
                
                <div className="card-footer">
                  <h6 className="card-title"> tags :- {value.tags} </h6>
                  <h6 className="card-title">likes :- {value.likes} </h6>
                  <h6 className="card-title"> comments:-{value.comments} </h6>
                </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
