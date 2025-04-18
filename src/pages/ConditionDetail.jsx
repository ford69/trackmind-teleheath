import { useParams, Link } from "react-router-dom";

const conditionDetails = {
  depression: {
    title: "Depression",
    description: "Depression is a mood disorder that causes a persistent feeling of sadness, hopelessness, and loss of interest...",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=2070",
    symptoms: [
      "Persistent sadness or low mood",
      "Loss of interest in daily activities",
      "Changes in appetite or weight",
      "Difficulty concentrating or making decisions"
    ],
  },
  anxiety: {
    title: "Anxiety",
    description: "Anxiety disorders involve excessive fear or worry that disrupts daily life...",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=2070",
    symptoms: [
      "Feeling nervous or restless",
      "Increased heart rate",
      "Sweating or trembling",
      "Avoiding anxiety-inducing situations"
    ],
  },
  adhd: {
    title: "ADHD",
    description: "Attention-deficit/hyperactivity disorder (ADHD) involves difficulty paying attention, impulsivity, and hyperactivity...",
    image: "https://images.unsplash.com/photo-1524646431754-32e4c3a8945b?auto=format&fit=crop&q=80&w=2070",
    symptoms: [
      "Inattention and distractibility",
      "Impulsiveness",
      "Hyperactivity",
      "Disorganization"
    ],
  },
  ocd: {
    title: "OCD",
    description: "Obsessive-Compulsive Disorder involves recurring thoughts and repetitive behaviors that interfere with daily life...",
    image: "https://images.unsplash.com/photo-1613758947309-e0e4fbc60ebf?auto=format&fit=crop&q=80&w=2070",
    symptoms: [
      "Repetitive hand-washing or checking",
      "Intrusive thoughts",
      "Strict routines or rituals",
      "Fear of contamination or harm"
    ],
  },
  // Add more conditions as needed...
};

const ConditionDetail = () => {
  const { slug } = useParams();
  const condition = conditionDetails[slug];

  if (!condition) {
    return (
      <div className="text-center py-20 text-purple-700">Condition not found.</div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-center bg-cover text-white"
        style={{ backgroundImage: `url('${condition.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold drop-shadow-md">
          {condition.title}
        </h1>
      </section>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={condition.image}
              alt={condition.title}
              className="rounded-xl shadow-lg w-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                About {condition.title}
              </h2>
              <p className="text-purple-700 text-lg leading-relaxed mb-6">
                {condition.description}
              </p>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Common Symptoms
              </h3>
              <ul className="list-disc list-inside text-purple-700 space-y-1">
                {condition.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/conditions"
                  className="text-purple-600 hover:text-purple-800 underline text-sm"
                >
                  ← Back to All Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="bg-purple-50 p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-purple-800 mb-4">
            Related Conditions
          </h4>
          <ul className="space-y-3">
            {Object.entries(conditionDetails).map(([key, item]) => (
              <li key={key}>
                <Link
                  to={`/conditions/${key}`}
                  className={`block px-4 py-2 rounded-lg transition ${
                    key === slug
                      ? "bg-purple-700 text-white"
                      : "text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ConditionDetail;
