import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles, Palette } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string | null;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ event = 'both' }) => {
  const isHomecoming = event === 'homecoming';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-lavender/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[11px] sm:text-xs font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-plum/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
                <>A Celebration of <br /><span className="italic font-light text-brand-plum">Tradition & Love</span></>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
                We are honored to invite you to witness our union as we exchange vows surrounded by the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-lavender/30 pl-10 sm:pl-12 py-4">

              {/* Date */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 group-hover:text-brand-plum transition-colors duration-500">
                    Date: January 20, 2027
                  </h4>
                </div>
              </div>

              {/* Church Ceremony */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3 group-hover:text-brand-plum transition-colors duration-500">
                    Church Ceremony
                  </h4>
                  <div className="space-y-1.5 text-stone-500/90 font-serif text-base sm:text-lg">
                    <p>
                      <span className="font-semibold text-stone-700">Time:</span> 08.00 AM
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-semibold text-stone-700">Venue:</span> St. Michael's Church,<br className="hidden sm:block" /> Yatiyana, Minuwangoda
                    </p>
                  </div>
                </div>
              </div>




            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-[400px] relative"
          >
            {/* Elegant Arched Frame */}
            <div className="aspect-[3/4] w-full rounded-t-[200px] rounded-b-2xl overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(201,169,110,0.25)] relative z-10 bg-white">
              <img
                src="/cand.jpg"
                alt="Celebration of Love"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-plum/20 rounded-t-[200px] rounded-b-2xl pointer-events-none"></div>
            </div>
            
            {/* Decorative Offset Border */}
            <div className="absolute -top-5 -right-5 w-full h-full border-[1.5px] border-brand-plum/30 rounded-t-[200px] rounded-b-2xl z-0 pointer-events-none"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 -left-10 w-32 h-32 bg-brand-lavender/40 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-rose/40 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
