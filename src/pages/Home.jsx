import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaUserMd, FaHeartbeat, FaSadTear, FaBalanceScale, FaBolt, FaPuzzlePiece, FaIdBadge, FaLock, FaMedal } from 'react-icons/fa';
import { HiUserGroup, HiUserCircle, HiGlobeAlt } from 'react-icons/hi';

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
      title: 'Psychiatric Evaluation & Medication Management',
      description: 'We offer thorough psychiatric evaluations to understand your unique mental health needs. Based on these assessments, we develop individualized treatment plans that may include medication. Our ongoing medication management ensures your treatment is safe, effective, and adjusted as needed to support your well-being.',
    },
    {
      icon: FaUserMd,
      title: 'Support for co-occurring disorders',
      description: 'Comprehensive care for individuals facing both mental health and substance use challenges, offering integrated treatment to promote lasting recovery and overall well-being.',
    },
    {
      icon: FaHeartbeat,
      title: 'Therapy Services',
      description: 'Supportive therapy sessions focused on your personal growth and healing.',
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
                Welcome to TrackMind Psychiatric & Mental Health Services
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

      {/* Experience & Credentials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "13+ Years of Experience",
                icon: FaUserMd,
                desc: "A decade-plus of trusted mental health care.",
              },
              {
                name: "Licensed Providers",
                icon: FaIdBadge,
                desc: "Board-certified professionals you can rely on.",
              },
              {
                name: "HIPAA Compliant",
                icon: FaLock,
                desc: "Your privacy and security are always protected.",
              },
              {
                name: "Veteran-Owned",
                icon: FaMedal,
                desc: "Proudly owned and operated by a U.S. Veteran.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                <item.icon className="text-4xl text-purple-700 mb-4" />
                <h3 className="text-xl font-semibold text-purple-800 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <img
              src="/images/tele-health-1.jpg"
              alt="Trackmind Team"
              className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[450px]"
            />
          </div>

          {/* Text */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At TrackMind Psychiatric & Mental Health Services, we are a dedicated team of mental health professionals committed to providing compassionate,
              evidence-based care. Our mission is to empower individuals on their journey to mental wellness through personalized
              treatment plans, holistic approaches, and unwavering support.
            </p>
            <p className="text-gray-600 text-md mb-6">
              Whether you're seeking help for anxiety, depression, ADHD, or another mental health condition, we're here to guide
              you with expertise, empathy, and innovation. Your mental health matters — and so do you.
            </p>
            <Link
              to="/about"
              className="inline-block bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-800 transition-all duration-300"
            >
              Learn More
            </Link>
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
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Conditions Treated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Depression",
                img: "/images/Depression.jpg",
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
                img: "/images/ptsd.jpeg",
              },
              {
                name: "OCD",
                img: "/images/OCD.jpg",
              },
              {
                name: "Schizophrenia",
                img: "/images/schizophrenia.jpg",
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




      {/*Why choose us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <HiUserCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Compassionate, Expert Staff
              </h3>
              <p className="text-gray-600">
                Our licensed providers bring years of clinical experience—
                and a genuine commitment to your well-being and healing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <HiUserGroup className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Client-Centered Approach
              </h3>
              <p className="text-gray-600">
                We believe in care that’s collaborative, respectful,
                and personalized to your unique journey and goals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <HiGlobeAlt className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Culturally Competent, Inclusive Care
              </h3>
              <p className="text-gray-600">
                We honor all identities and backgrounds, providing
                culturally sensitive care that respects who you are.
              </p>
            </div>
          </div>
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
              <p className="text-gray-600 mb-6">
                At TrackMind Psychiatric & Mental Health Services, we believe in providing personalized, evidence-based psychiatric care in a comfortable and supportive environment. Our experienced team of mental health professionals is dedicated to helping you achieve optimal mental wellness.
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
                src="/images/tele-health.jpg"
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
