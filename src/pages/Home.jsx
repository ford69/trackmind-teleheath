import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const BackgroundSlideshow = () => {
  const images = [
    '/images/bg-1.jpg',
    '/images/bg-2.jpg',
    '/images/bg-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[3000ms] ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-blue-900/90 z-10" />
    </div>
  );
};

const Home = () => {
  const services = [
    {
      icon: FaBrain,
      title: 'Psychiatric Evaluation',
      description: 'Comprehensive mental health assessments to understand your unique needs.',
    },
    {
      icon: FaUserMd,
      title: 'Medication Management',
      description: 'Expert medication management to help you achieve optimal mental health.',
    },
    {
      icon: FaHeartbeat,
      title: 'Therapy Services',
      description: 'Individual therapy sessions focused on your personal growth and healing.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <BackgroundSlideshow />

        {/* Content */}
        <div className="relative py-32 lg:py-48 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to Trackmind Psychiatry
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 drop-shadow-md">
                Compassionate psychiatric care for a better tomorrow
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900">Our Services</h2>
            <p className="mt-4 text-xl text-purple-700">
              Comprehensive mental health care tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-purple-500"
              >
                <service.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-purple-900 mb-2">{service.title}</h3>
                <p className="text-purple-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Conditions We Treat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Depression",
                img: "/images/Depression-1.jpg",
              },
              {
                name: "Anxiety",
                img: "/images/Anxiety.jpg",
              },
              {
                name: "Bipolar Disorder",
                img: "/images/BPD.webp",
              },
              {
                name: "PTSD",
                img: "/images/PTSD.jpg",
              },
              {
                name: "OCD",
                img: "/images/OCD.jpg",
              },
              {
                name: "ADHD",
                img: "/images/ADHD.jpg",
              },
            ].map((condition, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-purple-600 p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={condition.img}
                  alt={condition.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{condition.name}</h3>
                <p className="text-purple-600 text-sm">
                  Learn more about how we help with {condition.name.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/conditions"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
          >
            View All Conditions
          </Link>
        </div>
      </section>



      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">
                Expert Mental Health Care
              </h2>
              <p className="text-purple-700 mb-6">
                At Trackmind Psychiatry, we believe in providing personalized, evidence-based psychiatric care in a comfortable and supportive environment. Our experienced team of mental health professionals is dedicated to helping you achieve optimal mental wellness.
              </p>
              <Link
                to="/about"
                className="text-purple-600 font-medium hover:text-purple-800 flex items-center"
              >
                Learn more about us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
                alt="Mental health professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey to Better Mental Health?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Schedule your consultation today and take the first step towards wellness.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-100 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
//vanhelsing