const PostCardComponent = (props) => {
  const { data, removePost, updatePost } = props;

  // console.info(data, 'ini data');
  
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12 my-2" key={ data.id }>
        <div className="card">
          <img src="https://random.imagecdn.app/640/453" className="card-img-top" alt="banner-img" />
          <div className="card-body">
            <h5 className="card-title">
              { data.title }
            </h5>
            <p className="text-muted">
              Author: Pablo
            </p>
            <p className="card-text">
              { data.body }
            </p>
            <div className="button">
              <button className="badge bg-danger text-decoration-none px-4 py-2 float-end" onClick={ () => removePost(data.id) }>
                Delete
              </button>
              <button className="badge bg-success text-decoration-none px-4 py-2 mx-2 float-end" onClick={ () => updatePost(data) }>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PostCardComponent;