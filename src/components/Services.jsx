import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaHotel,
  FaMapMarkedAlt,
  FaPlane,
  FaRoute,
} from "react-icons/fa";
import Button from "../components/Button";
import SectionHeading from "./SectionHeading";

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
  {
    title: "Guided Tour",
    icon: FaMapMarkedAlt,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    text: "Explore hidden gems with local experts who know every trail, story, and viewpoint.",
    features: ["Local expert guides", "Small groups", "Flexible schedules"],
  },
  {
    title: "Hotels Booking",
    icon: FaHotel,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    text: "From cozy stays to luxury resorts, we find places that fit your style and budget.",
    features: ["Handpicked stays", "Free cancellation", "Best price match"],
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
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, []);

  // scroll exactly one card (plus the gap) left or right
  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-slate-900 px-6 pb-12 pt-28 text-white sm:pt-32 md:min-h-screen md:px-12 md:pb-24">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* header */}
      <SectionHeading element={<FaPlane className="text-amber-300 group-hover:translate-x-1" />} elementData="What we offer" heading="Our" highlightedHeading="Services"/>


      {/* cards */}
      <div className="relative z-10 w-full max-w-6xl pt-10">
        <motion.div
          ref={scrollRef}
          onScroll={updateButtons}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="-mx-6 flex scroll-pl-6 snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:scroll-pl-0 md:snap-none md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={`${service.title}-${index}`}
                variants={item}
                className="group flex w-[85%] max-w-sm shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-amber-200/40 bg-slate-800/50 md:w-auto md:max-w-none md:shrink"
              >
                {/* image + overlay + icon badge */}
                <div className="relative h-52 overflow-hidden sm:h-56">
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
                <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                    to="/contactUs"
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

        {/* < > buttons (below md only) */}
        <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300 text-amber-300 transition-colors duration-200 hover:bg-amber-400 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-30"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300 text-amber-300 transition-colors duration-200 hover:bg-amber-400 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-30"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Bottom call to action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-12 flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl sm:p-10 md:mt-20"
      >
        <h2 className="w-full text-xl font-bold sm:text-2xl md:text-3xl">
          Ready to plan your next trip?
        </h2>
        <p className="w-full max-w-lg text-gray-300">
          Tell us where you want to go and we'll take care of the rest.
        </p>
        <Button value="Contact Us" path="/contactUs" />
      </motion.div>
    </section>
  );
};

export default Services;