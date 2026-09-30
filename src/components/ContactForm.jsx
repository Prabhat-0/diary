import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputClass = (error) =>
  `w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 focus:border-amber-400 ${
    error ? "border-red-400" : "border-white/20"
  }`;

// Label + input + animated error message
const Field = ({ label, error, children }) => (
  <motion.div variants={item}>
    <label className="mb-2 block text-sm font-medium text-gray-200">{label}</label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          key={error}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const ContactForm = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  {/** handling the input changes  */}
  const handleChange=(e)=>{
      const{name,value}=e.target;
      setFields(prev=>({...prev,[name]:value}));
      setErrors(prev=>({...prev,[name]:undefined}));
      setSent(false);
  }
  {/** handling the submit of the form */}
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Name: required, more than 2 characters
    if (!fields.name.trim()) newErrors.name = "Name is required.";
    else if (fields.name.trim().length <= 2)
      newErrors.name = "Name must be more than 2 characters.";

    // Email: required, must match pattern
    if (!fields.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      newErrors.email = "Enter a valid email address.";

    // Message: required, at least 10 characters
    if (!fields.message.trim()) newErrors.message = "Message is required.";
    else if (fields.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; // stop if any error

    // TODO: send { name, email, message } to your backend / email service
    console.log("Form submitted:", { name:fields.name, email:fields.email, message:fields.message });

    setFields({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(()=>{
      setSent(false);
    },2000)
   
  };



  return (
    <section className="flex min-h-auto w-full flex-col items-center bg-slate-900 px-6 pb-15 pt-20 text-white md:px-12">
      
      {/* Header */}
      <SectionHeading 
      flex="flex flex-col-reverse gap-5"
      element={<FaEnvelope 
      className="text-amber-300 group-hover:translate-x-1" />} elementData="Get in touch" heading="Contact " highlightedHeading="Us" className="flex-col-reverse"/>
      
      {/* Form: fields fade up one after another when it scrolls into view */}
      <motion.form
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        onSubmit={handleSubmit}
        noValidate
        className="mt-10 w-full max-w-4xl space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 text-left backdrop-blur-xl md:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" error={errors.name}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={fields.name}
              onChange={handleChange}
              className={inputClass(errors.name)}
            />
          </Field>

          <Field label="Email" error={errors.email}>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              className={inputClass(errors.email)}
            />
          </Field>
        </div>

        <Field label="Message" error={errors.message}>
          <textarea
            rows={5}
            name="message"
            placeholder="How can we help you?"
            value={fields.message}
            onChange={handleChange}
            className={inputClass(errors.message)}
          />
        </Field>

        <motion.button
          type="submit"
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition-[background-color,box-shadow] duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/30"
        >
          <FaPaperPlane /> Send Message
        </motion.button>

        <AnimatePresence>
          {sent && (
            <motion.p
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-2 text-sm text-green-400"
            >
              <FaCheckCircle /> Thanks! Your message has been sent.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
};

export default ContactForm;