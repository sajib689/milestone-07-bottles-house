const Bottle = ({bottle,handleLoadData}) => {
    const {title, image, price, rating, stock, tag, description,color, size} = bottle;
  return (
    <div className="card card-compact w-[300px] bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
          <button onClick={() =>handleLoadData(bottle)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
