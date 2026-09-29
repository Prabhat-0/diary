import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHotel,
  FaMapMarkedAlt,
  FaPlane,
  FaRoute,
} from "react-icons/fa";
import Button from "../components/Button";

const services = [
  {
    title: "Guided Tours",
    icon: FaMapMarkedAlt,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    text: "Explore hidden gems with local experts who know every trail, story, and viewpoint.",
    features: ["Local expert guides", "Small groups", "Flexible schedules"],
  },
  {
    title: "Flights & Transport",
    icon: FaPlane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    text: "Get the best routes and fares, with airport pickups and local transfers handled for you.",
    features: ["Best fare deals", "Airport transfers", "24/7 support"],
  },
  {
    title: "Hotel Booking",
    icon: FaHotel,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    text: "From cozy stays to luxury resorts, we find places that fit your style and budget.",
    features: ["Handpicked stays", "Free cancellation", "Best price match"],
  },
  {
    title: "Custom Itineraries",
    icon: FaRoute,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    text: "Tell us what you love and we'll design a day-by-day plan made just for you.",
    features: ["Personalized plans", "Unlimited revisions", "Travel tips included"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-900 px-6 pb-24 pt-32 text-white md:px-12">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* header (unchanged) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-5 text-center"
      >
        <motion.span
          variants={item}
          className="group flex items-center justify-center gap-2 rounded-2xl border border-amber-300 px-6 py-3 transition-shadow duration-150 hover:shadow-sm hover:shadow-amber-200"
        >
          <FaPlane className="text-amber-300 group-hover:translate-x-1" /> What we offer
        </motion.span>
        <motion.span variants={item} className="text-4xl font-bold md:text-5xl">
          Our <span className="text-amber-400">Services</span>
        </motion.span>
      </motion.div>

      {/* cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={item}
              className="group flex flex-col overflow-hidden rounded-3xl border border-amber-200/40 bg-slate-800/50"
            >
              {/* image + overlay + icon badge */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-xl text-slate-900">
                  <Icon />
                </span>
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{service.text}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <FaCheckCircle className="shrink-0 text-amber-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Learn more
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 flex flex-col items-center gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 text-center backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to plan your next trip?
          </h2>
          <p className="max-w-lg text-gray-300">
            Tell us where you want to go and we'll take care of the rest.
          </p>
          <Button value="Contact Us" />
        </motion.div>
    </section>
  );
};
export default Services