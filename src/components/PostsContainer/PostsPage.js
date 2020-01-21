import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
  console.log(props.data);
  return (
    <div className="posts-container-wrapper">
      {props.data.map((post) => {
        return <Post post={post}/>
      })}
    </div>
  );
};

export default PostsPage;

