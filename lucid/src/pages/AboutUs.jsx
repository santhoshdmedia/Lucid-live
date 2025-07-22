import React, { useEffect, useRef, useState } from "react";
import aboutVideo from "../assets/video/video_1.mp4";
import ownerImg from "../assets/owner.jpg";
import aboutImg from "../assets/employees/emp2.webp";
import { AppBreadcrumbs } from "../components/layout";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { FaCar, FaIndustry, FaBolt, FaCogs, FaHardHat } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { LucidLoader } from "../components/layout";
import { FaShip } from "react-icons/fa";
import Lab from "../assets/factory/fac6.webp";
import iso_9001 from "../assets/certificates/iso9001.png"
import iso_14001 from "../assets/certificates/iso140001.png"
import ohsas from "../assets/certificates/ohsas18.png"

const industries = [
  {
    name: "Automotive & Transport",
    icon: <FaCar />,
    description:
      "High-performance lubricants engineered for smoother rides, reduced wear, and extended engine life in cars, trucks, and fleets.",
  },
  {
    name: "Industrial Manufacturing",
    icon: <FaIndustry />,
    description:
      "Specialized industrial lubricants that minimize downtime, enhance efficiency, and protect heavy-duty machinery in harsh environments.",
  },
  {
    name: "Energy & Power Sector",
    icon: <FaBolt />,
    description:
      "Cutting-edge lubrication solutions for turbines, transformers, and power plants to ensure peak performance and reliability.",
  },
  {
    name: "Heavy Machinery & Engineering",
    icon: <FaCogs />,
    description:
      "Ultra-durable greases and oils designed for excavators, cranes, and mining equipment under extreme operating conditions.",
  },
  {
    name: "Construction Equipment",
    icon: <FaHardHat />,
    description:
      "Heavy-duty lubricants that withstand dust, moisture, and high loads to keep bulldozers, loaders, and cranes running smoothly.",
  },
  {
    name: "Marine & Offshore",
    icon: <FaShip />,
    description:
      "Corrosion-resistant marine lubricants for ships, offshore rigs, and port machinery, ensuring reliability in saltwater environments.",
  },
];
const progressItems = [
  { label: "Quality Control", value: 100 },
  { label: "Professional Team", value: 100 },
  { label: "Quality Machine", value: 100 },
];

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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutUs = () => {
  const progressRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = progressRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
            About Us
          </motion.h1>
          <AppBreadcrumbs />
        </div>
      </motion.header>

      {/* Lab Content Section */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 relative"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ">
          {/* Owner Image */}
          <motion.div variants={slideInFromLeft} className="w-full lg:w-1/2 sticky top-[100px]">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={Lab}
              alt="our Lab"
              className="object-cover w-full h-full rounded-xl drop-shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div variants={slideInFromRight} className="w-full lg:w-1/2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#034a9a] mb-4 text-center lg:text-left"
            >
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Lucid Petro Chemical
              </span>{" "}
              – Redefining Performance & Precision Since 2016
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2 indent-8 text-justify"
            >
              Lucid Petro Chemical is a dynamic and fast-growing name in India’s
              lubricant manufacturing landscape. Established in 2016, we began
              our journey with a clear vision to deliver high-quality,
              high-performance lubrication solutions for industries and
              automotive applications. Starting with calcium-based greases, our
              dedication to excellence and innovation allowed us to rapidly
              expand our product portfolio to include advanced engine oils,
              lithium-based greases, and high-temperature specialty lubricants
              by 2023.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-8 indent-8 text-justify"
            >
              Today, Lucid Petro Chemical is synonymous with reliability,
              technical expertise, and sustainable manufacturing. Our products
              are trusted by industries that require long-lasting,
              precision-engineered lubrication to keep their operations running
              efficiently and without interruption
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      {/* owner content section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 py-16 lg:py-14"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* Text Content */}
          <motion.div variants={slideInFromRight} className="w-full lg:w-1/2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#034a9a] mb-4 text-center lg:text-left"
            >
              Management
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2  text-justify"
            >
              <span className="bg-gradient-to-r from-blue-800 to-indigo-900 text-transparent bg-clip-text font-bold">
                Managing Partner:
              </span>{" "}
              C. Venkatesan
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2  text-justify"
            >
              <span className="bg-gradient-to-r from-blue-800 to-indigo-900 text-transparent bg-clip-text font-bold">
                Partner:
              </span>{" "}
              V. Nithiya
            </motion.p>
            <motion.blockquote
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2  text-justify"
            >
              “A good leadership creates a great team.”
            </motion.blockquote>
            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2  text-justify"
            >
              Founded in 2016, Lucid Petrochemical has quickly emerged as a
              reliable name in the chemical and lubricant industry. The company
              is driven by a commitment to quality, innovation, and customer
              satisfaction.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[#005b96] text-lg leading-relaxed mb-2  text-justify"
            >
              At the core of this growth are the managing partners, Mr. C.
              Venkatesan and Ms. V. Nithiya, whose leadership, vision, and
              commitment continue to shape the future of the company. Mr. C.
              Venkatesan provides strategic direction and oversees the company’s
              expansion, quality standards, and global outreach. Ms. V. Nithiya
              plays a vital role in business development, innovation, and
              operational excellence, ensuring the company’s smooth and stable
              progress.
            </motion.p>
          </motion.div>
          {/* Owner Image */}
          <motion.div variants={slideInFromLeft} className="w-full lg:w-1/2">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={ownerImg}
              alt="our Lab"
              className="object-cover w-full h-full rounded-xl drop-shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Video Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 py-16 lg:py-14"
      >
        <div className="w-full h-[450px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg group">
          <video
            src={aboutVideo}
            className="w-full h-full object-cover"
            poster="https://lucid-lubricants.com/wp-content/uploads/2023/10/lucid-lubricants-about-us.jpg"
            muted
            loop
            playsInline
            aria-label="About our company"
            autoPlay
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300"></div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Our Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={itemVariants}
                className="text-lg mb-8 text-[#295b96] text-justify"
              >
                At the heart of our operations lies a state-of-the-art
                manufacturing facility with an impressive <strong> annual production
                capacity of 12,000 tons.</strong> Our infrastructure is built to meet
                both high-volume industrial demands and customized solutions for
                specific machinery and performance needs. Equipped with high-end
                machinery, fully integrated Quality Control (QC) and Research &
                Development (R&D) laboratories, and operated by experienced
                engineers and chemists, we ensure every drop of lubricant that
                leaves our facility meets global performance standards
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg mb-8 text-[#295b96] text-justify"
              >
                We also maintain a base oil <strong> storage capacity of over 1000 KL</strong>,
                giving us a strong supply chain foundation and the ability to
                ensure timely delivery and bulk order fulfillment without
                compromising on quality
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4">
                {[
                  {
                    icon: <LiaIndustrySolid />,
                    text: "Lower emissions without compromising performance",
                  },
                  {
                    icon: <AiFillThunderbolt />,
                    text: "Enhance operational efficiency",
                  },
                  {
                    icon: <FaGlobeAsia />,
                    text: "Meet international environmental regulations",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="text-3xl mr-4 mt-1 text-[#034a9a]">
                      {item.icon}
                    </span>
                    <p className="text-lg text-[#295b96]">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 sticky top-[100px]"
            >
              <h4 className="font-bold text-lg mb-4 text-blue-700">
                Industries We Serve:
              </h4>
              <ul className="space-y-3">
                {["Diesel Engines", "Industrial Boilers", "Power Plants"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <BiCheckCircle className="h-5 w-5 text-[#034a9a] mr-2" />
                      <span className="text-[#295b96]">{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-blue-50 rounded-lg"
              >
                <p className="text-blue-800 italic">
                  "Our solutions bridge the gap between environmental
                  responsibility and industrial productivity"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center text-justify h-full">
              <TbTargetArrow className="text-6xl text-[#034a9a] mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">
                Vision
              </h3>
              <p className="text-[#005b96]">
                To become India’s most respected and preferred private-label
                manufacturer of lubricants, synthetic greases, and specialty
                oils — a company that stands for trust, technology, and total
                performance.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center text-justify h-full">
              <FaEye className="text-6xl text-[#034a9a] mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">
                Mission
              </h3>
              <p className="text-[#005b96]">
                To empower industries and vehicles across India and beyond with
                superior lubrication solutions that optimize performance, reduce
                downtime, and support a greener future.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center text-center h-full">
              <FaHandHoldingHeart className="text-6xl text-[#034a9a] mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-[#034a9a]">
                Values
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <p className="text-[#005b96]">
                  Innovation | Sustainability | Quality | Customer Trust |
                  Environmental Responsibility
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12 rounded-xl leader__section"
      >
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white"
        >
          <div className="w-full mx-auto">
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-[#034a9a] mb-8 text-center"
            >
              Our Strategic Edge
            </motion.h2>

            <motion.div
              variants={item}
              className="bg-[#f9f9f9] rounded-xl p-8 md:p-10 shadow-md"
            >
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
              >
                Lucid Petro Chemical operates under a technology license
                agreement with Baldwin Petroleum Technologies, Canada, and a
                partnership that allows us to infuse global innovations into our
                product development. With access to advanced formulations and
                technical guidance, we are able to manufacture world-class
                products that rival international benchmarks.
              </motion.p>
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
              >
                From engine oils that improve fuel economy to greases that
                operate reliably under extreme temperatures, every product is
                designed to enhance equipment performance, reduce wear and tear,
                and extend service life.
              </motion.p>

              <motion.div
                variants={container}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-4 rounded-lg text-center"
                >
                  <h3 className="text-3xl font-semibold mb-2">10+ Years</h3>
                  <p className="text-[#ffffff]">Industry Experience</p>
                </motion.div>

                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <p className="text-blue-100">Employees</p>
                </motion.div>

                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-4 rounded-lg text-center"
                >
                  <h3 className="text-3xl font-semibold mb-2">100+ Clients</h3>
                  <p className="text-[#ffffff]">Served Globally</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12 rounded-xl"
      >
        <section className="py-16 pt-0">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4"
            >
              Industries We Power
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-center text-blue-700 mb-12 max-w-3xl mx-auto"
            >
              Delivering specialized lubricant solutions across key sectors
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-300 p-3 rounded-full mr-4">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {industry.description ||
                        "Custom lubricant solutions for optimal performance"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12 rounded-xl leader__section"
      >
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white"
        >
          <div className="w-full mx-auto">
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-[#034a9a] mb-8 text-center"
            >
             Certified Excellence in Manufacturing
            </motion.h2>

            <motion.div
              variants={item}
              className=" "
            >
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
              >
               We are proud to be ISO 9001:2015 certified for our Quality Management System, underlining our commitment to delivering superior products and services. This internationally recognized certification assures our customers that our systems and processes meet the highest standards of quality management, traceability, and continuous improvement.
              </motion.p>
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
              >
               Our certification scope covers the manufacture of automotive, industrial, and specialty lubricant oils, reinforcing our ability to meet and exceed customer expectations across diverse sectors.
              </motion.p>

              <motion.div
                variants={container}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className=" p-4 rounded-lg flex justify-center items-center"
                >
                  <img src={iso_9001} alt="iso 9001-2008" className="size-55" />
                </motion.div>
                 <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className=" p-4 rounded-lg flex justify-center items-center"
                >
                  <img src={ohsas} alt="iso 9001-2008" className="size-55" />
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className=" p-4 rounded-lg flex justify-center items-center"
                >
                  <img src={iso_14001} alt="iso 9001-2008" className="size-55" />
                </motion.div>
               

                
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.section>
    </div>
  );
};

export const WhoWeAre = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white"
    >
      <div className="w-full mx-auto">
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-[#034a9a] mb-8 text-center"
        >
          Our Strategic Edge
        </motion.h2>

        <motion.div
          variants={item}
          className="bg-[#f9f9f9] rounded-xl p-8 md:p-10 shadow-md"
        >
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
          >
            Lucid Petro Chemical operates under a technology license agreement
            with Baldwin Petroleum Technologies, Canada, and a partnership that
            allows us to infuse global innovations into our product development.
            With access to advanced formulations and technical guidance, we are
            able to manufacture world-class products that rival international
            benchmarks.
          </motion.p>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[#295b96] mb-6 leading-relaxed"
          >
            From engine oils that improve fuel economy to greases that operate
            reliably under extreme temperatures, every product is designed to
            enhance equipment performance, reduce wear and tear, and extend
            service life.
          </motion.p>

          <motion.div
            variants={container}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-4 rounded-lg text-center"
            >
              <h3 className="text-3xl font-semibold mb-2">10+ Years</h3>
              <p className="text-[#ffffff]">Industry Experience</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Employees</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-4 rounded-lg text-center"
            >
              <h3 className="text-3xl font-semibold mb-2">100+ Clients</h3>
              <p className="text-[#ffffff]">Served Globally</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
