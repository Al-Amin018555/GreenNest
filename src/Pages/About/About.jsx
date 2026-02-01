const About = () => {
    return (
        <div className="my-4 min-h-[calc(100vh-288px)] max-w-9/12 mx-auto">

            <h2 className="text-3xl font-semibold text-[#144100] text-center mb-4">About</h2>
            <div className="flex justify-center">
                <figure className="hover-gallery max-w-9/12 max-h-75 object-cover">
                    <img src="https://i.ibb.co.com/0jQL1dFX/about1.jpg" />

                    <img src="https://i.ibb.co.com/XZg68trq/abt2.jpg" />

                    <img src="https://i.ibb.co.com/7Nb3h0xK/about3.jpg" />

                    <img src="https://i.ibb.co.com/3y5LkkHz/about4.jpg" />
                </figure>
            </div>

            <p className="my-4 text-justify textarea-lg md:text-xl">GreenNest – Indoor Plant Care & Store is a modern online platform dedicated to bringing greenery into everyday living. We believe that plants are more than decoration—they improve well-being, enhance indoor spaces, and create a calming environment. GreenNest is built to help people discover, care for, and enjoy indoor plants with confidence and ease.</p>
            <div className="text-justify my-4">
                <h2 className="text-3xl font-semibold text-[#144100]">What We Offer</h2>

                <p className="my-4 textarea-lg md:text-xl">At GreenNest, we provide a carefully curated selection of indoor plants along with detailed information to help users make informed decisions. Our platform offers:</p>
                <ul className="space-y-2 text-[#609349] font-semibold">
                    <li>1. A wide variety of indoor plants for homes and offices</li>
                    <li>  Detailed plant descriptions with pricing, ratings, and availability</li>
                    <li>2. Expert plant care guidance including watering, sunlight, and maintenance tips</li>
                    <li>3. A secure and user-friendly shopping experience</li>
                    <li>4. Personalized access through user authentication</li>
                    <li>5. Everything is designed to ensure a smooth and enjoyable experience from browsing to plant care.</li>
                </ul>






            </div>
        </div>
    );
};

export default About;