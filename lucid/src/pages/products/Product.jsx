import React, { useEffect, useState, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";
import { AppBreadcrumbs } from "../../components/layout";
import { Helmet } from "react-helmet-async";
// import './Product.css'

import engineOilProduct from "../../assets/product/productTwo.webp";
import { LucidLoader } from "../../components/layout";
import oilBg from "../../assets/oils_bg.jpg";
import { motion, AnimatePresence } from "framer-motion";

import { Banner } from "../../components/layout";

// Product data with additional properties for badges

// Animation variants
const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};



export const ProductLayout = ({
  // Header props
  title = "Engine Oil",
  description = "Premium quality lubricants for all your needs",

  metatitle = "Automotive Engine Oil | Lucid Petrochemical – Superior Lubrication Solutions",
  meta_Description = "Discover Lucid Petrochemical's high‑performance automotive engine oils—engineered for longevity, friction reduction, and optimal protection in diesel and petrol engines.",
  meta_Keywords = "Lucid Petrochemical engine oil, automotive engine oil India, high-performance lubricants, diesel engine oil, petrol engine oil, engine protection chemicals, synthetic motor oil, vehicle lubrication solutions",

  // Main content props
  mainTitle = "Premium Automotive Engine Oils",
  companyName = "Lucid Petrochemical",
  companyNameHighlight = true,

  // Paragraphs
  paragraphs = [
    "We engineer high-performance engine oils that deliver unmatched protection and efficiency. Our scientifically formulated products are designed to meet the rigorous demands of modern engines, ensuring optimal performance in all driving conditions.",
    "Backed by extensive research and cutting-edge technology, our oils provide comprehensive engine care that extends vehicle life while improving fuel economy and reducing harmful emissions.",
  ],

  // Features list
  features = [
    "Superior Engine Protection – Advanced anti-wear additives reduce friction and component wear by up to 40%",
    "Enhanced Fuel Efficiency – Special friction modifiers improve mileage by 2-3% compared to conventional oils",
    "All-Weather Performance – Stable viscosity across temperature extremes (-30°C to 50°C)",
    "Instant Cold Starts – Low pour point formulation ensures immediate lubrication",
    "Advanced Cleanliness – Detergent additives prevent sludge and deposit buildup",
    "Extended Drain Intervals – High TBN reserves maintain alkalinity longer",
  ],

  // Image section
  mainImage = {
    src: engineOilProduct,
    alt: "Lucid Engine Oil in Application",
    overlayTitle: "Engineered for Excellence",
    overlayText: "Meeting global standards including API SP/SN, ACEA A3/B4, and OEM specifications",
    certifications: ["API SP", "ACEA A3/B4", "JASO MA2", "MB-Approval 229.5"],
  },

  // Technical specifications
  technicalSpecs = [
    {
      title: "Viscosity Index",
      value: "110+",
      desc: "Ensures stable lubrication",
    },
    {
      title: "Pour Point",
      value: "-21°C",
      desc: "Excellent cold weather flow",
    },
    {
      title: "Flash Point",
      value: "206°C+",
      desc: "High temperature stability",
    },
    { title: "Sulfated Ash", value: "<1.0%", desc: "Low emission formulation" },
    { title: "TBN", value: "8.5-10", desc: "Extended drain capability" },
    {
      title: "HTHS Viscosity",
      value: "3.5 cP",
      desc: "Protection under shear",
    },
  ],

  // Animation options
  enableAnimations = true,
  backgroundEffects = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Product data organized by categories
  const productCategories = {
    motorcycle: [
      {
        id: 1,
        productName: "Lucid 4T Eco SAE 20W40 | API SL | JASO MA2",
        productImg: engineOilProduct,
        productDescription: "Formulated with advanced technology for 4-stroke motorcycles, Lucid 4T Eco delivers superior engine protection, smooth clutch performance, and excellent gear shifting. Specially designed for 100cc bikes and beyond.",
        features: [
          "Enhanced Engine Life – Protects against wear and deposits",
          "Smooth Clutch Operation – Wet clutch compatibility",
          "Thermal Stability – Reliable performance at high temperatures",
          "Fuel Efficiency – Balanced formulation for eco-friendly riding"
        ],
        recommendedFor: "100cc Motorcycles – India's Top-Selling Segment",
        badge: "MCO",
        gradient: "from-green-500 to-blue-600"
      },
      {
        id: 2,
        productName: "Lucid 4T Pro – SAE 20W40 | API SN | JASO MA2",
        productImg: engineOilProduct,
        productDescription: "Premium 4-stroke motorcycle engine oil specially designed for modern 125cc and above bikes. Blended with advanced additives for superior protection and long-lasting engine life.",
        features: [
          "Strong anti-wear protection for vital engine parts",
          "Smooth gear shifting with wet clutch performance",
          "Maintains viscosity under high temperature and heavy load",
          "Keeps engine clean from sludge and deposits"
        ],
        recommendedFor: "125cc+ Motorcycles – The Premium Grade",
        badge: "MCO",
        gradient: "from-blue-500 to-purple-600"
      },
      {
        id: 3,
        productName: "Lucid 4T Nario – SAE 10W30 | API SN | JASO MB",
        productImg: engineOilProduct,
        productDescription: "Premium scooter engine oil thoughtfully crafted for modern automatic scooters. Delivers smooth performance, reliable protection, and effortless riding comfort.",
        features: [
          "Specially made for scooters requiring JASO MB grade",
          "Smooth acceleration and graceful performance in city traffic",
          "Protects against wear, heat, and deposits",
          "Clean-running formula for fresh and efficient engine"
        ],
        recommendedFor: "Automatic Scooters – Power Meets Grace",
        badge: "MCO",
        gradient: "from-pink-500 to-red-600"
      },
      {
        id: 4,
        productName: "Lucid 4T Dyno – SAE 10W30 | API SM | JASO MA2",
        productImg: engineOilProduct,
        productDescription: "Engineered for riders who demand both power and endurance. With advanced additive chemistry, it delivers smooth performance and strong protection.",
        features: [
          "Smooth clutch performance & precise gear shifting",
          "High shear stability for reliable protection under high RPMs",
          "Fights wear, heat, and sludge build-up",
          "Designed for dynamic riding conditions"
        ],
        recommendedFor: "125cc-150cc Commuter & Sporty Bikes",
        badge: "MCO",
        gradient: "from-orange-500 to-yellow-600"
      },
      {
        id: 5,
        productName: "Lucid 4T Ignito SAE 15W50 API SN JASO MA2",
        productImg: engineOilProduct,
        productDescription: "High-performance 4-stroke motorcycle engine oil for riders who demand power, protection, and reliability. Ensures smooth performance even under extreme conditions.",
        features: [
          "Superior engine & clutch protection",
          "Smooth gear shifts (JASO MA2 certified)",
          "High thermal stability & cleanliness",
          "Reliable performance in all conditions"
        ],
        recommendedFor: "All modern 4-stroke motorcycles & performance biking",
        badge: "MCO",
        gradient: "from-red-500 to-orange-600"
      }
    ],
    lightTransport: [
      {
        id: 1,
        productName: "Lucid Carrio Pro SAE 15W40 API CH-4",
        technology: "Powered with TSP Technology – Torque • Shield • Performance",
        productImg: engineOilProduct,
        productDescription: "High-performance diesel engine oil engineered for light transport vehicles that demand durability, protection, and consistent power delivery.",
        features: [
          "Torque Boost: Optimized lubrication for superior pulling power & engine response",
          "Shield Protection: Strong wear defence for pistons, cylinders & critical engine parts",
          "Performance Reliability: Maintains viscosity under tough stop-and-go driving",
          "Engine Cleanliness: Minimizes deposits & sludge for smooth operation"
        ],
        recommendedFor: "Perfect for both Cargo and Passenger Light Transport Vehicles",
        badge: "TRANSPORT",
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        id: 2,
        productName: "Lucid Carrio Dyno SAE 15W40 API CI-4 Plus",
        technology: "Powered with TSP Technology – Torque • Shield • Performance",
        productImg: engineOilProduct,
        productDescription: "Advanced diesel engine oil designed for modern high-speed engines. Delivers perfect balance of power, protection, and endurance.",
        features: [
          "Superior soot handling for cleaner engines",
          "Enhanced wear protection for longer life",
          "Consistent performance under heavy loads",
          "Supports extended oil drain intervals"
        ],
        recommendedFor: "Light commercial vehicles requiring SAE 15W40, API CI-4 Plus",
        badge: "TRANSPORT",
        gradient: "from-indigo-600 to-purple-700"
      }
    ],
    passengerCar: [
      {
        id: 1,
        productName: "Lucid Cruzo Eco SAE 15W40 API CH-4/SL",
        tagline: "Balanced Power. Eco Performance.",
        productImg: engineOilProduct,
        productDescription: "Multi-grade engine oil specially formulated for both diesel and petrol engines, offering reliable performance across wide operating conditions.",
        features: [
          "Strong wear & deposit protection",
          "Excellent soot & sludge control",
          "Reliable thermal & oxidation stability",
          "Smooth performance for both diesel & petrol engines"
        ],
        recommendedFor: "Light commercial vehicles, SUVs, and passenger cars requiring SAE 15W40, API CH-4/SL",
        badge: "PCMO",
        gradient: "from-green-600 to-blue-700"
      },
      {
        id: 2,
        productName: "Lucid Cruzo Pro SAE 5W30 API SN / ACEA A3/B3",
        technology: "Powered with Aura Shield Technology™",
        productImg: engineOilProduct,
        productDescription: "Premium passenger car motor oil engineered to deliver fabulous new-age protection and clarity for modern petrol and light diesel engines.",
        features: [
          "Aura Shield Protection – Invisible layer guarding against wear & deposits",
          "Cleaner Engines – Reduces sludge and soot for longer engine life",
          "Smoother Performance – Reliable power delivery in all driving conditions",
          "All-Round Endurance – Consistent protection from city traffic to highways"
        ],
        recommendedFor: "Passenger cars & SUVs requiring SAE 5W30, API SN, ACEA A3/B3",
        badge: "PCMO",
        gradient: "from-purple-600 to-pink-700"
      },
      {
        id: 3,
        productName: "Lucid Cruzo Dyno SAE 5W40 API SN / ACEA A3/B3",
        technology: "Powered with Aura Shield Technology™",
        productImg: engineOilProduct,
        productDescription: "High-performance passenger car motor oil crafted for auto enthusiasts who demand power, precision, and protection.",
        features: [
          "Aura Shield Protection – Advanced defense against wear, sludge & deposits",
          "High-Performance Formula – Strong thermal stability for powerful engines",
          "Engine Cleanliness – Reduces deposits for smoother running",
          "Endurance Guaranteed – Consistent performance in city traffic & highways"
        ],
        recommendedFor: "Passenger cars & SUVs requiring SAE 5W40, API SN, ACEA A3/B3",
        badge: "PCMO",
        gradient: "from-orange-600 to-red-700"
      }
    ],
    agricultural: [
      {
        id: 1,
        productName: "Lucid Engino Pro SAE 20W40 API CF-4",
        tagline: "Reliable Power for Tractors & Stationary Engines",
        productImg: engineOilProduct,
        productDescription: "Robust diesel engine oil designed specifically for tractors and stationary engines operating under demanding field conditions.",
        features: [
          "Strong wear protection for extended engine life",
          "Reliable torque delivery in tractors and stationary setups",
          "Enhanced soot & deposit control for cleaner operation",
          "Excellent oxidation stability for long working hours"
        ],
        recommendedFor: "Agricultural tractors, harvesters & farm equipment, Stationary diesel engines",
        packs: "1L, 5L, 7.5L, 15L, 210L drum",
        badge: "AGRI",
        gradient: "from-yellow-600 to-orange-700"
      },
      {
        id: 2,
        productName: "Lucid Engino Agro SAE 15W40 API CH-4",
        tagline: "Powering Agriculture with Reliable Protection",
        productImg: engineOilProduct,
        productDescription: "Heavy-duty diesel engine oil designed specifically for agricultural machinery operating in harsh field conditions.",
        features: [
          "Strong wear & tear protection for long engine life",
          "Effective soot & deposit control for cleaner operation",
          "Reliable performance in dusty & rugged fields",
          "Excellent oxidation stability for extended oil life"
        ],
        recommendedFor: "Tractors, harvesters & agricultural machinery, Diesel engines requiring SAE 15W40, API CH-4",
        packs: "1L, 5L, 7.5L, 15L, 210L drum",
        badge: "AGRI",
        gradient: "from-green-600 to-teal-700"
      },
      {
        id: 3,
        productName: "Lucid Engino Tracto – Tractor Transmission Oil",
        tagline: "Smooth Transmission. Reliable Braking. Lasting Protection.",
        productImg: engineOilProduct,
        productDescription: "Specialized transmission oil formulated for tractors with wet brake systems, clutches, and hydraulic transmissions.",
        features: [
          "Wet Brake Protection – Reduces noise & chatter, ensures smooth braking",
          "Smooth Transmission Performance – Stable friction for gear & clutch operation",
          "Hydraulic System Compatibility – Reliable performance across hydraulics & PTO units",
          "Strong Anti-Wear Properties – Protects gears, bearings & moving parts"
        ],
        recommendedFor: "Tractors & agricultural machinery with wet brakes, clutches, and hydraulic systems",
        packs: "5L, 7.5L, 15L, 210L drum",
        badge: "AGRI",
        gradient: "from-blue-600 to-indigo-700"
      }
    ],
    heavyCommercial: [
      {
        id: 1,
        productName: "Lucid Haulo Pro SAE 15W40 API CH-4",
        tagline: "Heavy-Duty Protection for Haulage & Transport Fleets",
        productImg: engineOilProduct,
        productDescription: "Robust diesel engine oil designed for long-haul trucks, buses, and heavy-duty commercial vehicles.",
        features: [
          "Strong wear protection for long engine life",
          "Effective soot & sludge control for cleaner operation",
          "Excellent oxidation stability for extended drains",
          "Consistent performance under high load & long hours"
        ],
        recommendedFor: "Trucks, buses & heavy commercial vehicles, Long-haul & fleet applications",
        packs: "1L, 5L, 7.5L, 15L, 210L drum",
        badge: "HCV",
        gradient: "from-gray-600 to-blue-700"
      },
      {
        id: 2,
        productName: "Lucid Haulo Dyno SAE 15W40 API CI-4 Plus",
        tagline: "Premium Power for Modern Heavy-Duty Engines",
        productImg: engineOilProduct,
        productDescription: "High-performance diesel engine oil engineered for modern heavy-duty trucks, buses, and fleet vehicles.",
        features: [
          "Advanced Wear Protection – Guards pistons, rings & vital parts under heavy stress",
          "Superior Soot Handling – Prevents sludge, deposits & viscosity increase",
          "High Thermal & Oxidation Stability – Stays strong in long, high-heat operations",
          "Extended Drain Performance – Longer oil life for fleet efficiency"
        ],
        recommendedFor: "Heavy-duty trucks, buses & fleet vehicles requiring API CI-4 Plus",
        packs: "1L, 5L, 7.5L, 15L, 210L drum",
        badge: "HCV",
        gradient: "from-red-600 to-orange-700"
      },
      {
        id: 3,
        productName: "Lucid HauloMagno SAE 10W40 API CJ-4",
        tagline: "Next-Generation Protection for Advanced Heavy-Duty Engines",
        productImg: engineOilProduct,
        productDescription: "Premium heavy-duty diesel engine oil engineered for modern BS-IV/BS-VI compliant trucks and buses.",
        features: [
          "CJ-4 Grade Performance – Designed for low-emission, high-output diesel engines",
          "Stronger Wear & Corrosion Protection – Safeguards critical components under stress",
          "Advanced Soot & Deposit Control – Keeps engines cleaner, boosting efficiency",
          "Excellent Oxidation & Shear Stability – Consistent performance in long-haul use"
        ],
        recommendedFor: "Heavy-duty commercial vehicles requiring API CJ-4, Modern BS-IV/BS-VI trucks",
        packs: "1L, 5L, 7.5L, 15L, 210L drum",
        badge: "HCV",
        gradient: "from-purple-600 to-pink-700"
      }
    ]
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <motion.div
      className="group relative h-full flex flex-col justify-between rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl hover:shadow-3xl border-2 border-white/20"
      initial="rest"
      whileHover="hover"
      variants={cardVariants}
      layout
    >
      {/* Background effects */}
      {backgroundEffects && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/20"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                  y: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  filter: "blur(40px)",
                }}
              />
            ))}
          </div>
        </div>
      )}


      {/* Product image */}
      <motion.div className="relative h-48 overflow-hidden">
        <motion.img
          src={product.productImg || engineOilProduct}
          className="w-full h-full object-contain p-4"
          alt={product.productName}
          loading="lazy"
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Product info */}
      <motion.div className="relative p-6 flex flex-col justify-between bg-white/80 backdrop-blur-sm">
        <div>
          <motion.h3
            className="text-xl font-extrabold text-[#005b96] mb-3"
            initial={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            whileHover={{
              textShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
          >
            {product.productName}
          </motion.h3>

          {product.technology && (
            <motion.p className="text-sm text-[#034a9a] font-semibold mb-2">
              {product.technology}
            </motion.p>
          )}

          {product.tagline && (
            <motion.p className="text-sm text-[#6497b1] italic mb-3">
              {product.tagline}
            </motion.p>
          )}

          <motion.p
            className="text-[#03396c] mb-4 text-sm leading-relaxed"
            whileHover={{
              color: "#6497b1",
              transition: { duration: 0.2 },
            }}
          >
            {product.productDescription}
          </motion.p>

          {/* Features List */}
          <motion.ul className="space-y-2 mb-4">
            {product.features && product.features.slice(0, 3).map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start text-xs text-[#005b96]"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-[#034a9a] rounded-full mt-1.5 mr-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          {/* Recommended For */}
          <motion.div
            className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-[#034a9a]"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xs font-semibold text-[#034a9a]">
              ✅ Recommended For: {product.recommendedFor}
            </p>
          </motion.div>

          {/* Available Packs */}
          {product.packs && (
            <motion.div
              className="mt-3 p-2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-xs font-semibold text-green-700">
                📦 Available Packs: {product.packs}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg bg-gradient-to-r ${product.gradient}`}
        initial={{ scale: 0.8 }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        {product.badge}
      </motion.div>
    </motion.div>
  );

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  const imageHover = {
    rest: { scale: 0.9 },
    hover: { scale: 1 },
  };

  const renderParagraph = (text) => {
    if (!companyNameHighlight || !text.includes(companyName)) {
      return text;
    }

    const parts = text.split(companyName);
    return (
      <>
        {parts[0]}
        <motion.span
          className="font-bold text-[#034a9a]"
          whileHover={{ scale: 1.05 }}
        >
          {companyName}
        </motion.span>
        {parts[1]}
      </>
    );
  };

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta
          name="description"
          content={`${meta_Description}`}
        />
        <meta
          name="keywords"
          content={`${meta_Keywords}`}
        />
      </Helmet>
      <motion.div
        className="relative overflow-hidden min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.header
          className="w-full py-12 individual__product__section"
          variants={fadeIn}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-40 relative">
            <div className="max-w-3xl">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
                variants={slideUp}
              >
                {title}
              </motion.h1>
              <AppBreadcrumbs className="text-teal-100" />
            </div>
          </div>
        </motion.header>

        {/* Main Content Section */}
        <motion.section
          className="lg:px-16 xl:px-24 bg-transparent lg:bg-gradient-to-b from-white to-blue-50 w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              <motion.h1
                className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-[#034a9a] font-bold font-[Roboto] mb-6"
                whileHover={{ scale: 1.01 }}
              >
                {mainTitle}
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-[#034a9a] mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base sm:text-lg md:text-xl text-[#005b96] leading-7 md:leading-8 mb-8"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {renderParagraph(paragraph)}
                  </motion.p>
                ))}

                <motion.ul
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                >
                  {features.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-[#034a9a] mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <span className="text-[#005b96] text-base sm:text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034a9a] to-transparent opacity-90"></div>
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {mainImage.overlayTitle}
                  </motion.h3>
                  <motion.p className="mb-4">{mainImage.overlayText}</motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    variants={containerVariants}
                  >
                    {mainImage.certifications.map((cert, i) => (
                      <motion.span
                        key={i}
                        className="bg-white/20 px-4 py-2 rounded-full text-sm"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              className="mt-16 bg-white p-8 rounded-xl shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.h3
                className="text-2xl font-bold text-[#034a9a] mb-6"
                whileHover={{ scale: 1.01 }}
              >
                Technical Specifications
              </motion.h3>
              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {technicalSpecs.map((spec, i) => (
                  <motion.div
                    key={i}
                    className="border-l-4 border-[#034a9a] pl-4 py-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.h4
                      className="font-bold text-[#005b96]"
                      whileHover={{ scale: 1.02 }}
                    >
                      {spec.title}
                    </motion.h4>
                    <motion.p
                      className="text-2xl font-bold text-[#034a9a]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {spec.value}
                    </motion.p>
                    <motion.p className="text-gray-600">{spec.desc}</motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Products Grid Section */}
        <motion.section
          className="relative z-10 sm:px-8 lg:px-12 xl:px-32 2xl:px-40 py-12"
          variants={containerVariants}
        >
          {/* Motorcycle Oil Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold text-[#034a9a] mb-8 text-center">
              Motorcycle Oil 
            </motion.h2>
            <motion.div
              className="flex flex-col items-center"
              variants={containerVariants}
            >
              {/* First three cards in normal grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full">
                {productCategories.motorcycle.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Last two cards centered */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 w-full">
                {productCategories.motorcycle.slice(3).map((product) => (
                  <div key={product.id} className="w-full max-w-md">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Light Transport Vehicles Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold text-[#034a9a] mb-8 text-center">
              Light Transport Vehicles
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
              variants={containerVariants}
            >
              {productCategories.lightTransport.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>

          {/* Passenger Car Motor Oil Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold text-[#034a9a] mb-8 text-center">
              Passenger Car Motor Oil (PCMO)
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
              variants={containerVariants}
            >
              {productCategories.passengerCar.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>

          {/* Agricultural & Stationary Engine Oil Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold text-[#034a9a] mb-8 text-center">
              Agricultural & Stationary Engine Oil
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
              variants={containerVariants}
            >
              {productCategories.agricultural.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>

          {/* HCV/LCV Lubricants Section */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold text-[#034a9a] mb-8 text-center">
              HCV/LCV Lubricants (DEO-Diesel Engine Oil)
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
              variants={containerVariants}
            >
              {productCategories.heavyCommercial.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
};



export const Gearoil = ({
  // Header props
  title = "Gear Oil",
  description = "Premium quality lubricants for all your needs",

  metatitle = "Gear Oil | Lucid Petrochemical – High‑Performance Gear Lubricants",
  meta_Description = "Explore Lucid Petrochemical’s premium gear oil solutions — engineered for optimal protection, thermal stability, and wear resistance in industrial gears and drivetrain systems.",
  meta_Keywords = "Lucid Petrochemical gear oil, high-performance gear lubricants, industrial gear oil, extreme pressure gear oil, drivetrain protection, thermal stability lubricants, anti-wear gear oil, enclosed gear drives, petrochemical gear oil India",

  // Main content props
  mainTitle = "Gear Oils",
  companyName = "Lucid Petro chemical",
  companyNameHighlight = true,

  // Paragraphs
  paragraphs = [
    "Lucid Petro chemical engineers advanced gear and transmission oils that deliver unmatched protection and efficiency. Our scientifically formulated products meet the rigorous demands of modern drivetrains.",
    "Backed by cutting-edge technology, our oils extend component life while improving shift quality and reducing mechanical wear in heavy-duty commercial vehicles.",
  ],

  // Features list
  features = [
    "Superior Gear Protection – EP additives reduce wear in hypoid gears by 45%",
    "All-Weather Performance – Stable viscosity (-30°C to 180°C)",
    "Enhanced Shift Quality – Improves gear engagement in cold conditions",
    "Oxidation Resistance – Prevents sludge and deposit buildup",
    "Extended Drain Intervals – High thermal stability under extreme loads",
    "Compliance Assurance – Meets MIL-L-2105 and IS 1118:1992",
  ],

  // Image section
  mainImage = {
    src: engineOilProduct,
    alt: "Lucid Gear Oil protecting heavy-duty transmission",
    overlayTitle: "Precision-Engineered for Drivetrains",
    overlayText: "Exceeds global standards including API GL-5 specifications",
    certifications: ["API GL-5", "MIL-L-2105D", "IS 1118:1992"],
  },

  // Technical specifications
  technicalSpecs = [
    {
      title: "Viscosity @100°C",
      value: "25-27 cSt",
      desc: "Optimal film strength",
    },
    { title: "Pour Point", value: "-9°C", desc: "Cold-weather performance" },
    { title: "Flash Point", value: "180°C+", desc: "High-temperature safety" },
    {
      title: "EP Rating",
      value: "API GL-5",
      desc: "Extreme-pressure protection",
    },
    {
      title: "Corrosion Test",
      value: "ASTM D130",
      desc: "Copper strip protection",
    },
  ],

  // Product categories
  productCategories = [
    {
      name: "Gear Oil",
      products: [
        {
          id: 1,
          productName: "LUCID FLEET EP-90 (API-GL-4)",
          productImg: engineOilProduct,
          productDescription:
            "Premium EP-90 gear oil engineered for smooth shifting and extended transmission life in commercial vehicles. Its advanced extreme-pressure additives provide superior protection for synchronizers and gears, while the thermally stable formulation maintains optimal viscosity in both hot and cold operating conditions.",
          isFeatured: true,
        },
        {
          id: 2,
          productName: "LUCID FLEET EP-140 (API-GL-4)",
          productImg: engineOilProduct,
          productDescription:
            "Heavy-duty EP-140 gear oil specifically formulated for high-torque applications and severe service conditions. The high-viscosity base combined with advanced anti-wear additives provides exceptional film strength to protect gears under extreme loads, while resisting thermal breakdown in high-temperature environments.",
        },
      ],
    },
  ],

  // Card options
  productCardOptions = {
    heightClass: "h-[32rem]",
    background: "from-gray-50 to-gray-100",
    textColor: "text-[#005b96]",
    descriptionColor: "text-[#03396c]",
    buttonText: "View Product",
  },

  // Animation options
  enableAnimations = true,
  backgroundEffects = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  const imageHover = {
    rest: { scale: 0.9 },
    hover: { scale: 1 },
  };

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  const ProductBadge = ({ type }) => {
    const badgeConfig = {
      new: { text: "New", color: "bg-green-500" },
      featured: { text: "Featured", color: "bg-purple-500" },
      bestSeller: { text: "Best Seller", color: "bg-red-500" },
    };

    const { text, color } = badgeConfig[type] || {};
    if (!text) return null;

    return (
      <motion.div
        className={`absolute top-4 right-4 ${color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
        initial={{ scale: 0.8, rotate: -5 }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        {text}
      </motion.div>
    );
  };

  const renderParagraph = (text) => {
    if (!companyNameHighlight || !text.includes(companyName)) {
      return text;
    }

    const parts = text.split(companyName);
    return (
      <>
        {parts[0]}
        <motion.span
          className="font-bold text-[#034a9a]"
          whileHover={{ scale: 1.05 }}
        >
          {companyName}
        </motion.span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className="relative overflow-hidden min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={meta_Description} />
        <meta name="keywords" content={meta_Keywords} />
      </Helmet>
      {/* Hero Header */}
      <motion.header
        className="w-full py-12 individual__product__section"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-40 relative">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
              variants={slideUp}
            >
              {title}
            </motion.h1>
            <AppBreadcrumbs className="text-teal-100" />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.section
        className=" lg:px-16 xl:px-24  bg-transparent lg:bg-gradient-to-b from-white to-blue-50  w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl text-[#034a9a] font-bold mb-6"
              whileHover={{ scale: 1.01 }}
            >
              {mainTitle}
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#034a9a] mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-base sm:text-lg text-[#005b96] leading-7 md:leading-8 mb-8"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {renderParagraph(paragraph)}
                </motion.p>
              ))}

              <motion.ul
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {features.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-[#034a9a] mt-1 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="text-[#005b96] text-base sm:text-lg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#034a9a] to-transparent opacity-90"></div>
              <motion.div
                className="absolute bottom-0 left-0 p-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  {mainImage.overlayTitle}
                </motion.h3>
                <motion.p className="mb-4">{mainImage.overlayText}</motion.p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {mainImage.certifications.map((cert, i) => (
                    <motion.span
                      key={i}
                      className="bg-white/20 px-3 py-1 rounded-full text-xs"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      {cert}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            className="mt-16 bg-white p-6 sm:p-8 rounded-xl shadow-md"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-[#034a9a] mb-6"
              whileHover={{ scale: 1.01 }}
            >
              Technical Specifications
            </motion.h3>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {technicalSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  className="border-l-4 border-[#034a9a] pl-4 py-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.h4
                    className="font-bold text-[#005b96] text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                  >
                    {spec.title}
                  </motion.h4>
                  <motion.p
                    className="text-xl sm:text-2xl font-bold text-[#034a9a]"
                    whileHover={{ scale: 1.05 }}
                  >
                    {spec.value}
                  </motion.p>
                  <motion.p className="text-gray-600 text-sm">
                    {spec.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Categories */}
      {productCategories.map((category, index) => (
        <motion.section
          key={index}
          className="relative z-10 px-4 sm:px-8 lg:px-16 py-12"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-8 sm:mb-12 text-center"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl text-[#034a9a] font-bold mb-4"
                whileHover={{ scale: 1.01 }}
              >
                {category.name}
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-[#034a9a] mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
            >
              {category.products.map((product) => (
                <motion.div
                  key={product.id}
                  className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200 h-fit lg:h-[28rem]`}
                  initial="rest"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  {/* Background effects */}
                  {backgroundEffects && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full bg-blue-500/20"
                            initial={{
                              x: `${Math.random() * 100}%`,
                              y: `${Math.random() * 100}%`,
                              scale: Math.random() * 0.5 + 0.5,
                            }}
                            animate={{
                              x: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                              ],
                              y: [
                                `${Math.random() * 100}%`,
                                `${Math.random() * 100}%`,
                              ],
                              transition: {
                                duration: Math.random() * 20 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                              },
                            }}
                            style={{
                              width: `${Math.random() * 200 + 100}px`,
                              height: `${Math.random() * 200 + 100}px`,
                              filter: "blur(40px)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.div
                    className="relative h-1/2 overflow-hidden "
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -20 },
                    }}
                  >
                    <motion.img
                      src={product.productImg}
                      className="w-full h-full object-contain"
                      alt={product.productName}
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  <motion.div
                    className="relative h-1/2 p-6 flex flex-col"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -30 },
                    }}
                  >
                    <motion.h3
                      className={`text-xl font-bold ${productCardOptions.textColor} mb-3`}
                      initial={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                      whileHover={{
                        textShadow: "0 5px 15px rgba(0,0,0,0.2)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {product.productName}
                    </motion.h3>
                    <motion.p
                      className={`${productCardOptions.descriptionColor} mb-6 relative`}
                      whileHover={{
                        color: "#6497b1",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {product.productDescription}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.p>
                  </motion.div>

                  {product.isNew && <ProductBadge type="new" />}
                  {product.isFeatured && <ProductBadge type="featured" />}
                  {product.isBestSeller && <ProductBadge type="bestSeller" />}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export const HydraulicOilProductLayout = ({
  // Header props
  title = "Hydraulic Oil",
  description = "Premium quality lubricants for all your needs",

  metatitle = "Hydraulic Oil | Lucid Petrochemical – Durable & High‑Performance Fluids",
  meta_Description = "Explore Lucid Petrochemical’s high-performance hydraulic oil—designed for superior lubrication, thermal stability, and wear protection in critical industrial systems.",
  meta_Keywords = "Lucid Petrochemical hydraulic oil, high-performance hydraulic fluids, anti-wear hydraulic oil, thermal stability hydraulic fluid, industrial hydraulic oil India, power transmission lubricant, hydraulic system protection",

  // Main content props
  mainTitle = "Hydraulic Oils",
  companyName = "Lucid Petro chemical",
  companyNameHighlight = true,

  // Paragraphs
  paragraphs = [
    "Lucid Petro chemical develops premium hydraulic oils engineered for maximum system efficiency and component protection. Our advanced formulations meet the exacting demands of modern hydraulic equipment across all industries.",
    "Utilizing cutting-edge additive technology, our oils deliver exceptional wear protection while maintaining optimal fluid cleanliness and thermal stability in demanding operating conditions.",
  ],

  // Features list
  features = [
    "Superior Wear Protection – Anti-wear additives reduce pump wear by up to 50%",
    "Temperature Stability – Maintains viscosity from -20°C to 100°C",
    "Oxidation Resistance – Extends oil life 2x longer than conventional oils",
    "Foam Control – Special additives prevent air entrainment",
    "Seal Compatibility – Protects and conditions elastomeric seals",
    "Industry Compliance – Meets ISO 11158, DIN 51524 standards",
  ],

  // Image section
  mainImage = {
    src: engineOilProduct,
    alt: "Lucid Hydraulic Oil in industrial application",
    overlayTitle: "Engineered for Hydraulic Excellence",
    overlayText:
      "Exceeds global standards including ISO 11158 and OEM specifications",
    certifications: [
      "ISO VG 46",
      "DIN 51524",
      "Denison HF-0",
      "Cincinnati P-68",
    ],
  },

  // Technical specifications
  technicalSpecs = [
    {
      title: "Viscosity @40°C",
      value: "46 cSt",
      desc: "Ideal flow characteristics",
    },
    { title: "Pour Point", value: "-24°C", desc: "Cold-start performance" },
    { title: "Flash Point", value: "220°C+", desc: "High-temperature safety" },
    { title: "Viscosity Index", value: "98", desc: "Temperature stability" },
    { title: "Anti-Wear Rating", value: "AW32", desc: "Pump protection" },
  ],

  // Product categories
  productCategories = [
    {
      name: "Hydraulic Oil",
      products: [
        {
          id: 1,
          productName: "LUCID HYDRAULIC OIL-(32/46/68)",
          productImg: engineOilProduct,
          productDescription:
            "These premium gear oils are extreme-pressure lubricants specifically formulated for automotive applications. Carefully blended from high-quality base oils and enhanced with specialized additives, they provide exceptional protection against wear while delivering superior anti-rust and anti-corrosion properties. Their advanced formulation ensures reliable performance even under the most demanding operating conditions.",
          isFeatured: true,
        },
      ],
    },
  ],

  // Card options
  productCardOptions = {
    heightClass: "h-[32rem]",
    background: "from-gray-50 to-gray-100",
    textColor: "text-[#005b96]",
    descriptionColor: "text-[#03396c]",
    buttonText: "View Product",
  },

  // Animation options
  enableAnimations = true,
  backgroundEffects = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  const imageHover = {
    rest: { scale: 0.9 },
    hover: { scale: 1 },
  };

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  const ProductBadge = ({ type }) => {
    const badgeConfig = {
      new: { text: "New", color: "bg-green-500" },
      featured: { text: "Featured", color: "bg-purple-500" },
      bestSeller: { text: "Best Seller", color: "bg-red-500" },
    };

    const { text, color } = badgeConfig[type] || {};
    if (!text) return null;

    return (
      <motion.div
        className={`absolute top-4 right-4 ${color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
        initial={{ scale: 0.8, rotate: -5 }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        {text}
      </motion.div>
    );
  };

  const renderParagraph = (text) => {
    if (!companyNameHighlight || !text.includes(companyName)) {
      return text;
    }

    const parts = text.split(companyName);
    return (
      <>
        {parts[0]}
        <motion.span
          className="font-bold text-[#034a9a]"
          whileHover={{ scale: 1.05 }}
        >
          {companyName}
        </motion.span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className="relative overflow-hidden min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={meta_Description} />
        <meta name="keywords" content={meta_Keywords} />
      </Helmet>
      {/* Hero Header */}
      <motion.header
        className="w-full py-12 individual__product__section"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-40 relative">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
              variants={slideUp}
            >
              {title}
            </motion.h1>
            <AppBreadcrumbs className="text-teal-100" />
          </div>
        </div>
      </motion.header>
      <div className="">

        {/* Main Content Section */}
        <motion.section
          className=" lg:px-16 xl:px-24  bg-transparent lg:bg-gradient-to-b from-white to-blue-50  w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl text-[#034a9a] font-bold mb-6"
                whileHover={{ scale: 1.01 }}
              >
                {mainTitle}
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-[#034a9a] mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base sm:text-lg text-[#005b96] leading-7 md:leading-8 mb-8"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {renderParagraph(paragraph)}
                  </motion.p>
                ))}

                <motion.ul
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                >
                  {features.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-[#034a9a] mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <span className="text-[#005b96] text-base sm:text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034a9a] to-transparent opacity-90"></div>
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {mainImage.overlayTitle}
                  </motion.h3>
                  <motion.p className="mb-4">{mainImage.overlayText}</motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {mainImage.certifications.map((cert, i) => (
                      <motion.span
                        key={i}
                        className="bg-white/20 px-3 py-1 rounded-full text-xs"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              className="mt-16 bg-white p-6 sm:p-8 rounded-xl shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.h3
                className="text-2xl font-bold text-[#034a9a] mb-6"
                whileHover={{ scale: 1.01 }}
              >
                Technical Specifications
              </motion.h3>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {technicalSpecs.map((spec, i) => (
                  <motion.div
                    key={i}
                    className="border-l-4 border-[#034a9a] pl-4 py-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.h4
                      className="font-bold text-[#005b96] text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                    >
                      {spec.title}
                    </motion.h4>
                    <motion.p
                      className="text-xl sm:text-2xl font-bold text-[#034a9a]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {spec.value}
                    </motion.p>
                    <motion.p className="text-gray-600 text-sm">
                      {spec.desc}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Categories */}
        {productCategories.map((category, index) => (
          <motion.section
            key={index}
            className="relative z-10 px-4 sm:px-8 lg:px-16 py-12"
            variants={containerVariants}
          >
            <div className="w-full mx-auto">
              <motion.div
                className="mb-8 sm:mb-12 text-center"
                variants={itemVariants}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-[#034a9a] font-bold mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  {category.name}
                </motion.h2>
                <motion.div
                  className="w-20 h-1 bg-[#034a9a] mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>

              <motion.div
                className="flex flex-row justify-center gap-6 sm:gap-8"
                variants={containerVariants}
              >
                {category.products.map((product) => (
                  <motion.div
                    key={product.id}
                    className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200 w-full h-fit lg:h-[34rem] lg:w-[540px]`}
                    initial="rest"
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    {/* Background effects */}
                    {backgroundEffects && (
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute rounded-full bg-blue-500/20"
                              initial={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                scale: Math.random() * 0.5 + 0.5,
                              }}
                              animate={{
                                x: [
                                  `${Math.random() * 100}%`,
                                  `${Math.random() * 100}%`,
                                ],
                                y: [
                                  `${Math.random() * 100}%`,
                                  `${Math.random() * 100}%`,
                                ],
                                transition: {
                                  duration: Math.random() * 20 + 10,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  ease: "linear",
                                },
                              }}
                              style={{
                                width: `${Math.random() * 200 + 100}px`,
                                height: `${Math.random() * 200 + 100}px`,
                                filter: "blur(40px)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <motion.div
                      className="relative h-1/2 overflow-hidden bg"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -20 },
                      }}
                    >
                      <motion.img
                        src={product.productImg}
                        className="w-full h-full object-contain"
                        alt={product.productName}
                        loading="lazy"
                        variants={imageHover}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <motion.div
                      className="relative h-full p-6 flex flex-col"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -30 },
                      }}
                    >
                      <motion.h3
                        className={`text-xl font-bold ${productCardOptions.textColor} mb-3`}
                        initial={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                        whileHover={{
                          textShadow: "0 5px 15px rgba(0,0,0,0.2)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {product.productName}
                      </motion.h3>
                      <motion.p
                        className={`${productCardOptions.descriptionColor} mb-6 relative`}
                        whileHover={{
                          color: "#6497b1",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {product.productDescription}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.p>
                    </motion.div>

                    {product.isNew && <ProductBadge type="new" />}
                    {product.isFeatured && <ProductBadge type="featured" />}
                    {product.isBestSeller && <ProductBadge type="bestSeller" />}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export const AutomotiveGreaseProductLayout = ({
  // Header props
  title = "Automotive Grease",
  description = "High-performance lubricants for all automotive applications",

  metatitle = "Automotive Grease | Lucid Petrochemical – High-Performance Grease for Vehicles",
  meta_Description = "Lucid Petrochemical offers high-performance automotive grease designed for superior lubrication, wear resistance, and protection in all vehicle components and conditions.",
  meta_Keywords = "Lucid Petrochemical automotive grease, vehicle grease India, high-performance grease, wheel bearing grease, chassis grease, multipurpose automotive lubricants, heavy-duty grease, vehicle maintenance grease, grease manufacturers India",

  // Main content props
  mainTitle = "Premium Automotive Greases",
  companyName = "Lucid Petrochemical",
  companyNameHighlight = true,

  // Paragraphs
  paragraphs = [
    "Lucid Petrochemical formulates advanced automotive greases that provide superior protection and performance in all vehicle components. Our specialized compounds are engineered to withstand extreme pressures and temperatures while maintaining optimal lubrication.",
    "Using cutting-edge thickener technology and premium additives, our greases deliver long-lasting protection against wear, corrosion, and oxidation in both passenger and commercial vehicles.",
  ],

  // Features list
  features = [
    "Extreme Pressure Protection – Withstands heavy loads up to 5000N",
    "Temperature Range – Effective from -30°C to 180°C",
    "Water Resistance – NLGI Grade 2 repels moisture and prevents washout",
    "Long Service Life – Lithium complex thickener extends relubrication intervals",
    "Corrosion Prevention – Special additives protect against rust and oxidation",
    "Compatibility – Works with most seal materials and existing greases",
  ],

  // Image section
  mainImage = {
    src: engineOilProduct,
    alt: "Lucid Automotive Grease application",
    overlayTitle: "Engineered for Peak Performance",
    overlayText: "Meets and exceeds NLGI GC-LB and ASTM D4950 standards",
    certifications: ["NLGI GC-LB", "ASTM D4950", "SAE J310", "DIN 51502"],
  },

  // Technical specifications
  technicalSpecs = [
    { title: "NLGI Grade", value: "2", desc: "Optimal consistency" },
    {
      title: "Dropping Point",
      value: "190°C+",
      desc: "High-temperature stability",
    },
    {
      title: "Worked Penetration",
      value: "265-295",
      desc: "Standard consistency",
    },
    {
      title: "Four Ball Test",
      value: "0.5mm wear scar",
      desc: "Wear protection",
    },
    { title: "Copper Corrosion", value: "1A", desc: "Non-corrosive to metals" },
  ],

  // Product categories
  productCategories = [
    {
      name: "Automotive Greases",
      products: [
        {
          id: 1,
          productName: "LUCID PREMIUM GREASE MP-3",
          productImg: engineOilProduct,
          productDescription:
            "Our multi-purpose lithium complex grease provides exceptional protection for wheel bearings, chassis points, and universal joints. Formulated with extreme pressure additives and anti-wear agents for maximum component life in all driving conditions.",
        },
        {
          id: 2,
          productName: "LUCID AP-3",
          productImg: engineOilProduct,
          productDescription:
            "Advanced aluminum complex grease specifically formulated for marine and agricultural applications. Provides exceptional water resistance and corrosion protection in wet environments, while maintaining excellent mechanical stability under heavy loads.",
        },
        {
          id: 3,
          productName: "LUCID EP & EPL-2",
          productImg: engineOilProduct,
          productDescription:
            "Heavy-duty extreme pressure grease with lithium complex thickener. Ideal for high-load applications like truck wheel bearings and construction equipment. Contains solid lubricants for additional protection under shock loads.",
        },
        {
          id: 4,
          productName: "LUCID GEL GREASE NLGI-3",
          productImg: engineOilProduct,
          productDescription:
            "Stiff, fiber-reinforced grease designed for centralized lubrication systems and high-speed applications. Its unique gel structure prevents leakage while ensuring smooth lubrication of gears and bearings in demanding conditions.",
        },
      ],
    },
  ],

  // Card options
  productCardOptions = {
    heightClass: "h-[32rem]",
    background: "from-gray-50 to-gray-100",
    textColor: "text-[#005b96]",
    descriptionColor: "text-[#03396c]",
    buttonText: "View Product",
  },

  // Animation options
  enableAnimations = true,
  backgroundEffects = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.key]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
  };

  const imageHover = {
    rest: { scale: 0.9 },
    hover: { scale: 1 },
  };

  if (isLoading) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  const ProductBadge = ({ type }) => {
    const badgeConfig = {
      new: { text: "New", color: "bg-green-500" },
      featured: { text: "Featured", color: "bg-purple-500" },
      bestSeller: { text: "Best Seller", color: "bg-red-500" },
    };

    const { text, color } = badgeConfig[type] || {};
    if (!text) return null;

    return (
      <motion.div
        className={`absolute top-4 right-4 ${color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
        initial={{ scale: 0.8, rotate: -5 }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        {text}
      </motion.div>
    );
  };

  const renderParagraph = (text) => {
    if (!companyNameHighlight || !text.includes(companyName)) {
      return text;
    }

    const parts = text.split(companyName);
    return (
      <>
        {parts[0]}
        <motion.span
          className="font-bold text-[#034a9a]"
          whileHover={{ scale: 1.05 }}
        >
          {companyName}
        </motion.span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className="relative  overflow-hidden min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={meta_Description} />
        <meta name="keywords" content={meta_Keywords} />
      </Helmet>

      {/* Hero Header */}
      <motion.header
        className="w-full py-12 individual__product__section"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-40 relative">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
              variants={slideUp}
            >
              {title}
            </motion.h1>
            <AppBreadcrumbs className="text-teal-100" />
          </div>
        </div>
      </motion.header>
      <div className="">
        {/* Main Content Section */}
        <motion.section
          className=" lg:px-16 xl:px-24  bg-transparent lg:bg-gradient-to-b from-white to-blue-50  w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12   "
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl text-[#034a9a] font-bold mb-6"
                whileHover={{ scale: 1.01 }}
              >
                {mainTitle}
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-[#034a9a] mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base sm:text-lg text-[#005b96] leading-7 md:leading-8 mb-8"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {renderParagraph(paragraph)}
                  </motion.p>
                ))}

                <motion.ul
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                >
                  {features.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-[#034a9a] mt-1 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <span className="text-[#005b96] text-base sm:text-lg">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034a9a] to-transparent opacity-90"></div>
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {mainImage.overlayTitle}
                  </motion.h3>
                  <motion.p className="mb-4">{mainImage.overlayText}</motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {mainImage.certifications.map((cert, i) => (
                      <motion.span
                        key={i}
                        className="bg-white/20 px-3 py-1 rounded-full text-xs"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              className="mt-16 bg-white p-6 sm:p-8 rounded-xl shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.h3
                className="text-2xl font-bold text-[#034a9a] mb-6"
                whileHover={{ scale: 1.01 }}
              >
                Technical Specifications
              </motion.h3>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {technicalSpecs.map((spec, i) => (
                  <motion.div
                    key={i}
                    className="border-l-4 border-[#034a9a] pl-4 py-2"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.h4
                      className="font-bold text-[#005b96] text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                    >
                      {spec.title}
                    </motion.h4>
                    <motion.p
                      className="text-xl sm:text-2xl font-bold text-[#034a9a]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {spec.value}
                    </motion.p>
                    <motion.p className="text-gray-600 text-sm">
                      {spec.desc}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Categories */}
        {productCategories.map((category, index) => (
          <motion.section
            key={index}
            className="relative z-10 px-4 sm:px-8 lg:px-16 py-12"
            variants={containerVariants}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="mb-8 sm:mb-12 text-center"
                variants={itemVariants}
              >
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-[#034a9a] font-bold mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  {category.name}
                </motion.h2>
                <motion.div
                  className="w-20 h-1 bg-[#034a9a] mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 sm:gap-8"
                variants={containerVariants}
              >
                {category.products.map((product) => (
                  <motion.div
                    key={product.id}
                    className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200 h-fit lg:h-[24rem]`}
                    initial="rest"
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    {/* Background effects */}
                    {backgroundEffects && (
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute rounded-full bg-blue-500/20"
                              initial={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                scale: Math.random() * 0.5 + 0.5,
                              }}
                              animate={{
                                x: [
                                  `${Math.random() * 100}%`,
                                  `${Math.random() * 100}%`,
                                ],
                                y: [
                                  `${Math.random() * 100}%`,
                                  `${Math.random() * 100}%`,
                                ],
                                transition: {
                                  duration: Math.random() * 20 + 10,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  ease: "linear",
                                },
                              }}
                              style={{
                                width: `${Math.random() * 200 + 100}px`,
                                height: `${Math.random() * 200 + 100}px`,
                                filter: "blur(40px)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <motion.div
                      className="relative h-1/2 overflow-hidden "
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -20 },
                      }}
                    >
                      <motion.img
                        src={product.productImg}
                        className="w-full h-full object-contain"
                        alt={product.productName}
                        loading="lazy"
                        variants={imageHover}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <motion.div
                      className="relative h-1/2 p-6 flex flex-col"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -30 },
                      }}
                    >
                      <motion.h3
                        className={`text-xl font-bold ${productCardOptions.textColor} mb-3`}
                        initial={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                        whileHover={{
                          textShadow: "0 5px 15px rgba(0,0,0,0.2)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {product.productName}
                      </motion.h3>
                      <motion.p
                        className={`${productCardOptions.descriptionColor} mb-6 relative`}
                        whileHover={{
                          color: "#6497b1",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {product.productDescription}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.p>
                    </motion.div>

                    {product.isNew && <ProductBadge type="new" />}
                    {product.isFeatured && <ProductBadge type="featured" />}
                    {product.isBestSeller && <ProductBadge type="bestSeller" />}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};


export const EnquiryForm = ({ productName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: `Enquiry about ${productName}`,
    message: `I would like to get more information about ${productName}. Please contact me with details.`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Close the form after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-800">Enquiry Form</h2>
          <motion.button
            onClick={onClose}
            className="text-blue-400 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-700 mb-1"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-blue-300 transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-700 mb-1"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-blue-300 transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-blue-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-blue-300 transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-blue-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-blue-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-blue-300 transition-all duration-200"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-2">
            <motion.button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-blue-300 rounded-lg shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              whileHover={{
                y: -2,
                boxShadow: "0 4px 8px rgba(59, 130, 246, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 relative overflow-hidden transition-all duration-200"
              whileHover={{
                y: -2,
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", transition: { duration: 0.7 } }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Submit Enquiry
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
