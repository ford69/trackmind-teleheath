import React from "react";

const Booking = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your appointment easily using our online booking system
            powered by CharmHealth. Choose a convenient time and take the first
            step toward better mental health.
          </p>
        </div>

        {/* Iframe Embed */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="1000"
              src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=9ea691e2239a2e3313f96d8257763cf543727488d15045d0b5cbe4a7b758d7d33da030e7f293979a62d1cf5a52bbbb70c2fe0580a6189219"
              style={{ overflow: "hidden" }}
              frameBorder="0"
              title="CharmHealth Booking"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
