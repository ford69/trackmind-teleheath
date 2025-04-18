import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMeh, FiFrown, FiAlertTriangle, FiSun, FiMoon, FiActivity,
  FiAlertCircle, FiWind, FiUserCheck, FiEyeOff
} from "react-icons/fi";

// Map icons to each condition
const conditionData = [
  { name: "Depression", icon: FiFrown },
  { name: "Anxiety", icon: FiAlertTriangle },
  { name: "Bipolar Disorder", icon: FiSun },
  { name: "PTSD", icon: FiAlertCircle },
  { name: "OCD", icon: FiActivity },
  { name: "ADHD", icon: FiWind },
  { name: "Schizophrenia", icon: FiMeh },
  { name: "Panic Disorder", icon: FiEyeOff },
  { name: "Borderline Personality", icon: FiUserCheck },
  { name: "Insomnia", icon: FiMoon }
];

const Conditions = () => {
  const [search, setSearch] = useState("");

  const filteredConditions = conditionData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section with Animation */}
      <motion.section
        className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white py-24"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Conditions We Treat
          </motion.h1>
          <motion.p
            className="text-xl text-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explore a range of mental health conditions we specialize in and how we can support your journey to wellness.
          </motion.p>
        </div>
      </motion.section>

      {/* Search Input */}
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <input
          type="text"
          placeholder="Search conditions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />
      </div>

      {/* Conditions Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">All Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredConditions.length > 0 ? (
            filteredConditions.map(({ name, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/conditions/${name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-start"
                >
                  <Icon className="text-3xl text-purple-700 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-sm">Click to learn more about {name}.</p>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-purple-600 col-span-full mt-10">No conditions match your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Conditions;
