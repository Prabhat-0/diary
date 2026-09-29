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

const destinations = [
  {
    name: "Santorini",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Kyoto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsziOjuYgMAU52HzDYNSH2EYvnslMu8cwr9Zmg5flosHnO00Y3rpYCuO3&s=10",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop",
  },
];

const travelers = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
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
          relative z-10 order-1 rounded-b-4xl bg-slate-900 px-6 pb-14 pt-28
          shadow-[0_25px_40px_-10px_rgba(0,0,0,0.6)]
          md:absolute md:left-8 md:top-0 md:flex md:h-full md:w-100
          md:flex-col md:justify-center md:rounded-none md:border-x
          md:border-white/15 md:bg-white/10 md:px-8 md:py-0 md:shadow-none
          md:backdrop-blur-xl
          lg:left-12 lg:w-135 lg:px-10
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
          className="mt-5 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl"
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
          <Button value="Contact Us" path="/contact" />
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
          className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/20 pt-6 lg:gap-x-8"
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

        {/* Top right: travelers pill (large screens only) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="absolute right-12 top-28 hidden items-center gap-4 rounded-full border border-white/20 bg-white/10 py-2 pl-2 pr-6 backdrop-blur-xl lg:flex"
        >
          <div className="flex -space-x-3">
            {travelers.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-900"
              />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold">Join 15k+ travelers</p>
            <p className="flex items-center gap-1 text-xs text-gray-200">
              <FaStar className="text-amber-400" /> 4.9 average rating
            </p>
          </div>
        </motion.div>

        {/* Bottom right: destinations + trending card */}
        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 md:inset-x-auto md:bottom-8 md:right-8 md:items-end lg:bottom-10 lg:right-12">
          {/* Popular destinations (extra-large screens only) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="hidden gap-3 xl:flex"
          >
            {destinations.map((d) => (
              <div
                key={d.name}
                className="group relative h-28 w-36 overflow-hidden rounded-2xl border border-white/20"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-2 left-3 flex items-center gap-1 text-sm font-semibold">
                  <FaMapMarkerAlt className="text-xs text-amber-400" /> {d.name}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Featured destination card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl md:w-64 lg:w-72"
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
      </div>
    </section>
  );
};

export default Hero;