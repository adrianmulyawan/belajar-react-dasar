import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../../components/navbar.component";

const DetailPostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const getDetailPost = async () => {
    const items = await axios.get(`http://localhost:3004/posts/${id}`);
    const item = items.data;
    setPost(item);
    console.info(item)
  };

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      getDetailPost();
      i++;
    }
  }, [i]);
 
  return (
    <>
      <NavbarComponent />
      <div className="card p-3 mt-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Judul
          </label>
          <input type="text" className="form-control" id="title" value={ post.title } disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Isi Post
          </label>
          <input type="text" className="form-control" id="body" value={ post.body } disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Author
          </label>
          <input type="text" className="form-control" id="body" value="Riska" disabled />
        </div>
        <Link to='/' className="btn btn-primary float-end">
          Kembali Kehalaman Post
        </Link>
      </div>
    </>
  );
};

export default DetailPostPage;