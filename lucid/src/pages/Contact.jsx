import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaParking,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppBreadcrumbs } from "../components/layout";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    to: "",
    phone: "",
    subject: "",
    message: "",
    recaptcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.recaptcha) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        "https://lucid-server01.onrender.com/send-email",
        formData
      );
      toast.success(response.data.message || "Message sent successfully!");
      setFormData({
        name: "",
        to: "",
        phone: "",
        subject: "",
        message: "",
        recaptcha: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-page">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full py-10 about__section"
      >
        <div className="container mx-auto px-4 z-40 relative">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f7f7]"
          >
            Get In Touch
          </motion.h1>
          <AppBreadcrumbs />
        </div>
      </motion.header>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-40"
      >
        {/* Contact Header */}
        <motion.div
          variants={itemVariants}
          className="text-center my-12"
        >
          <p className="text-[#034a9a] font-bold mx-auto text-lg lg:text-2xl md:text-xl">
            Have questions about our products or services? Our team is ready to
            help you with expert advice and solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Contact Container */}
        <motion.section
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center gap-8 justify-between text-white my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-[#1482aa] to-white"
        >
          {/* Contact Info Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-full lg:w-1/2 p-6 sm:p-8 lg:p-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold mb-6 text-white"
            >
              Our Contact Information
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg leading-relaxed"
            >
              Whether you need technical support, product information, or want to
              discuss partnership opportunities, we're here to assist you.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Phone Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1482aa] p-4 rounded-full flex-shrink-0 mr-5">
                  <FaPhoneAlt className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+917402623998"
                    className="text-blue-600 hover:text-blue-800 text-sm lg:text-base transition-colors"
                  >
                    +91 74026 23998
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1482aa] p-4 rounded-full flex-shrink-0 mr-5">
                  <FaEnvelope className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:lucidpetrochemical@gmail.com"
                    className="text-blue-600 hover:text-blue-800 text-sm lg:text-base transition-colors"
                  >
                    lucidpetrochemical@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2 text-wrap">
                    Typically replies within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#1482aa] p-4 rounded-full flex-shrink-0 mr-5">
                  <FaMapMarkerAlt className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Headquarters
                  </h3>
                  <address className="not-italic text-gray-700 mb-2">
                    79/5 6 Muthaiyampalaiyam Road,
                    <br />
                    Kottathur Village Thuraiyur Taluk,
                    <br />
                    Thuraiyur, Srirangam, Tiruchirappalli-621004,
                    <br />
                    Tamil Nadu, India
                  </address>
                  <a
                    href="https://maps.google.com/?q=79/5+6+Muthaiyampalaiyam+Road,Kottathur+Village+Thuraiyur+Taluk,Tiruchirappalli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <h3 className="font-semibold text-lg mb-4 text-white">
                Connect With Us
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex space-x-4"
              >
                {[
                  { icon: FaLinkedin, url: "#" },
                  { icon: FaTwitter, url: "#" },
                  { icon: FaFacebook, url: "#" },
                  { icon: FaInstagram, url: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    href={social.url}
                    className="bg-white p-3 rounded-full shadow-sm text-[#034a9a] hover:bg-teal-100 transition-colors"
                    aria-label={`Follow us on ${social.icon.name.replace("Fa", "")}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-12 space-y-6 rounded-2xl shadow-lg"
            aria-labelledby="form-title"
          >
            <motion.h3
              id="form-title"
              className="text-2xl font-bold text-[#034a9a] mb-2"
            >
              Send us a message
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-6"
            >
              Fill out the form below and we'll get back to you as soon as
              possible.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-5"
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="to"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
                  placeholder="your.email@example.com"
                  value={formData.to}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-black focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Information">
                    Product Information
                  </option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-black focus:ring-[#034a9a] focus:border-[#034a9a] transition focus:outline-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ReCAPTCHA
                sitekey="6LcSsmorAAAAADUI1LduzQRI-pcwkRllJQki8sal"
                onChange={(token) => setFormData({ ...formData, recaptcha: token })}
                className="my-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className="h-4 w-4 text-[#034a9a] focus:ring-[#034a9a] border-gray-300 rounded"
                required
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the privacy policy and terms of service
              </label>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || !formData.recaptcha}
              className={`w-full bg-[#034a9a] hover:bg-[#034a9a]/90 text-white font-medium py-3 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#034a9a] focus:ring-offset-2 flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.section>

        {/* Map Section with Additional Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-12 mb-[4rem] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        >
          <div className="bg-[#034a9a] text-white p-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-2"
            >
              Visit Our Facility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              We welcome visitors by appointment. Contact us to schedule a tour
              of our manufacturing plant.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center"
              >
                <FaClock className="mr-2" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center"
              >
                <FaParking className="mr-2" />
                <span>Free parking available</span>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.9949326433643!2d78.6481752750468!3d11.113754889056306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA2JzQ5LjUiTiA3OMKwMzknMDIuNyJF!5e0!3m2!1sen!2sin!4v1753161636338!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucid Petro Chemical Location Map"
              className="border-t border-gray-200"
            ></iframe>
          </motion.div>
        </motion.section>
      </motion.section>

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default Contact;