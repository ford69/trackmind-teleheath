import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Trackmind Psychiatry</h3>
            <p className="text-gray-400">
              Providing compassionate psychiatric care and mental health services to help you live your best life.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                info@trackmind.com
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                123 Healing Street, City, State 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trackmind Psychiatry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;