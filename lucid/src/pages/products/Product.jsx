import React, { useEffect, useState, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";
import { AppBreadcrumbs } from "../../components/layout";
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
  title = "Automotive Engine Oil",
  description = "Premium quality lubricants for all your needs",

  // Main content props
  mainTitle = "Premium Automotive Engine Oils",
  companyName = "Lucid Petro chemocal",
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
    overlayText:
      "Meeting global standards including API SP/SN, ACEA A3/B4, and OEM specifications",
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

  const CommercialsimilarProducts = [
    {
      id: 1,
      productName: "LUCID SUPER 20W-40 (API CF-4)",
      productImg: engineOilProduct,
      productDescription:
        "Specially formulated for heavy-duty diesel engines, this oil provides superior protection against wear and deposits. Its advanced additive package ensures optimal performance in extreme temperatures and extended drain intervals.",
      isFeatured: true,
      badge: "commercial",
    },
    {
      id: 2,
      productName: "LUCID TURBO 15W-40 (API CI-4)",
      productImg: engineOilProduct,
      productDescription:
        "Engineered for turbocharged diesel engines, this high-performance oil reduces turbocharger deposits while providing excellent soot control. Maintains viscosity stability under severe operating conditions.",
      isFeatured: true,
      badge: "commercial",
    },
    {
      id: 3,
      productName: "LUCID ULTIMATE 15W-40 (API-CH-4)",
      productImg: engineOilProduct,
      productDescription:
        "Premium formulation designed for modern diesel engines with EGR systems. Provides enhanced protection against acid corrosion and maintains engine cleanliness even with high sulfur fuels.",
      isFeatured: true,
      badge: "commercial",
    },
    {
      id: 4,
      productName: "LUCID EXTREME 15W-40 (API-CF-4)",
      productImg: engineOilProduct,
      productDescription:
        "High-quality diesel engine oil that excels in both high and low temperature operations. Its robust formulation prevents oil breakdown in severe service applications.",
      isFeatured: true,
      badge: "commercial",
    },
    {
      id: 5,
      productName: "Lucid Extreme 20W50",
      productImg: engineOilProduct,
      productDescription:
        "Specially blended for high-performance 4-stroke engines, this oil provides superior film strength and thermal stability. Ideal for engines operating under heavy loads or in hot climates.",
      isFeatured: true,
      badge: "Four stroke",
    },
    {
      id: 6,
      productName: "Lucid Super 20W40",
      productImg: engineOilProduct,
      productDescription:
        "Advanced 4-stroke engine oil with enhanced anti-wear additives for improved engine protection. Maintains excellent lubrication properties throughout the oil change interval.",
      isFeatured: true,
      badge: "Four stroke",
    },
  ];

  const FourStrokesimilarProducts = [
    {
      id: 1,
      productName: "Lucid Extreme 20W50",
      productImg: engineOilProduct,
      productDescription:
        "The two main types of lubricants are oils and greases. Both aim to lubricate equipment and prevent damage through metal to metal contact. However, there are a few key differences in how they are used.",
      isFeatured: true,
    },
  ];

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
        className= "lg:px-16 xl:px-24  bg-transparent lg:bg-gradient-to-b from-white to-blue-50  w-full px-4 sm:px-6 pb-16 lg:pb-24 py-12"
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
        {/* Commercial Engine Oil */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <motion.h1
            className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-[#034a9a] font-bold font-[Roboto] mb-6"
            whileHover={{ scale: 1.01 }}
          >
            Commercial Engine Oil
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#034a9a] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
          variants={containerVariants}
        >
          {CommercialsimilarProducts.map((product) => (
            <motion.div
              key={product.id}
              className="group relative h-[32rem] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl hover:shadow-3xl border-2 border-white/20"
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

              {/* Product image */}
              <motion.div
                className="relative h-1/2 overflow-hidden"
                // variants={{
                //   rest: { y: 0 },
                //   hover: { y: -20 },
                // }}
              >
                <motion.img
                  src={product.productImg}
                  className="w-full h-full object-contain"
                  alt={product.productName}
                  loading="lazy"
                  // variants={imageHover}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Product info */}
              <motion.div
                className="relative h-1/2 p-8 flex flex-col justify-between"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -30 },
                }}
              >
                <div>
                  <motion.h3
                    className="text-2xl font-extrabold text-[#005b96] mb-3"
                    initial={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                    whileHover={{
                      textShadow: "0 5px 15px rgba(0,0,0,0.2)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {product.productName}
                  </motion.h3>

                  <motion.p
                    className="text-[#03396c] mb-6 relative"
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
                </div>
              </motion.div>

              {/* Featured badge */}
              {product.badge && (
                <motion.div
                  className={`absolute top-6 right-6 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    product.badge === "commercial"
                      ? "bg-gradient-to-r from-blue-500 to-blue-700"
                      : "bg-gradient-to-r from-green-500 to-green-700"
                  }`}
                  initial={{ scale: 0.8 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  {product.badge === "commercial" ? "COMMERCIAL" : "4-STROKE"}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Stroke Engine Oil */}
      </motion.section>
    </motion.div>
  );
};

export const Gearoil = ({
  // Header props
  title = "Gear Oil",
  description = "Premium quality lubricants for all your needs",

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
                  className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200`}
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
                  className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200 w-full  lg:w-[540px]`}
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
                  className={`group relative ${productCardOptions.heightClass} rounded-xl overflow-hidden bg-gradient-to-br ${productCardOptions.background} shadow-lg hover:shadow-xl border border-gray-200`}
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
