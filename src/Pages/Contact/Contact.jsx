import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic here
  };

  return (
    <div className="bg-[#f4f7f4] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
          <h1 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6">Let's Grow Together</h1>
          <p className="text-stone-500 font-light text-lg">
            Have questions about plant care, or need help choosing the perfect green companion? Our botanical experts are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Information Card */}
          <div className="lg:col-span-5 bg-emerald-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Abstract Background Leaf */}
            <div className="absolute top-[-10%] right-[-10%] opacity-10 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-800 p-3 rounded-2xl">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-emerald-50/80 font-light">123 Greenhouse Lane, Botanica District<br />Portland, OR 97201</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-800 p-3 rounded-2xl">
                    <Phone className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-emerald-50/80 font-light">+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-800 p-3 rounded-2xl">
                    <Mail className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-emerald-50/80 font-light">hello@leafandbloom.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-800 p-3 rounded-2xl">
                    <Clock className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">Nursery Hours</p>
                    <p className="text-emerald-50/80 font-light">Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-12 border-t border-emerald-800 flex gap-6">
              <a href="#" className="hover:text-emerald-300 transition-colors"><Instagram size={20}/></a>
              <a href="#" className="hover:text-emerald-300 transition-colors"><Facebook size={20}/></a>
              <a href="#" className="hover:text-emerald-300 transition-colors"><Twitter size={20}/></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-emerald-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#f9fbf9] border border-emerald-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-700 placeholder:text-stone-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#f9fbf9] border border-emerald-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-700 placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Topic</label>
                <select className="w-full bg-[#f9fbf9] border border-emerald-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-700">
                  <option>General Inquiry</option>
                  <option>Plant Care Advice</option>
                  <option>Wholesale/Business</option>
                  <option>Order Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your plant journey..."
                  className="w-full bg-[#f9fbf9] border border-emerald-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-stone-700 placeholder:text-stone-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Aesthetic Quote */}
        <div className="mt-20 text-center">
            <p className="font-serif italic text-emerald-900/40 text-2xl">
              "To plant a garden is to believe in tomorrow."
            </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Plus+Jakarta+Sans:wght@300;400;700&display=swap');
        
        h1, h2, h3, .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body, input, textarea, select, button {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Contact;