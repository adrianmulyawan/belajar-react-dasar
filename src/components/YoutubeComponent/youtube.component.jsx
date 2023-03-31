import './youtube.component.css';

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="image-thumb">
        <img src={ props.imageThumb } alt="img-thumbnail" />
        <p className="time">{ props.time || '17:00'}</p>
      </div>
      <p className="title">
        { props.title || 'Ini Adalah Default Title Video Youtube' }
      </p>
      <p className="desc">
        { props.description || 'Ini Adalah Default Description' }
      </p>
    </div>
  )
};

export default YoutubeComponent