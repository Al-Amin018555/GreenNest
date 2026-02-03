const PlantCard = ({ plant }) => {
    const { plantName, category, price, rating, availableStock, description, image } = plant;
    
    return (
        <div className="h-full">
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
                {/* Image Container - Fixed Height */}
                <figure className="h-56 overflow-hidden bg-gray-200">
                    <img
                        src={image}
                        alt={plantName}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400?text=" + plantName;
                        }}
                    />
                </figure>

                {/* Card Body - Flexible */}
                <div className="card-body flex flex-col grow p-4">
                    {/* Plant Name */}
                    <h2 className="card-title text-lg line-clamp-2 text-green-700">
                        {plantName}
                    </h2>

                    {/* Category Badge */}
                    <div className="flex gap-2 mb-2">
                        <span className="badge badge-sm badge-outline badge-success">
                            {category}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2 grow mb-3">
                        {description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-yellow-500 font-bold">⭐ {rating}</span>
                        <span className="text-xs text-gray-500">(5.0)</span>
                    </div>

                    {/* Stock Info */}
                    <div className="mb-3">
                        <p className="text-xs text-gray-500">
                            Stock: <span className="font-bold text-green-600">{availableStock}</span>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="divider my-2"></div>

                    {/* Price - Bottom */}
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-green-600">
                            ${price}
                        </p>
                        <p className="text-xs text-gray-500">Per Plant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;