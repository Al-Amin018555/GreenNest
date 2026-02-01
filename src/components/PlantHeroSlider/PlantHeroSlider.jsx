
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useLoaderData } from 'react-router';

const PlantHeroSlider = () => {
  const { plants } = useLoaderData();

  // Curated high-quality hosted images to ensure the vibe is perfect
  const premiumStock = [
    "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200",
    "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=1200",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d445?q=80&w=1200"
  ];

  return (
    <div className="w-full bg-[#f4f7f4] py-6 md:py-12 lg:py-20 px-4">
      {/* 9/12 Container with overflow fix */}
      <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto overflow-visible">
        
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 4000,
            speed: 1200,
            arrows: true,
            pagination: true,
            gap: '2rem',
            breakpoints: {
              1024: { arrows: false }, // Touch focused for tablets/mobile
            }
          }}
        >
          {plants.map((plant, index) => (
            <SplideSlide key={plant.plantId}>
              {/* Main Card: Fixed extra edge issue with rounded-3xl + overflow-hidden */}
              <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,40,0,0.12)] border border-green-100/50">
                
                {/* Left: Image Section (Top on mobile) */}
                <div className="w-full lg:w-1/2 h-[280px] sm:h-[400px] lg:h-[600px] relative">
                  <img
                    src={plant.image || premiumStock[index % 4]}
                    alt={plant.plantName}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle leaf overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] md:text-xs font-bold text-emerald-900 uppercase tracking-widest shadow-sm">
                      🌿 {plant.category}
                    </span>
                  </div>
                </div>

                {/* Right: Content Section */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  {/* Decorative faint background leaf (Optional) */}
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                  </div>

                  <div className="relative z-10 space-y-4 md:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-[2px] w-8 bg-emerald-200"></div>
                      <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">
                        Indoor Care Level: {plant.careLevel}
                      </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-emerald-950 leading-[1.1]">
                      {plant.plantName}
                    </h2>

                    <p className="text-stone-500 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
                      {plant.description}
                    </p>

                    <div className="flex items-center gap-8 pt-4 lg:pt-8">
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest mb-1">Pricing</p>
                        <p className="text-3xl md:text-4xl font-serif text-emerald-900">${plant.price}</p>
                      </div>
                      <div className="w-[1px] h-12 bg-stone-100"></div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase font-bold tracking-widest mb-1">Stock</p>
                        <p className="text-xl md:text-2xl text-stone-700 font-light">{plant.availableStock} <span className="text-sm">left</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(plant.rating) ? "opacity-100" : "opacity-30"}>★</span>
                      ))}
                      <span className="text-stone-400 text-xs font-bold ml-2">({plant.rating})</span>
                    </div>
                  </div>
                </div>

              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Plus+Jakarta+Sans:wght@300;400;700&display=swap');

        .font-serif { font-family: 'Cormorant Garamond', serif; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* Smooth Pagination */
        .splide__pagination {
          bottom: -40px !important;
          gap: 8px;
        }
        .splide__pagination__page {
          width: 8px !important;
          height: 8px !important;
          background: #cbd5c0 !important;
          border-radius: 50% !important;
          transition: all 0.4s ease;
          opacity: 1 !important;
        }
        .splide__pagination__page.is-active {
          background: #064e3b !important;
          transform: scale(1.5);
          width: 24px !important;
          border-radius: 10px !important;
        }

        /* Elegant Navigation Arrows */
        .splide__arrow {
          background: white !important;
          width: 50px !important;
          height: 50px !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06) !important;
          transition: all 0.3s ease !important;
        }
        .splide__arrow:hover {
          background: #064e3b !important;
          color: white !important;
        }
        .splide__arrow--prev { left: -25px !important; }
        .splide__arrow--next { right: -25px !important; }

        /* Animation when slide becomes active */
        .is-active h2 {
          animation: fadeUp 1s ease forwards;
        }
        .is-active p {
          animation: fadeUp 1.2s ease forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PlantHeroSlider;
