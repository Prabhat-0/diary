# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


//https://images.unsplash.com/photo-1624375414270-def180a92462?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D


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
    <section className="relative min-h-screen overflow-hidden bg-slate-900 px-6 pb-24 pt-32 text-white md:px-12">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-300"
          >
            <FaPlane /> What we offer
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Our <span className="text-amber-400">Services</span>
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-gray-300">
            Everything you need for a smooth, memorable trip, all in one place.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={item}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.25)]"
              >
                {/* Image */}
                <div className="relative">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  </div>
                  <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-xl text-slate-900 shadow-lg transition-transform duration-300 group-hover:rotate-6">
                    <Icon />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{s.text}</p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-200">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <FaCheckCircle className="shrink-0 text-amber-400" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <NavLink
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-medium text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Learn more
                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </NavLink>
                </div>
              </motion.article>
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
      </div>
    </section>
  );
};

export default Services;