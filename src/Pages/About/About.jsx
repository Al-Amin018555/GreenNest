import React from 'react';
import { Leaf, ShieldCheck, Sun, ShoppingCart, UserCheck, Sprout } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#fcfdfc] py-12 px-4 overflow-hidden">
      <div className="max-w-[95%] lg:max-w-[75%] mx-auto">
        
        {/* 1. Header Section */}
        <div className="text-center mb-16">
         
          <h1 className="text-5xl md:text-7xl font-serif text-emerald-950 mb-8">GreenNest</h1>
          <p className="max-w-3xl mx-auto text-stone-500 text-lg md:text-xl font-light leading-relaxed">
            A modern online platform dedicated to bringing greenery into everyday living. We believe that plants are more than decoration—they are companions that improve well-being and create a calming environment.
          </p>
        </div>

        {/* 2. Visual Staggered Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-24">
          <div className="space-y-4">
            <img src="https://i.ibb.co.com/0jQL1dFX/about1.jpg" className="w-full h-48 md:h-80 object-cover rounded-[2rem] shadow-md border-4 border-white" alt="Plant 1" />
          </div>
          <div className="mt-8 space-y-4">
            <img src="https://i.ibb.co.com/XZg68trq/abt2.jpg" className="w-full h-48 md:h-80 object-cover rounded-[2rem] shadow-md border-4 border-white" alt="Plant 2" />
          </div>
          <div className="space-y-4">
            <img src="https://i.ibb.co.com/7Nb3h0xK/about3.jpg" className="w-full h-48 md:h-80 object-cover rounded-[2rem] shadow-md border-4 border-white" alt="Plant 3" />
          </div>
          <div className="mt-8 space-y-4">
            <img src="https://i.ibb.co.com/3y5LkkHz/about4.jpg" className="w-full h-48 md:h-80 object-cover rounded-[2rem] shadow-md border-4 border-white" alt="Plant 4" />
          </div>
        </div>

        {/* 3. "What We Offer" - HIGH VISIBILITY SECTION */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-4">What We Offer</h2>
              <p className="text-emerald-700/70 text-lg">Everything we do is designed to ensure a smooth and enjoyable experience from browsing to long-term plant care.</p>
            </div>
            <div className="hidden md:block h-[1px] flex-grow mx-10 bg-emerald-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-[0_15px_40px_-15px_rgba(0,50,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Curated Selection</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                A wide variety of indoor plants for homes and offices, each with detailed descriptions, transparent pricing, and real-time availability.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-emerald-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/20 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-800 text-emerald-200 rounded-2xl flex items-center justify-center mb-6">
                <Sun size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Care Guidance</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Unlock specialized knowledge for every plant. We provide watering schedules, sunlight requirements, and maintenance tips to help your plants thrive.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-[0_15px_40px_-15px_rgba(0,50,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart size={28} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Secure Shopping</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                A seamless, user-friendly checkout experience. Browse with ease and purchase with confidence through our secure encryption.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-[0_15px_40px_-15px_rgba(0,50,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Personalized Access</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Create your own green profile. Save your favorite plants, track your plant care history, and enjoy a personalized browsing experience.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-[0_15px_40px_-15px_rgba(0,50,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                <Sprout size={28} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Modern Greenery</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Designed to help you discover, care for, and enjoy indoor plants with confidence. We turn plant parents into plant experts.
              </p>
            </div>

            {/* Feature 6 - Quote Card */}
            <div className="p-8 flex items-center justify-center italic text-emerald-900/30 font-serif text-2xl text-center">
              "To plant a garden is to believe in tomorrow."
            </div>
          </div>
        </section>

       
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');
        
        .font-serif {
          font-family: 'DM Serif Display', serif;
        }
        
        body, div {
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.01em;
        }

        /* Responsive Fix for Gallery Staggering on Mobile */
        @media (max-width: 768px) {
          .mt-8 { margin-top: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default About;