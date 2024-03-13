import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "../components/Button.js";
import Container from "../components/container/Container.js";
import appwriteService from "../appwrite/config.js";
import parse from "node-html-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  const userData = useSelector((state) => state.userData);
  console.log(userData, 'userDAta')

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

const content = post?.content

const parsedHtml = content ? parse(content) :  null

const convertedText = parsedHtml ? parsedHtml.querySelector('p').text : null

console.log(convertedText, 'converted')

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className>{convertedText}</div>
      </Container>
    </div>
  ) : null;
}

export default Post;
