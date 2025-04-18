import { FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Psychiatric Evaluation',
      description: 'Comprehensive mental health assessments to understand your unique needs and develop a personalized treatment plan.',
      features: [
        'Initial 60-minute consultation',
        'Mental health history review',
        'Diagnostic assessment',
        'Treatment recommendations',
      ],
    },
    {
      title: 'Medication Management',
      description: 'Expert medication management to help you achieve optimal mental health and well-being.',
      features: [
        'Medication evaluation',
        'Prescription management',
        'Side effect monitoring',
        'Regular follow-up visits',
      ],
    },
    {
      title: 'Individual Therapy',
      description: 'One-on-one therapy sessions focused on your personal growth and healing journey.',
      features: [
        'Cognitive Behavioral Therapy',
        'Trauma-focused therapy',
        'Anxiety management',
        'Depression treatment',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive mental health care tailored to your unique needs
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <FaCheckCircle className="text-purple-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to schedule your consultation and begin your journey to better mental health.
          </p>
          <a
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
          >
            Schedule an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;