import React from "react";
import {
  FaLaptopMedical,
  FaPhoneAlt,
  FaFileAlt,
  FaVideo,
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What is telehealth psychiatry?",
    answer:
      "Telehealth psychiatry allows you to meet with a licensed mental health provider through secure video or phone appointments — offering the same quality care as an in-person visit, from the comfort of your own space.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of mental health conditions, including Depression, Anxiety disorders, PTSD, Bipolar disorder, OCD, Mood disorders And more.",
  },
  {
    question: "How do I prepare for a telehealth appointment?",
    answer:
      "All you need is a quiet, private space, a stable internet connection, and a smartphone, tablet, or computer with a camera and microphone.",
  },
  {
    question: "Is telehealth secure and confidential?",
    answer:
      "Yes. We use HIPAA-compliant technology to ensure your sessions and personal information remain safe and private.",
  },
  {
    question: "Can you prescribe medications through telehealth?",
    answer:
      "Yes. Our providers can evaluate, diagnose, and prescribe medications when appropriate. Prescriptions are sent directly to your preferred pharmacy.",
  },
  

  {
    question: " Will I see the same provider each time?",
    answer:
      "Yes. Continuity of care is important to us. You will work with the same provider throughout your treatment journey whenever possible.",
  },
  {
    question: "Does insurance cover telehealth visits?",
    answer:
      "Aetna - New Mexico and Wyoming / Cigna- New Mexico and Wyoming. We’re happy to help verify your benefits and answer any questions about coverage.",
  },
  {
    question: "What if I have a mental health emergency?",
    answer:
      "Telehealth is not intended for emergencies.If you are experiencing a crisis, please call 911 or visit your nearest emergency room immediately.",
  },
];

const HowItWorks = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-lg text-white">
            Getting help should be simple. Here’s how we make mental health care accessible, secure, and stress-free.
          </p>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-purple-800 text-center mb-12">
            Step-by-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 transition duration-300 transform hover:-translate-y-1 bg-purple-100 rounded-xl shadow-md">
              <FaFileAlt className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Intake</h3>
              <p className="text-gray-700">
                Complete secure intake forms to help us understand your needs and treatment goals.
              </p>
            </div>
            <div className="p-6 transition duration-300 transform hover:-translate-y-1 bg-purple-100 rounded-xl shadow-md">
              <FaVideo className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Virtual Visit</h3>
              <p className="text-gray-700">
                Meet with a licensed provider to begin your personalized treatment journey.
              </p>
            </div>
            <div className="p-6 transition duration-300 transform hover:-translate-y-1 bg-purple-100 rounded-xl shadow-md">
              <FaCheckCircle className="text-5xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Follow-Up</h3>
              <p className="text-gray-700">
                Receive continued support, medication management, and therapy sessions as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaLaptopMedical className="text-5xl text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-purple-800">What to Expect</h2>
          <p className="text-gray-700">
            A supportive, confidential space where you can speak freely. We listen, assess, and guide you with compassion.
          </p>
        </div>
      </section>

      {/* Tech Requirements */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaPhoneAlt className="text-5xl text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-purple-800">Tech Requirements</h2>
          <p className="text-gray-700">
            You’ll need a smartphone, tablet, or computer with a camera, microphone, and stable internet. We’ll handle the rest.
          </p>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaMoneyCheckAlt className="text-5xl text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-purple-800">Insurance & Payment</h2>
          <p className="text-gray-700">
            We currently accept Cigna and Aetna insurance plans.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <FaQuestionCircle className="text-5xl text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-purple-800">FAQs</h2>
            <p className="text-gray-600 mt-2">Still have questions? We’ve got answers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full bg-purple-100 px-6 py-4 rounded-lg shadow hover:bg-purple-200 focus:outline-none">
                      <span className="text-left text-purple-800 font-medium">{faq.question}</span>
                      {open ? (
                        <FaChevronUp className="text-purple-600" />
                      ) : (
                        <FaChevronDown className="text-purple-600" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pt-4 pb-2 text-gray-700 bg-white border border-purple-200 rounded-b-lg shadow-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
