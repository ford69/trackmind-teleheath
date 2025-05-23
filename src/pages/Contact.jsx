import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isFormValid = () =>
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.message.trim();

  const showError = (field) => hasSubmitted && !formData[field].trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (isFormValid()) {
      console.log('Form submitted:', formData);
      window.location.href = 'https://spruce.care/trackmindpsychiatricmentalhealthllc';
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '(307) 248-7317',
      link: 'tel:+3072487317',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'admin@trackmindpmh.com',
      link: 'mailto:admin@trackmindpmh.com',
    },
    {
      icon: FaFax,
      title: 'Fax number:',
      content: '307 761 6808',
      link: '#',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us to schedule a free 15-minute consultation to learn more about our services and book your initial appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${showError('name') ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {showError('name') && <p className="text-red-500 text-sm mt-1">Name is required</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${showError('email') ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {showError('email') && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${showError('phone') ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {showError('phone') && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${showError('message') ? 'border-red-500' : 'border-gray-300'
                    }`}
                ></textarea>
                {showError('message') && <p className="text-red-500 text-sm mt-1">Message is required</p>}
              </div>
              <p className='text-gray-700 text-sm'>Do you Agree to receive text messages from TrackMind Psychiatric & Mental Health Service sent from (307) 248-7317. Message frequency varies and may include appointment reminders and follow up Instructions. Message and data rates may apply. Reply STOP at any time to end or unsubscribe. For assistance, reply HELP or contact support at (307) 248-7317 or admin@trackmindpmh.com</p>
              {/* Consent Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-5 w-5 text-purple-600 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I agree to receive text messages from TrackMinds sent from (307) 248-7317
                </label>
              </div>

              <p className="text-sm text-gray-700">
                See our <Link to="/privacy-policy" className="text-purple-600 underline">Privacy Policy</Link> for details on how we handle your information. We never share or sell your opt-in information.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full px-6 py-3 rounded-md font-medium transition duration-300 ${isFormValid()
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <info.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                    <a href={info.link} className="text-gray-600 hover:text-purple-600">
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Monday-Thursday 6PM to 8PM</p>
                <p className="text-gray-600">Friday: 09:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 09:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
