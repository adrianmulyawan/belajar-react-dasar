import axios from "axios";
import PostCardComponent from "../PostCard/post-card.component";
import { useEffect } from "react";
import { useState } from "react";

const BlogPostComponent = () => {
  const [posts, setPosts] = useState([]);

  // > Menggunakan Fetch API
  // const getDataPost = async () => {
  //   const items = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const item = await items.json();
  //   // console.info(item);
  //   setPosts(item);
  // }

  // > Menggunakan Axios
  const getDataPost = async () => {
    const items = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.info(items);
    const item = await items.data;
    console.info(item);
    // console.info(item);
    setPosts(item);
  }

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      getDataPost();
      i++;
    }
  }, [i]);

  return (
    <>
      <div className="container-fluid mt-3">
        <h1>Blog Post</h1>
        <div className="card-post">
          <div className="row justify-content-center">
            {
              posts.map((post) => {
                return <PostCardComponent 
                  key={ post.id } 
                  title={ post.title }
                  body={ post.body }
                />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostComponent;