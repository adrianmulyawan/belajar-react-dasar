const PostCardComponent = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12 my-2">
        <div class="card">
          <img src="https://random.imagecdn.app/640/453" class="card-img-top" alt="banner-img" />
          <div class="card-body">
            <h5 class="card-title">
              { props.title }
            </h5>
            <p class="card-text">
              { props.subtitle }
            </p>
            <a href="/" class="btn btn-primary float-end">Show Detail</a>
          </div>
        </div>
      </div>
    </>
  )
};

export default PostCardComponent;