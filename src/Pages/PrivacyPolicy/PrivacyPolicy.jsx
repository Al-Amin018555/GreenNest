import React from 'react';
import { ShieldCheck, Eye, Lock, Globe, FileText, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "October 24, 2023";

  const sections = [
    { id: "collection", title: "Information Collection", icon: <Eye size={20} /> },
    { id: "usage", title: "How We Use Data", icon: <FileText size={20} /> },
    { id: "security", title: "Data Security", icon: <Lock size={20} /> },
    { id: "cookies", title: "Cookie Policy", icon: <Globe size={20} /> },
  ];

  return (
    <div className="bg-[#fdfdfb] min-h-screen font-sans text-stone-700">
      {/* Hero Header */}
      <div className="bg-emerald-950 py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-800/50 text-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-700">
            <ShieldCheck size={14} />
            Secure & Private
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Privacy Policy</h1>
          <p className="text-emerald-100/60 font-light italic">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Sidebar Navigation (Hidden on Mobile) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-8 h-fit">
          <nav className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-4 ml-4">Contents</p>
            {sections.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all group"
              >
                <span className="text-sm font-medium">{item.title}</span>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </nav>
        </aside>

        {/* Policy Content */}
        <main className="lg:col-span-9 space-y-16">
          
          <section className="prose prose-stone max-w-none">
            <p className="text-lg leading-relaxed text-stone-600">
              At <span className="text-emerald-800 font-semibold italic font-serif">Indoor Plant Care & Store</span>, we treat your personal information with the same care we give our rarest orchids. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our store.
            </p>
          </section>

          {/* Section: Collection */}
          <section id="collection" className="scroll-mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-serif text-emerald-950">Information We Collect</h2>
            </div>
            <div className="bg-white border border-stone-100 p-8 rounded-[2rem] shadow-sm space-y-4">
              <p>When you visit the Site, we automatically collect certain information about your device, including:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-500 font-light">
                <li>Web browser details, IP address, and time zone.</li>
                <li>Individual web pages or plant products that you view.</li>
                <li>What terms referred you to the Site.</li>
              </ul>
              <p className="pt-4 italic text-emerald-700/70 border-t border-emerald-50 text-sm">
                We refer to this automatically-collected information as “Device Information.”
              </p>
            </div>
          </section>

          {/* Section: Usage */}
          <section id="usage" className="scroll-mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-serif text-emerald-950">How We Use Your Data</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#f9fbf9] rounded-[2rem] border border-emerald-50">
                <h4 className="font-bold text-emerald-900 mb-2">Order Fulfillment</h4>
                <p className="text-sm text-stone-500 font-light">We use Order Information to arrange shipping, provide invoices, and communicate with you about your plant's journey.</p>
              </div>
              <div className="p-6 bg-[#f9fbf9] rounded-[2rem] border border-emerald-50">
                <h4 className="font-bold text-emerald-900 mb-2">Plant Care Advice</h4>
                <p className="text-sm text-stone-500 font-light">When in line with the preferences you have shared, we provide you with information or advertising relating to our botanical products.</p>
              </div>
            </div>
          </section>

          {/* Section: Security */}
          <section id="security" className="scroll-mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                <Lock size={24} />
              </div>
              <h2 className="text-3xl font-serif text-emerald-950">Data Security</h2>
            </div>
            <div className="bg-emerald-950 text-emerald-50 p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-lg font-light leading-relaxed mb-6">
                    We maintain administrative, technical, and physical safeguards designed to protect the personal information you provide against accidental, unlawful, or unauthorized destruction, loss, alteration, access, or use.
                  </p>
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-xs font-mono">
                    Encryption: AES-256 Bit SSL Standard
                  </div>
               </div>
               <div className="absolute bottom-[-20%] right-[-5%] opacity-10 pointer-events-none">
                  <ShieldCheck size={200} />
               </div>
            </div>
          </section>

          {/* Footer Contact Reminder */}
          <div className="pt-12 border-t border-stone-100 text-center">
            <p className="text-stone-400 text-sm mb-4">Have questions about your privacy?</p>
            <a 
              href="/contact" 
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-emerald-100"
            >
              Contact Our Privacy Team
            </a>
          </div>

        </main>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Plus+Jakarta+Sans:wght@300;400;700&display=swap');
        
        h1, h2, h3, .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body, main {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;