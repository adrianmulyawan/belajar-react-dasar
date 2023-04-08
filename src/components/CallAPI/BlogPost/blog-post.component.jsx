import axios from "axios";
import PostCardComponent from "../PostCard/post-card.component";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const BlogPostComponent = () => {
  const [formPost, setFormPost] = useState({
    userId: 1,
    id: 101,
    title: '',
    body: ''
  });
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // > Menggunakan Axios
  // => Mendapatkan seluruh data
  const getDataPost = async () => {
    // > Sort data dari id terbesar -> terkecil
    const items = await axios.get('http://localhost:3004/posts?_sort=id&_order=desc');
    // console.info(items);
    const item = await items.data;
    // console.info(item);
    // console.info(item);
    setPosts(item);
    setLoading(true);
  }

  // > Hooks useEffect
  // => Akan dijalankan saat pertama kali halaman dirender
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      getDataPost();
      i++;
    }
  }, [i]);

  // > Method Hapus Data
  const removeDataPost = async (data) => {
    console.info(data, 'ini ID');
    await axios.delete(`http://localhost:3004/posts/${data}`);
    getDataPost();
    setMessage('Data Berhasil Dihapus');
  };
  
  // > Method Update Data
  // => Nangkap data yang akan diedit dan ubah state update = true
  const handleUpdatePost = async (data) => {
    console.info(data, 'ini data yang akan diupdate');

    // > update nilai 'formPost' menggunakan data yang akan diedit
    // => Saat tekan button edit makan nilainya akan diupdate
    // => Dengan nilai dari post tsb
    setFormPost(data);

    // > Update state update menjadi true
    setUpdate(true);
  };
  // => Proses update
  const updatePost = async () => {
    // > Update data
    await axios.put(`http://localhost:3004/posts/${formPost.id}`, formPost);

    // > Set Message dan setFormPost
    setMessage('Berhasil Mengupdate Data!');
    setFormPost({
      userId: 1,
      id: 101,
      title: '',
      body: ''
    });

    // > Set State Update = false
    setUpdate(false);

    // > tampilkan pemanggilan data post
    getDataPost();
  }

  // > Method Tambah Data 
  const addDataPost = async () => {
    try {
      // > Simpan data ke db
      await axios.post('http://localhost:3004/posts', formPost);

      // > Set Message dan setFormPost
      setMessage('Berhasil Menambahkan Data Baru!');
      setFormPost({
        userId: 1,
        id: 101,
        title: '',
        body: ''
      });

      // > tampilkan pemanggilan data post
      getDataPost();
    } catch (error) {
      alert(error);
    }
  }

  // > Method Handle Post (Insert New Data)
  // => Mengambil Nilai Dari Input
  const handleFormChange = (e) => {
    let timeStamp = '';

    // > Jika state update = false, baru bisa tambah id
    if (update === false) {
      // > Generate waktu sekarang dalam milisecond (untuk jadi id)
      timeStamp = new Date().getTime();
    }

    // > Update state formPost
    setFormPost((data) => {
      return {
        ...data,
        id: timeStamp || data.id,
        // e.target.name => refrences ke name input form
        // e.target.value => refrence ke nilai dari input formnya
        [e.target.name]: e.target.value
      }
    });
  }
  // => Handle Saat Form di Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.info(formPost);

    // > Cek apakah state update = true
    if (update === true) {
      // > Update Data
      updatePost();
    } else {
      // > Insert data
      addDataPost();
    }
  } 

  // > Method Handle Detail Post
  // => Method 'useNavigate()' kita instance ke variable navigate
  // => Dan akan mengarahkan user kehalaman detail blog
  const navigate = useNavigate();
  const handleDetailPost = (data) => {
    console.info(data, 'INI ID');

    navigate(`blog/detail/${data}`);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <h1>Blog Post</h1>

        {/* Form Tambah Data Post */}
        <div className="card p-3 my-3">
          <form onSubmit={ handleFormSubmit }>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input name="title" type="text" className="form-control" id="title" onChange={ handleFormChange } placeholder="Judul Post" value={ formPost ? formPost.title : '' } />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">Blog Content</label>
              <textarea name="body" className="form-control" id="body" rows="5" onChange={ handleFormChange } placeholder="Content Post" value={ formPost ? formPost.body : '' }></textarea>
            </div>
            <button type="submit" className="btn btn-primary float-end">
              {
                update === true ? 'Update Data' : 'Simpan Data'
              }
            </button>
          </form>
        </div>

        {/* Alert (Dijalankan ketika data dihapus) */}
        {
          message ? ( <div className="alert alert-primary alert-dismissible fade show" role="alert">
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
                  removePost={ removeDataPost }
                  updatePost={ handleUpdatePost }
                  detailPost={ handleDetailPost }
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