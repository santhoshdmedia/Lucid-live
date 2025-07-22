import React, { useState, useEffect } from "react";
import engineOil from "../assets/product/engineoil.jpg";
import lubricatingGrease from "../assets/product/lubegrease.jpg";
import Hydralic from "../assets/product/hydralic.png"
import GearOil from "../assets/product/gearoil.jpg";
import automobile from "../assets/product/grease2.jpg";
import blockqotes from "../assets/blockquotes.png";
import entrance from "../assets/employees/entrnace.webp";
import { Link } from "react-router";
import { motion } from "motion/react";
import slide_one from "../assets/video/Lucid_FinalCut.mp4";
import slide_two from "../assets/slides/slide_2.webp";
import slide_three from "../assets/slides/slide_3.jpg";
import slide_four from "../assets/slides/slide_4.jpg";
import slide_five from "../assets/slides/slide_5.jpg";
import { LucidLoader } from "../components/layout";

import {
  FiThumbsUp,
  FiGlobe,
  FiBookOpen,
  FiAward,
  FiSettings,
  FiLayers,
} from "react-icons/fi";

import {
  FaWeightHanging,
  FaOilCan,
  FaIndustry,
  FaBoxes,
  FaTruck,
  FaFlask,
  FaUserTie,
  FaShippingFast,
  FaLeaf,
  FaWarehouse,
} from "react-icons/fa";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
   const [intervalDuration, setIntervalDuration] = useState(10000); // Default interval

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: slide_one, type: "video" },
    { id: 2, image: slide_two, type: "image" },
    { id: 3, image: slide_three, type: "image" },
    { id: 4, image: slide_four, type: "image" },
    { id: 5, image: slide_five, type: "image" }
  ];
  const products = [
    
    {
      id: 1,
      name: "Automotive Engine Oil",
      image: engineOil,
      route: "/automotive-engine-oil",
    },
    {
      id: 2,
      name: "Gear Oil",
      image: GearOil,
      route: "/gear-oil",
    },

    {
      id: 3,
      name: "Hydralic oil",
      image: Hydralic,
      route: "/hydraulic-oil",
    },
    {
      id: 4,
      name: "Automotive Grease",
      image: automobile,
      route: "/automotive-grease",
    },
  ];

   const slideIntervals = [
    55000,   
    5000,   
    5000,  
    5000,   
    5000,  
    5000,   
  ];

  useEffect(() => {
    setIntervalDuration(slideIntervals[currentSlide]);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev === slides.length - 1 ? 0 : prev + 1;
        // Update interval duration for the next slide
        setIntervalDuration(slideIntervals[nextSlide]);
        return nextSlide;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, intervalDuration]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  const iconPop = (duration) => ({
    initial: { y: 0, scale: 1 },
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: duration,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  });

  return (
    <div className="">
      {/* slider */}
      <div className="relative">
        <div className="carousel w-full lg:h-[91.5vh] md:h-[70vh] h-[30vh] relative overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`slide-${slide.id}`}
              className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={index !== currentSlide}
            >
              {slide.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`Video slide ${index + 1}`}
                >
                  <source src={slide.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.image}
                  className="w-full h-full "
                  alt={`Slide ${index + 1}`}
                  loading={index === currentSlide ? "eager" : "lazy"}
                />
              )}
            </div>
          ))}

          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={goToPrevSlide}
              className="pointer-events-auto ml-4 p-2  text-white text-2xl rounded-full hover:bg-opacity-50 transition-all"
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              onClick={goToNextSlide}
              className="pointer-events-auto mr-4 p-2  text-white text-2xl rounded-full hover:bg-opacity-50 transition-all"
              aria-label="Next slide"
            >
              ❯
            </button>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white bg-opacity-50 hover:bg-opacity-70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
      {/* about content */}
      <div className="  sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem] overflow-x-hidden ">
        <div className="my-16 sm:my-20 md:my-24 lg:my-32 ">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#034a9a] mb-[2rem] relative group ">
            Our Products and Services
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 place-items-center">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex flex-col items-center w-full cursor-pointer group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="rounded-lg p-4 overflow-hidden"
                  whileHover={iconPop(0.3)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-auto h-30 lg:h-55 md:h-40 object-contain"
                    loading="lazy"
                  />
                </motion.div>

                <Link
                  to={product.route}
                  className="text-center font-bold text-lg sm:text-xl text-[#034a9a] md:text-2xl mt-3 sm:mt-4 group-hover:text-[#003d3a] transition-colors"
                >
                  {product.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-8 md:gap-10 items-center my-16 sm:my-20 md:my-24 lg:my-20 mx-10 lg:mx-0 md:mx-0 sm:mx-0 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={entrance}
              alt="Company owner"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h1 className="text-center lg:text-left md:text-left lg:text-4xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full  font-bold mx-auto text-[#034a9a] mb-[2rem] relative group ">
              Welcome to Lucid Petro Chemical
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#005b96]  leading-6 lg:leading-10 md:leading-6 text-justify  indent-10">
              Founded in 2016 and headquartered in Thuraiyur, Trichy, Tamil
              Nadu, Lucid Petro Chemical has emerged as a leading Indian
              manufacturer of high-performance lubricants and greases. Driven by
              a commitment to performance, sustainability, and innovation, we
              proudly serve a growing network of clients across India and
              international markets.
            </p>

            <blockquote className="border-l-4 lg:border-[#034a9a] md:border-[#034a9a] border-none pl-4 italic text-lg sm:text-lg md:text-xl lg:text-2xl text-[#0648aa] lg:ml-[30%] md:ml-[30%] ml-8">
              “Driven by Performance. Powered by Innovation.”
            </blockquote>
          </motion.div>
        </section>

        {/* quotes */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 sm:mt-20 md:mt-26 lg:mt-30 overflow-x-hidden"
        >
          <h1 className="text-center   lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full font-bold mx-auto text-[#034a9a] mb-[2rem] relative group bg-transparent">
            Lucid Lubricants – Redefining Excellence in Motion
            <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out "></span>
          </h1>

          {/* </blockquote>  */}
          <div className="relative min-h-[300px]">
            {" "}
            {/* Set minimum height */}
            {/* Background image */}
            <img
              src={blockqotes}
              alt=""
              className="absolute top-[-100px] left-[10%] lg:w-[250px]  size-3/4  opacity-10 z-0"
            />
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-8">
              <blockquote
                className="text-center text-md sm:text-xl text-[#034a9a] md:text-xl"
                style={{ lineHeight: "1.6" }}
              >
                <p className="mb-6 font-semibold italic">
                  "At Lucid, we don't just make lubricants - we engineer the
                  science of smooth performance."
                </p>

                <p className="mb-5">
                  Our advanced formulations are built to outlast, outperform,
                  and outpace - reducing downtime while minimizing environmental
                  impact.
                </p>

                <p className="font-medium">
                  <span className="text-[#0648aa]">
                    Lucid: Powering Potential. Fluid by Fluid.
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
      {/* why choose us section */}
      <section className="sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem] bg-[#1482aa] overflow-x-hidden">
        <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-14 pb-20 relative">
          <h2 className="text-md md:text-lg lg:text-xl text-[#ffffff] mb-4 text-center font-normal">
            Our Features
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] mb-20 text-center capitalize">
            Why Choose Our Lubricants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mx-10 lg:mx-0 md:mx-0 sm:mx-0 sm:gap-8 lg:gap-12">
            {/* Education-First Approach */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">
              <FiBookOpen className="h-16 w-16 text-[#034a9a] transition-colors duration-300 group-hover:text-[#1482aa]" />
              <h3 className="text-xl text-center font-bold text-[#034a9a] transition-colors duration-300">
                Education-First Approach
              </h3>
              <p className="text-[#005b96] text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                Serving Both Domestic & International Clients
              </p>
            </div>

            {/* Expertise You Can Trust */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">
              <FiAward className="h-16 w-16 text-[#034a9a] transition-colors duration-300 group-hover:text-[#1482aa]" />
              <h3 className="text-xl text-center font-bold text-[#034a9a] transition-colors duration-300">
                Expertise You Can Trust
              </h3>
              <p className="text-[#005b96] text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                12,000 Tons Annual Production Capacity
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">
              <FiSettings className="h-16 w-16 text-[#034a9a] transition-colors duration-300 group-hover:text-[#1482aa]" />
              <h3 className="text-xl text-center font-bold text-[#034a9a] transition-colors duration-300">
                Custom Solutions
              </h3>
              <p className="text-[#005b96] text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                Tailor-Made Lubrication Solutions
              </p>
            </div>

            {/* R&D Excellence */}
            <div className="flex flex-col justify-center items-center shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 bg-white gap-4 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group h-[250px]">
              <FiLayers className="h-16 w-16 text-[#034a9a] transition-colors duration-300 group-hover:text-[#1482aa]" />
              <h3 className="text-xl text-center font-bold text-[#034a9a] transition-colors duration-300">
                R&D Excellence
              </h3>
              <p className="text-[#005b96] text-center absolute inset-0 flex items-center justify-center bg-[#ffffff] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-xl border-2 border-dashed m-5 rounded-2xl">
                In-House Research & Development
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className=" sm:px-[4rem] lg:px-[8rem] xl:px-[8rem] 2xl:px-[10rem]  py-16 lg:py-20 md:py-20 sm:py-16 relative overflow-x-hidden pt-0">
        {/* faq section */}
        <div className="object-cover w-full h-full absolute top-0 left-0 z-0 infrastructure__section" />
          <div className="absolute h-[100%] w-full top-0 left-0 bg-[rgba(0,0,0,0.52)]"></div>
        <div className="mx-auto  z-10 relative">
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-4xl text-3xl lg:w-full md:w-full w-[80%] font-bold mx-auto text-[#ffffff] mb-[6rem] relative group ">
            Our Infrastructure & Facilities
            {/* <span className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] h-1.5 bg-[#84b5d3] w-1/6 transition-all duration-300 ease-in-out"></span> */}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-12 px-4">
            {/* Item 1 - Capacity */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#034a9a] p-3 rounded-lg text-white">
                  <FaWeightHanging className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-bold text-[#ffffff]">
                  2000 tons/month blending, packing & distribution capacity
                </p>
              </div>
            </motion.div>

            {/* Item 2 - Oil Blending */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaOilCan className="text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Semi-automatic oil blending line
                </p>
              </div>
            </motion.div>

            {/* Item 3 - Grease Production */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#034a9a] p-3 rounded-lg text-white">
                  <FaIndustry className="text-xl lg:text-2xl" />
                </div>
                <p className="text-lg font-medium text-[#ffffff]">
                  New grease production unit
                </p>
              </div>
            </motion.div>

            {/* Item 4 - Packing Line */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaBoxes className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Fully automatic packing line – 3500 L/hr
                </p>
              </div>
            </motion.div>

            {/* Item 5 - Storage Tanks */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#034a9a] p-3 rounded-lg text-white">
                  <FaWarehouse className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Additional storage tanks
                </p>
              </div>
            </motion.div>

            {/* Item 6 - Fleet */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaTruck className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Own fleet for distribution
                </p>
              </div>
            </motion.div>

            {/* Item 7 - QC Lab */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#034a9a] p-3 rounded-lg text-white">
                  <FaFlask className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Advanced QC laboratory
                </p>
              </div>
            </motion.div>

            {/* Item 8 - Personnel */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaUserTie className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Experienced technical personnel
                </p>
              </div>
            </motion.div>

            {/* Item 9 - Delivery */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#034a9a] p-3 rounded-lg text-white">
                  <FaShippingFast className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  Flexible delivery systems
                </p>
              </div>
            </motion.div>

            {/* Item 10 - Eco-friendly */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden drop-shadow-lg p-6 bg-[rgba(26,44,68,0.34)]"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#84b5d3] p-3 rounded-lg text-white">
                  <FaLeaf className="text-xl lg:text-2xl" />
                </div>
                <p className="text-md lg:text-lg font-medium text-[#ffffff]">
                  100% government-compliant, eco-friendly gas-based plant
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
