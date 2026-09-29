import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Our guided tour was the highlight of the trip. The local guide knew hidden viewpoints we would never have found on our own. Everything ran on time and felt effortless.",
    trip: "Guided Tours",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "They found us a much better flight fare than any booking site, and the airport pickup was waiting right on arrival. Support replied within minutes when our plans changed.",
    trip: "Flights & Transport",
  },
  {
    id: 3,
    name: "Emily Carter",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "The hotel they picked was stunning and well within our budget. Free cancellation saved us when we had to shift our dates. Highly recommended for stress-free stays.",
    trip: "Hotel Booking",
  },
  {
    id: 4,
    name: "Carlos Ramirez",
    location: "Madrid, Spain",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "I told them I love food and quiet places, and they built a perfect day-by-day plan. They even adjusted it twice without any fuss. It felt truly made for us.",
    trip: "Custom Itineraries",
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

const Testimonials = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900 px-6 pb-20 pt-20 text-white">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-5 text-center"
        >
          <motion.span
            variants={item}
            className="group flex items-center justify-center gap-2 rounded-2xl border border-amber-300 px-6 py-3 transition-shadow duration-150 hover:shadow-sm hover:shadow-amber-200"
          >
            <FaUserCircle className="text-amber-300 transition-transform duration-150 group-hover:-translate-x-1" />
            Our Clients
          </motion.span>
          <motion.span variants={item} className="text-4xl font-bold md:text-5xl">
            What our <span className="text-amber-400">Clients</span> say
          </motion.span>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 flex w-full max-w-3xl flex-col items-center justify-center gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="flex w-full overflow-hidden rounded-2xl border border-amber-300 bg-white/10 transition-all duration-150 ease-in hover:scale-105 hover:shadow-lg hover:shadow-amber-200/40"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-28 shrink-0 object-cover sm:w-40"
              />

              <div className="flex flex-col gap-2 p-4">
                <h2 className="text-2xl font-semibold">{testimonial.name}</h2>
                <p className="text-sm text-gray-300">{testimonial.text}</p>
                <span className="mt-auto flex items-center gap-2 text-sm text-gray-300">
                  <FaLocationDot className="text-amber-300" />
                  {testimonial.location}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;