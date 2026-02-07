const   TopIndoorPlant = ({ plant }) => {
    const { plantName, image, price, rating } = plant;
    return (
        <div className="my-4 lg:my-10">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="w-full h-54 object-cover rounded-lg p-2"
                        src={image}
                        alt={plantName} />      
                </figure>
                <div className="card-body">
                    <h2 className="card-title textarea-xl">{plantName}</h2>
                    <p className="text-lg text-gray-700">Price: ${price}</p>
                    <p className="text-lg text-gray-700">Rating: {rating}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default TopIndoorPlant;