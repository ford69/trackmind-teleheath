const Resources = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Emergency Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          This website is not intended for emergency situations.
        </p>
        <p className="text-gray-700 mb-4">
          If you or someone you know is experiencing a mental health crisis, is at risk of harm to
          themselves or others, or requires immediate medical attention, please seek emergency care
          immediately.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Call 911 or your local emergency number.</li>
          <li>Go to the nearest emergency room.</li>
          <li>
            Contact a crisis hotline:
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>988 Suicide & Crisis Lifeline (U.S.):</strong> Call or text 988 for 24/7 free and
                confidential support.
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700">
          This site is not monitored in real time and does not provide crisis intervention or emergency
          services.
        </p>
      </div>
    );
  };
  
  export default Resources;
  