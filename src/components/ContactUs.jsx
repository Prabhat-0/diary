import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const initialValues = { name: "", email: "", message: "" };

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  else if (values.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";

  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
};

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

const Field = ({ label, id, error, children }) => (
  <motion.div variants={item}>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-200">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          key={error}
          id={`${id}-error`}
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

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const errors = validate(values);
  const showError = (field) => (touched[field] ? errors[field] : undefined);

  const handleChange = (e) => {
    setSent(false);
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) return;

    // TODO: send `values` to your backend / email service here
    console.log("Form submitted:", values);

    setSent(true);
    setValues(initialValues);
    setTouched({});
  };

  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": !!showError(field),
    "aria-describedby": showError(field) ? `${field}-error` : undefined,
    className: inputClass(showError(field)),
  });

  return (
    <section className="flex min-h-auto w-full flex-col items-center bg-slate-900 px-6 pb-15 pt-20 text-white md:px-12">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex w-full max-w-2xl flex-col items-center gap-5 text-center"
      >
        <motion.h1 variants={item} className="text-4xl font-bold md:text-5xl">
          Contact <span className="text-amber-400">Us</span>
        </motion.h1>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
          className="flex items-center justify-center gap-2 rounded-2xl border border-amber-300 px-6 py-3 transition-shadow duration-150 hover:shadow-sm hover:shadow-amber-200"
        >
          <FaEnvelope />
          <p className="text-xl">Get in touch</p>
        </motion.div>
      </motion.div>

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
          <Field label="Name" id="name" error={showError("name")}>
            <input type="text" placeholder="Your name" {...fieldProps("name")} />
          </Field>

          <Field label="Email" id="email" error={showError("email")}>
            <input
              type="email"
              placeholder="you@example.com"
              {...fieldProps("email")}
            />
          </Field>
        </div>

        <Field label="Message" id="message" error={showError("message")}>
          <textarea
            rows={5}
            placeholder="How can we help you?"
            {...fieldProps("message")}
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

export default Contact;