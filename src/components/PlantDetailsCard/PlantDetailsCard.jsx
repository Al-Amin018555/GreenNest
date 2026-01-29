const PlantDetailsCard = ({ plant }) => {
    const { imageLarge, name, description, price, rating, stock } = plant;
    return (
        <div className="my-4 lg:my-2">
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img className="max-h-75 w-full object-cover"
                        src={imageLarge}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Stock: {stock}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default PlantDetailsCard;