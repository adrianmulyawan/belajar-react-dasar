import PostCardComponent from "../PostCard/post-card.component";

const BlogPostComponent = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <h1>Blog Post</h1>
        <div className="card-post">
        <div className="row justify-content-center">
          <PostCardComponent title='Title 1' subtitle='Subtitle 1' />
          <PostCardComponent title='Title 1' subtitle='Subtitle 1' />
          <PostCardComponent title='Title 1' subtitle='Subtitle 1' />
        </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostComponent;