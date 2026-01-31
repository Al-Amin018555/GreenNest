const GreenExpert = ({ expert }) => {
    const { image, name, specialization } = expert;
    return (
        <div className="my-4 lg:my-10">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="h-54 w-full object-cover rounded-lg p-2"
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title textarea-xl">{name}</h2>
                    <p className="text-lg text-gray-700">Specialization: {specialization}</p>
                </div>
            </div>
        </div>
    );
};

export default GreenExpert;