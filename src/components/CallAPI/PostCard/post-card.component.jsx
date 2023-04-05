const PostCardComponent = (props) => {
  const { keygen, title, body, author } = props;
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12 my-2" key={ keygen }>
        <div className="card">
          <img src="https://random.imagecdn.app/640/453" className="card-img-top" alt="banner-img" />
          <div className="card-body">
            <h5 className="card-title">
              { title }
            </h5>
            <p className="text-muted">
              Author: Pablo
            </p>
            <p className="card-text">
              { body }
            </p>
            <a href="/" className="btn btn-primary float-end">Show Detail</a>
          </div>
        </div>
      </div>
    </>
  )
};

export default PostCardComponent;