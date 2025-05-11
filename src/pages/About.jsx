import { FaUserMd, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: FaUserMd,
      title: 'Progress over Perfection',
      description: 'Every step forward in your mental health journey matters',
    },
    {
      icon: FaHeart,
      title: 'Integrity Always',
      description: 'We uphold the highest ethical standards in all our interactions and treatments.',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Empathy First',
      description: 'We prioritize understanding and compassion in every interaction.',
    },
  ];

  return (
    <div>

<section className="relative bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat py-20">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Text Content */}
    <motion.div
      className="text-center md:text-left md:flex-1 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
       Find Out More About Us
      </h1>
      <p className="text-lg mb-6 max-w-xl">
        At TrackMind Psychiatry, we are committed to helping you navigate your mental health journey with compassion, expertise, and personalized care.
      </p>
      {/* <a
        href="/contact"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
      >
        Meet Our Team
      </a> */}
    </motion.div>

    {/* Image Content */}
    {/* <motion.div
      className="md:flex-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
    >
      <img
        src="/images/logo.png"
        alt="Mental wellness"
        className="w-full rounded-lg object-cover"
      />
    </motion.div> */}
  </div>
</section>


      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Intro */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trackmind Psychiatry is dedicated to providing exceptional psychiatric care and mental health services in a supportive, understanding environment.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At TrackMind Psychiatry, our mission is to empower individuals to achieve mental clarity, resilience, and emotional balance by fostering a compassionate, goal-oriented approach to mental health care.
              </p>
              <p className="text-gray-600">
                With a focus on personalized treatment and unwavering support, we aim to inspire a journey toward mental wellness and peak potential.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                alt="Mental health support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <img
                src="/images/vision.png"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                At TrackMind Psychiatry, our vision is to create a world where every individual has the support and tools to achieve mental wellness, unlock their potential, and flourish in their personal journey.
              </p>
              <p className="text-gray-600">
                We aspire to be a trusted leader in compassionate, forward-focused psychiatric care, empowering our community to make strides toward a brighter, healthier future.
              </p>
            </div>
          </div>

          {/* Meet Our Providers Section */}
          <div className="bg-purple-50 rounded-xl py-12 px-6 md:px-12 mb-16 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/lilian.jpeg"
                  alt="Dr. Lilian Bor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Meet Our Providers</h2>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Lilian Bor DNP, APRN, PMHNP-BC</h3>
                <p className="text-purple-800 mb-4">
                  Dr. Lilian Bor is a board-certified Psychiatric & Mental Health Nurse Practitioner with over 13 years of healthcare experience. She is known for her empathetic, patient-centered approach in treating a wide range of mental health conditions.
                </p>
                <p className="text-purple-800 mb-4">
                  She holds degrees from the University of Cincinnati, University of Mary, University of Texas at Arlington, and Chatham University. Her experience spans rural healthcare, the U.S. Army, and both inpatient and outpatient psychiatry.
                </p>
                <p className="text-purple-800">
                  Bor provides compassionate, non-judgmental care tailored to meet each individual’s unique needs.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-purple-500"
                >
                  <value.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to schedule your consultation and begin your journey to better mental health.
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
