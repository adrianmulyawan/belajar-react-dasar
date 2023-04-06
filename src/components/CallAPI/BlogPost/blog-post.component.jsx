import axios from "axios";
import PostCardComponent from "../PostCard/post-card.component";
import { useEffect } from "react";
import { useState } from "react";

const BlogPostComponent = () => {
  const [formPost, setFormPost] = useState({
    userId: 1,
    id: 101,
    title: '',
    body: ''
  });
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // > Menggunakan Fetch API
  // const getDataPost = async () => {
  //   const items = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const item = await items.json();
  //   // console.info(item);
  //   setPosts(item);
  // }

  // > Menggunakan Axios
  // => Mendapatkan seluruh data
  const getDataPost = async () => {
    // const items = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const items = await axios.get('http://localhost:3004/posts');
    // console.info(items);
    const item = await items.data;
    // console.info(item);
    // console.info(item);
    setPosts(item);
    setLoading(true);
  }

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      getDataPost();
      i++;
    }
  }, [i]);

  // > Method Hapus Data
  const handleRemovePost = async (data) => {
    console.info(data, 'ini ID');
    await axios.delete(`http://localhost:3004/posts/${data}`);
    getDataPost();
    setMessage('Data Berhasil Dihapus');
  };

  // > Method Handle Post (Insert New Data)
  // => Mengambil Nilai Dari Input
  const handleFormChange = (e) => {
    setFormPost({
      ...formPost,
      // e.target.name => refrences ke name input form
      // e.target.value => refrence ke nilai dari input formnya
      [e.target.name]: e.target.value
    });
  }
  // => Handle Saat Form di Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.info(formPost);
  }

  return (
    <>
      <div className="container-fluid mt-3">
        <h1>Blog Post</h1>

        <div className="card p-3 my-3">
          <form onSubmit={ handleFormSubmit }>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input name="title" type="text" className="form-control" id="title" onChange={ handleFormChange } />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">Blog Content</label>
              <textarea name="body" className="form-control" id="body" rows="5" onChange={ handleFormChange }></textarea>
            </div>
            <button type="submit" className="btn btn-primary float-end">Simpan Data</button>
          </form>
        </div>

        {/* Alert (Dijalankan ketika data dihapus) */}
        {
          message ? ( <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{ message }</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> ) : ''
        }
        {/* Dijalankan pada saat pertama kali data di load */}
        {
          loading === false ? <p><i>Data Loading</i></p> : ''
        }

        <div className="card-post">
          <div className="row justify-content-center">
            {
              posts.map((post) => {
                return <PostCardComponent 
                  key={ post.id } 
                  // title={ post.title }
                  // body={ post.body }
                  data={ post }
                  removePost={ handleRemovePost }
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