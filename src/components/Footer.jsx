import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onNavigateSection }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#18181A] text-[#EDEBE4] border-t border-[#2A2A2E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#2C2C30]">
          
          {/* Brand Manifesto & Newsletter */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl tracking-tight font-bold text-white uppercase">
              ATELIER NOIR
            </h3>
            <p className="text-xs text-[#A09D94] max-w-sm leading-relaxed font-light">
              Architectural clothing tailored in Portugal and Italy from certified natural textiles. Designed for permanent rotation and generational durability.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 max-w-sm">
              <label className="block text-[11px] uppercase tracking-wider text-[#A09D94] mb-2 font-medium">
                The Atelier Gazette (Seasonal Dispatches)
              </label>
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#242426] border border-[#3A3A3E] text-xs px-3.5 py-2.5 text-white placeholder-[#777] rounded-l focus:outline-none focus:border-white w-full"
                />
                <button
                  type="submit"
                  className="bg-white text-black hover:bg-[#EAE8E0] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-r transition-colors flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-800" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1.5">
                  Welcome to the Atelier. A 10% welcome invitation has been sent to your inbox.
                </p>
              )}
            </form>
          </div>

          {/* Links Column 1: Collections */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Collections
            </p>
            <ul className="space-y-2 text-xs text-[#A09D94]">
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-white transition-colors">
                  Outerwear & Coats
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-white transition-colors">
                  Fisherman Knitwear
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-white transition-colors">
                  Pleated Trousers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-white transition-colors">
                  Silk & Flax Shirts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} className="hover:text-white transition-colors">
                  Italian Leather Goods
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: The House */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              The House
            </p>
            <ul className="space-y-2 text-xs text-[#A09D94]">
              <li>
                <button onClick={() => onNavigateSection('lookbook')} className="hover:text-white transition-colors">
                  Seasonal Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('sustainability')} className="hover:text-white transition-colors">
                  Slow Craft Manifesto
                </button>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Textile Provenance</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Artisanal Guilds</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Lifetime Repair Desk</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Customer Care & Atelier Flagships */}
          <div className="md:col-span-3 space-y-3 text-xs text-[#A09D94]">
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Flagship Ateliers
            </p>
            <div className="space-y-2 leading-relaxed">
              <p>
                <strong className="text-white font-medium">Paris:</strong> 14 Rue de Turenne, 75004<br />
                <strong className="text-white font-medium">New York:</strong> 82 Mercer St, Soho, NY 10012
              </p>
              <p className="pt-2 text-[11px] text-[#888]">
                Concierge: atelier@ateliernoir-archive.com<br />
                Hours: Mon–Sat 10:00–19:00 CET
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78756E] gap-4">
          <p>© {new Date().getFullYear()} ATELIER NOIR CO. All Rights Reserved. Made with slow discipline.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Carbon Neutral Verified</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Code of Ethics</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
