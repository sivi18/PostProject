import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectById } from "../slices/CrudifSlice";
import Timelayout from "./Time";

function Singlepost() {
  const { id } = useParams();
  const selectedPost = useSelector((state) => selectById(state, id));
  console.log(selectedPost);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {selectedPost && (
        <div
          key={selectedPost.id}
          className="bg-blue-200 p-10 rounded shadow-md mt-2"
        >
          <h2 className="text-2xl mb-2">
            {selectedPost.title.charAt(0).toUpperCase() +
              selectedPost.title.slice(1)}
          </h2>
          <p className="mb-2">{selectedPost.body}</p>
          <Link to={`/editpost/${selectedPost.id}`} className="underline">
            Edit Post
          </Link>
          <br />
          <Timelayout time={selectedPost.date} />
        </div>
      )}
    </div>
  );
}

export default Singlepost;
