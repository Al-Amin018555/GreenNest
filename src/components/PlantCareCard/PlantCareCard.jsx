const PlantCareCard = ({ plant }) => {
    const { tipId, title, category, description, extraTip,image } = plant;
    return (
        <div className="my-4 lg:my-10">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="max-h-50 max-w-50 w-full rounded-lg p-2"
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title textarea-xl">{title}</h2>
                    <p className="text-lg text-gray-700 text-justify">{description}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default PlantCareCard;