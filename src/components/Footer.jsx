import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { value: "Home", path: "/" },
  { value: "Services", path: "/services" },
  { value: "Testimonials", path: "/testimonials" },
  { value: "Contact Us", path: "/contact" },
];

const services = [
  "Guided Tours",
  "Flights & Transport",
  "Hotel Booking",
  "Custom Itineraries",
];

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaTwitter, label: "Twitter", href: "https://x.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

const contact = [
  { icon: FaEnvelope, text: "hello@traveldiary.com" },
  { icon: FaPhoneAlt, text: "+1 234 567 890" },
  { icon: FaMapMarkerAlt, text: "123 Travel Street, Your City" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 pb-8 pt-16 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={item}>
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold">
              <FaPlane className="text-amber-400" />
              Travel <span className="text-amber-400">Diary</span>
            </NavLink>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Plan trips, discover places, and keep your best memories in one
              place.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors duration-200 hover:border-amber-400 hover:bg-amber-400 hover:text-slate-900"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="inline-block text-gray-400 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-amber-400"
                  >
                    {link.value}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <NavLink
                    to="/services"
                    className="inline-block text-gray-400 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-amber-400"
                  >
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {contact.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 shrink-0 text-amber-400" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Travel Diary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;