import { Link } from "react-router-dom";
import React from "react";
import service from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-lg p-4 bg-green-100">
        <div className="w-full mb-4 flex justify-center flex-col items-center">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-40 h-40 object-cover"
          />
          <div>
            
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default PostCard;
