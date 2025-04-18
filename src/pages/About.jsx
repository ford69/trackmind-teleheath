import { FaUserMd, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaUserMd,
      title: 'Expert Care',
      description: 'Our team consists of highly qualified mental health professionals with years of experience.',
    },
    {
      icon: FaHeart,
      title: 'Compassion',
      description: 'We provide caring, empathetic support throughout your mental health journey.',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Personalized Approach',
      description: 'Treatment plans are tailored to meet your individual needs and goals.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
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
              We are committed to improving the mental health and well-being of our community by providing accessible, high-quality psychiatric care. Our goal is to help each individual achieve optimal mental health and lead fulfilling lives.
            </p>
            <p className="text-gray-600">
              Through evidence-based treatments and a compassionate approach, we work together with our patients to overcome challenges and build resilience.
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
                <p className="text-purple-600">{value.description}</p>
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
          <a
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;