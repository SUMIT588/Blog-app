import { Container, PostCard } from "../components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import appwriteService from "../appwrite/config";
import { getAllPost } from "../store/postSlice";
import postSlice from "../store/postSlice";

function Home() {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch()

  const postData = useSelector((state) => state.post.post)

  

  console.log(postData, 'postDAta')

  

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      dispatch(getAllPost( posts.documents))
        
      }
    });
  }, []);

  if (postData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="p-5 h-screen w-full">
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {postData.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
