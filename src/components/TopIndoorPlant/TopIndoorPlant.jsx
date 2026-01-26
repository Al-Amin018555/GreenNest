const   TopIndoorPlant = ({ plant }) => {
    const { plantName, image, price, rating } = plant;
    return (
        <div className="my-4 lg:my-10">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="max-h-50 max-w-50 w-full object-contain rounded-lg p-2"
                        src={image}
                        alt={plantName} />      
                </figure>
                <div className="card-body">
                    <h2 className="card-title textarea-xl">{plantName}</h2>
                    <p className="text-lg text-gray-700">Price: ${price}</p>
                    <p className="text-lg text-gray-700">Rating: {rating}</p>
                    <div className="border w-full mt-2">
                        <button className="btn btn-primary w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopIndoorPlant;