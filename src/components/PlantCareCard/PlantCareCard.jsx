const PlantCareCard = ({ plant }) => {
    const {title, description, extraTip, image } = plant;
    return (
        <div className="my-4 lg:my-10">
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
                <figure className="shrink-0">
                    <img 
                        className="w-full h-48 object-cover rounded-lg p-2"
                        src={image}
                        alt={title} 
                    />
                </figure>
                <div className="card-body flex flex-col grow">
                    <h2 className="card-title text-xl line-clamp-2">{title}</h2>
                    <p className="text-base text-gray-700 text-justify grow line-clamp-4">{description}</p>
                    {extraTip && <p className="text-sm text-gray-600 mt-2">💡 {extraTip}</p>}
                </div>
            </div>
        </div>
    );
};

export default PlantCareCard;