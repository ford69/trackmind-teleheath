import { useState } from 'react';
import Head from 'next/head';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const faqs = [
    {
      question: "How does online therapy work?",
      answer: "Online therapy works through secure video sessions, messaging, and phone calls. You'll be matched with a licensed therapist who you can meet with virtually from the comfort of your home."
    },
    {
      question: "Is online therapy as effective as in-person therapy?",
      answer: "Research shows that online therapy can be just as effective as in-person therapy for many conditions. It offers the added benefits of convenience and accessibility."
    },
    {
      question: "How much does therapy cost?",
      answer: "Our therapy sessions start at $80 per session. We work with many insurance providers and offer sliding scale fees based on income."
    },
    {
      question: "How do I choose the right therapist?",
      answer: "We'll help match you with a therapist based on your specific needs, preferences, and goals. You can also switch therapists at any time if you feel it's not the right fit."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, we take your privacy seriously. All communications are encrypted and protected under HIPAA regulations. Your information is kept strictly confidential."
    },
    {
      question: "What if I need immediate help?",
      answer: "If you're experiencing a crisis or need immediate assistance, please call 911 or contact the National Crisis Hotline at 988. We also offer emergency sessions for existing clients."
    },
    {
      question: "Can I message my therapist between sessions?",
      answer: "Yes, our platform allows secure messaging between you and your therapist. Response times vary, but most therapists respond within 24-48 hours."
    },
    {
      question: "What types of mental health issues do you treat?",
      answer: "Our therapists are qualified to treat a wide range of issues including anxiety, depression, relationship problems, trauma, stress, and more."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - MindWell</title>
        <meta name="description" content="Frequently asked questions about our mental health services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our mental health services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-md">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-purple-600`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}