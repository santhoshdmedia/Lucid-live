import { useState, useEffect } from "react";

// Employee images
import emp1 from "../assets/employees/emp1.webp";
import emp2 from "../assets/employees/emp2.webp";
import emp3 from "../assets/employees/emp3.webp";

// Factory images
import fac1 from "../assets/factory/fac1.webp";
import fac2 from "../assets/factory/fac2.webp";
import fac3 from "../assets/factory/fac3.webp";
import fac4 from "../assets/factory/fac4.webp";
import fac5 from "../assets/factory/fac5.webp";
import fac6 from "../assets/factory/fac6.webp";
import fac7 from "../assets/factory/fac7.webp";
import fac8 from "../assets/factory/fac8.webp";
import fac9 from "../assets/factory/fac9.webp";
import fac10 from "../assets/factory/fac10.webp";
import fac11 from "../assets/factory/fac11.webp";
import fac12 from "../assets/factory/fac12.webp";
import fac13 from "../assets/factory/fac13.webp";
import fac14 from "../assets/factory/fac14.webp";
import fac15 from "../assets/factory/fac15.webp";
import fac16 from "../assets/factory/fac16.webp";
import fac17 from "../assets/factory/fac17.webp";
import fac18 from "../assets/factory/fac18.webp";
import fac19 from "../assets/factory/fac19.webp";
import fac20 from "../assets/factory/fac20.webp";
import fac21 from "../assets/factory/fac21.webp";
import fac22 from "../assets/factory/fac22.webp";
import fac23 from "../assets/factory/fac23.webp";
import fac24 from "../assets/factory/fac24.webp";

// import { FaCheckCircle,FaIndustry } from "react-icons/fa";

// videos
// import Paking from "../assets/video/video_1.mp4";
import exportPackages from "../assets/video/video_2.mp4";
import factoreyInteriour from "../assets/video/video_3.mp4";
import interiour from "../assets/video/video_4.mp4";
import outer from "../assets/video/video_5.mp4";
import outer_two from "../assets/video/video_6.mp4";
// import work from "../assets/video/work_progress.mp4";

const galleryItems = [
  // Employee images
  { id: 1, src: emp1, alt: "", category: "employees", type: "image" },
  { id: 2, src: emp2, alt: "", category: "employees", type: "image" },
  { id: 3, src: emp3, alt: "", category: "employees", type: "image" },

  // Factory images
  {
    id: 4,
    src: fac1,
    alt: "Factory overview",
    category: "factory",
    type: "image",
  },
  {
    id: 5,
    src: fac2,
    alt: "Production area",
    category: "factory",
    type: "image",
  },
  { id: 6, src: fac3, alt: "Machinery", category: "factory", type: "image" },
  {
    id: 7,
    src: fac4,
    alt: "Quality control",
    category: "factory",
    type: "image",
  },
  {
    id: 8,
    src: fac5,
    alt: "Packaging section",
    category: "factory",
    type: "image",
  },
  {
    id: 9,
    src: fac6,
    alt: "Storage facility",
    category: "factory",
    type: "image",
  },
  {
    id: 10,
    src: fac7,
    alt: "Research lab",
    category: "factory",
    type: "image",
  },
  {
    id: 11,
    src: fac8,
    alt: "Worker in action",
    category: "factory",
    type: "image",
  },
  {
    id: 12,
    src: fac9,
    alt: "Safety equipment",
    category: "factory",
    type: "image",
  },
  {
    id: 13,
    src: fac10,
    alt: "Loading bay",
    category: "factory",
    type: "image",
  },
  {
    id: 14,
    src: fac11,
    alt: "Factory exterior",
    category: "factory",
    type: "image",
  },
  {
    id: 15,
    src: fac12,
    alt: "Control room",
    category: "factory",
    type: "image",
  },
  {
    id: 16,
    src: fac13,
    alt: "Production line",
    category: "factory",
    type: "image",
  },
  {
    id: 17,
    src: fac14,
    alt: "Raw materials",
    category: "factory",
    type: "image",
  },
  {
    id: 18,
    src: fac15,
    alt: "Finished products",
    category: "factory",
    type: "image",
  },
  {
    id: 19,
    src: fac16,
    alt: "Factory interior",
    category: "factory",
    type: "image",
  },
  {
    id: 20,
    src: fac17,
    alt: "Assembly line",
    category: "factory",
    type: "image",
  },
  {
    id: 21,
    src: fac18,
    alt: "Quality assurance",
    category: "factory",
    type: "image",
  },
  { id: 22, src: fac19, alt: "Logistics", category: "factory", type: "image" },
  {
    id: 23,
    src: fac20,
    alt: "Maintenance",
    category: "factory",
    type: "image",
  },
  {
    id: 24,
    src: fac21,
    alt: "Final inspection",
    category: "factory",
    type: "image",
  },
  { id: 25, src: fac22, alt: "Shipping", category: "factory", type: "image" },
  { id: 26, src: fac23, alt: "Warehouse", category: "factory", type: "image" },
  {
    id: 27,
    src: fac24,
    alt: "Factory overview",
    category: "factory",
    type: "image",
  },
  // Video
  {
    id: 28,
    src: exportPackages,
    alt: "Detailed video of the facility's interior highlighting production lines and quality control",
    category: "video",
    type: "video",
    thumbnail: fac20,
  },
  {
    id: 29,
    src: factoreyInteriour,
    alt: "Video showing the packaging process of finished products for international export",
    category: "video",
    type: "video",
    thumbnail: fac16,
  },
  {
    id: 30,
    src: interiour,
    alt: "Video tour of the factory interior showing modern manufacturing equipment in operation",
    category: "video",
    type: "video",
    thumbnail: fac12,
  },
  {
    id: 31,
    src: outer,
    alt: "The Smart Factory: A Glimpse into Advanced Manufacturin",
    category: "video",
    type: "video",
    thumbnail: fac12,
  },
  {
    id: 32,
    src: outer_two,
    alt: "Exploring the Future of Manufacturing: A High-Tech Factory Tour",
    category: "video",
    type: "video",
    thumbnail: fac12,
  },
];

