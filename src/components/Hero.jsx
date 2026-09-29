import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaPlane, FaStar } from "react-icons/fa";
import Button from "./Button";

const bgImage =
  "https://images.unsplash.com/photo-1624375414270-def180a92462?q=80&w=2670&auto=format&fit=crop";

const stats = [
  { value: "120+", label: "Destinations" },
  { value: "15k+", label: "Happy travelers" },
  { value: "4.9", label: "Average rating" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-slate-900 text-white md:block">
      {/* Text panel: top card on mobile, glass panel on md+ */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative z-10 order-1 rounded-b-[2rem] bg-slate-900 px-6 pb-14 pt-28
          shadow-[0_25px_40px_-10px_rgba(0,0,0,0.6)]
          md:absolute md:left-12 md:top-0 md:flex md:h-full md:w-[460px]
          md:flex-col md:justify-center md:rounded-none md:border-x
          md:border-white/15 md:bg-white/10 md:px-10 md:py-0 md:shadow-none
          md:backdrop-blur-xl lg:w-[540px]
        "
      >
        <motion.span
          variants={item}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-300"
        >
          <FaPlane /> Your travel companion
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          Explore the world with{" "}
          <span className="text-amber-400">Travel Diary</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 max-w-md text-gray-300">
          Plan trips, discover places, and keep your best memories in one place.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-6"
        >   
        
          <Button value="Contact Us" path="/contact"/>
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-2 font-medium text-white/90 transition-colors hover:text-amber-400"
          >
            Our services
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex gap-8 border-t border-white/20 pt-6"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-amber-400">{s.value}</p>
              <p className="text-sm text-gray-300">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image: bottom on mobile (tucked under the panel), full background on md+ */}
      <div
        className="
          relative order-2 -mt-8 min-h-[50vh] flex-1 bg-cover bg-center bg-no-repeat
          md:absolute md:inset-0 md:mt-0 md:min-h-0
        "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.3))]" />

        {/* Featured destination card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl md:inset-x-auto md:bottom-10 md:right-12 md:w-72"
        >
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
            <FaMapMarkerAlt /> Trending this month
          </p>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Bali, Indonesia</h3>
            <span className="flex items-center gap-1 text-sm">
              <FaStar className="text-amber-400" /> 4.9
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-200">7 days · From $499</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;