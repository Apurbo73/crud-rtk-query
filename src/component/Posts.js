import React from "react";
import { useDeletePostMutation, useGettAllPostQuery } from "../services/post";
// import { Link } from "react-router-dom";

const Posts = () => {
  const { data: post, isLoading, isError, error } = useGettAllPostQuery();
  const [deletePost, response]= useDeletePostMutation();
  // console.log(post)
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (isError && !isLoading) {
    content = (
      <div>
        <h1>
          {error.error}
        </h1>
      </div>
    );
  }
  if (!isError && !isLoading && post.length > 0) {
    content = post.map(p => {
      return (
        <div key={p.id} className="card d-flex m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              id: {p.id}
            </p>
            <h5 className="card-title">
              {p.title}
            </h5>
            <p className="card-text">
              {p.body}
            </p>
         <div className="d-flex mt-5">
         <button href="#" className="btn btn-primary mx-2 w-50">
              Update
            </button>
            <button href="#" className="btn btn-danger w-50" onClick={()=>{deletePost(2)}}>
              Delete
            </button>
         </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="d-flex flex-wrap mt-5 container text-center">
      {content}
    </div>
  );
};

export default Posts;
