import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// const services = [
//   {
//     title: 'Psychiatric Evaluation & Medication Management',
//     description:
//       'Comprehensive mental health assessments to understand your unique needs and develop a personalized treatment plan.',
//     features: [
//       'Initial 60-minute consultation',
//       'Mental health history review',
//       'Diagnostic assessment',
//       'Treatment recommendations',
//     ],
//   },
//   {
//     title: 'Support for co-occurring disorders',
//     description:
//       'Expert medication management to help you achieve optimal mental health and well-being.',
//     features: [
//       'Medication evaluation',
//       'Prescription management',
//       'Side effect monitoring',
//       'Regular follow-up visits',
//     ],
//   },
//   {
//     title: 'Therapy Services',
//     description:
//       'One-on-one therapy sessions focused on your personal growth and healing journey.',
//     features: [
//       'Cognitive Behavioral Therapy',
//       'Trauma-focused therapy',
//       'Anxiety management',
//       'Depression treatment',
//     ],
//   },
// ];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
};

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive mental health care tailored to your unique needs
          </p>
        </div>

        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h2 className="text-xl font-bold text-purple-700 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div> */}

        {/* Detailed Services with Alternating Images and Text */}
        <section className="mt-24 bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">


            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up">
              <img
                src="/images/services-2.jpg"
                alt="Psychiatric Evaluation"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Psychiatric Evaluation & Medication Management
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                We start by getting to know you through a compassionate and thorough psychiatric evaluation. This is simply a conversation to understand your thoughts, emotions, and experiences, so we can identify any mental health concerns you may be facing. If medication could help, we’ll guide you through your options. Our ongoing medication management ensures the treatment is safe, effective, and tailored to your unique needs—with adjustments made as needed to support your well-being every step of the way.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20 md:flex-row-reverse" data-aos="fade-up">
              <img
                src="/images/services-1.jpg"
                alt="Co-occurring Disorders"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Support for Co-occurring Disorders
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  When mental health challenges and substance use coexist, treatment must address both. We offer expert care that integrates psychiatric medication management with collaboration across your care team — ensuring all aspects of your well-being are treated holistically.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
              <img
                src="/images/services.jpg"
                alt="Therapy Services"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Therapy Services</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We provide compassionate, evidence-based therapy for individuals navigating anxiety, depression, trauma, and more. Whether you're looking for CBT, or ongoing emotional support — our clinicians are here to help you heal, grow, and thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and begin your journey to better mental health.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition duration-300"
          >
            Schedule an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
