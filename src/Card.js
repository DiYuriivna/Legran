function Card(props) {
  return (
    <figure className="card">
      {" "}
      <div className="card__img-wrap">
        {" "}
        <img src={props.src} alt={props.caption} className="card__img" />
        <button className="card__addbtn">+</button>
      </div>
      <div className="card__caption-wrap">
        <figcaption className="card__caption">{props.caption}</figcaption>{" "}
        <span className="card__price">{props.price}</span>
      </div>
    </figure>
  );
}

export default Card;
