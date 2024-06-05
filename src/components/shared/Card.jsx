function Card({CardItem}) {
    const {name, thumbnail, author, description} =CardItem
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="CardItems"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
