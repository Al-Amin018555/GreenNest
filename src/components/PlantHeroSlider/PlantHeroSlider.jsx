import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useLoaderData } from 'react-router';

const PlantHeroSlider = () => {

  const plants = useLoaderData();
  
  // Nature-inspired slogans based on categories
  const slogans = {
    "Air Purifier": "Breathe pure, live clean.",
    "Flowering": "Add a touch of natural elegance.",
    "Medicinal": "Nature's own healing touch.",
    "Decorative": "Transform your space into a jungle.",
    "Low Light": "Greenery for every dark corner."
  };

  return (
    <div className="w-full bg-base-100 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-7xl mx-auto rounded-4xl overflow-hidden border-2 border-base-300 shadow-xl"
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.plantId}>
            <div className="relative w-full min-h-125 flex flex-col lg:flex-row items-center bg-linear-to-br from-base-100 to-base-200 p-8 lg:p-20">
              
              {/* Left Content: Text */}
              <div className="flex-1 text-center lg:text-left z-10">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                  <span className="badge badge-success badge-outline gap-2 px-4 py-3 font-bold">
                     {plant.careLevel} Care
                  </span>
                  <span className="badge badge-secondary badge-outline px-4 py-3 font-bold">
                    {plant.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-base-content mb-4">
                  {plant.plantName}
                </h1>
                
                <p className="text-xl italic text-success font-medium mb-4">
                  "{slogans[plant.category] || "Nature's gift to you."}"
                </p>
                
                <p className="text-base-content/70 max-w-lg mb-8 text-lg">
                  {plant.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button className="btn btn-primary btn-lg rounded-full px-10">
                    Buy for ${plant.price}
                  </button>
                  <button className="btn btn-ghost btn-lg rounded-full border-base-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Right Content: Image with "Nature" floating effect */}
              <div className="flex-1 relative mt-10 lg:mt-0 flex justify-center items-center">
                {/* Decorative Circle Background */}
                <div className="absolute w-64 h-64 lg:w-96 lg:h-96 bg-success/10 rounded-full blur-3xl animate-pulse"></div>
                
                <img 
                  src={plant.image} 
                  alt={plant.plantName} 
                  className="relative z-10 w-full  max-w-100 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles to match your OKLCH colors */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--color-base-content);
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-primary) !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-next, .swiper-button-prev {
          color: var(--color-primary) !important;
          background: var(--color-base-100);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid var(--color-base-300);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 1.2rem;
          font-weight: bold;
        }
        @media (max-width: 640px) {
          .swiper-button-next, .swiper-button-prev { display: none; }
        }
      `}</style>
    </div>
  );
};

export default PlantHeroSlider;