import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaIndustry, FaEye, FaPhoneAlt } from "react-icons/fa";
import { AppBreadcrumbs, LucidLoader } from "../components/layout";

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const categories = [
    "all",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  useEffect(() => {
    setIsLoadingPage(true);
    const timer = setTimeout(() => setIsLoadingPage(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const itemsToShow = filteredItems.slice(0, visibleItems);

  // Handlers
  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateItems = (direction) => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 12);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (!selectedItem) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        navigateItems("prev");
        break;
      case "ArrowRight":
        navigateItems("next");
        break;
      default:
        break;
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedItem(null);
    setVisibleItems(12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoadingPage) {
    return <LucidLoader nav="Product Catalog" duration={800} />;
  }

  return (
    <section
      className="min-h-screen bg-gray-50 pb-12"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header Section */}
      <header className="w-full py-10 Gallery__section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-50">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold !text-white mb-2"
          >
            Our Gallery
          </motion.h1>
          <AppBreadcrumbs />
        </div>
      </header>

      {/* Infrastructure Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className=" overflow-hidden relative">
          <div className="relative z-10  ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.h2 className="text-4xl text-center lg:text-left md:text-4xl font-bold text-[#034a9a] my-6">
                  World-Class Infrastructure
                </motion.h2>

                <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
                  At Lucid Petro Chemical, our edge lies in the seamless blend
                  of top-tier functionality and uncompromising quality — made
                  possible through our robust infrastructure. Spanning across
                  expansive land, our facility is equipped with advanced Q.C.
                  and R&D laboratories featuring state-of-the-art testing
                  equipment, operated by a team of highly skilled chemists and
                  engineers.
                </motion.p>

                <motion.ul className="space-y-4">
                  {[
                    "Advanced Q.C. and R&D laboratories",
                    "700 KL base oil storage capacity",
                    "Automated precision production lines",
                    "Zero-defect manufacturing process",
                    "State-of-the-art testing equipment",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <FaCheckCircle className="text-[#034a9a] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img
                  src={fac12}
                  alt="Our Manufacturing Facility"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034a9a]/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <FaIndustry className="text-3xl mb-2" />
                    <p className="font-medium">Our Manufacturing Facility</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Category Filters */}
        <motion.div
          className="flex justify-center mb-12 flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full capitalize text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#034a9a] text-white shadow-md"
                  : "bg-white text-[#034a9a] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.replace("-", " ")}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        {itemsToShow.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {itemsToShow.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div
                    className="relative group overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(item, index)}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-64 overflow-hidden">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          poster={item.thumbnail}
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        {item.type === "image" ? (
                          <FaEye className="text-white text-xl" />
                        ) : (
                          <svg
                            className="h-6 w-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {item.type === "video" && (
                    <h3 className="text-lg font-semibold text-center py-4 px-4 text-gray-800">
                      {item.alt}
                    </h3>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleItems < filteredItems.length && (
              <div className="text-center mt-12">
                <motion.button
                  onClick={loadMoreItems}
                  disabled={isLoading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-lg flex items-center justify-center mx-auto min-w-[180px] ${
                    isLoading
                      ? "bg-[#034a9a]/90"
                      : "bg-[#034a9a] hover:bg-[#034a9a]/90"
                  } text-white shadow-md transition-all`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </motion.button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No items found in this category
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                aria-label="Close lightbox"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
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
              </button>

              <button
                onClick={() => navigateItems("prev")}
                className="absolute left-6 text-white hover:text-gray-300 transition-colors"
                aria-label="Previous item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="max-w-5xl w-full">
                {selectedItem.type === "image" ? (
                  <motion.img
                    key={`image-${currentIndex}`}
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full max-h-[80vh] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.video
                    key={`video-${currentIndex}`}
                    src={selectedItem.src}
                    className="w-full max-h-[80vh]"
                    controls
                    autoPlay
                    muted
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <p className="text-white text-center mt-4 text-lg">
                  {selectedItem.alt}
                </p>
              </div>

              <button
                onClick={() => navigateItems("next")}
                className="absolute right-6 text-white hover:text-gray-300 transition-colors"
                aria-label="Next item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
