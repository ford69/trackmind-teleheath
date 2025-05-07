import { useParams, Link } from "react-router-dom";

const conditionDetails = {
  depression: {
    title: "Depression",
    description:
      "Depression is a serious mood disorder that negatively affects how you feel, think, and act. It causes persistent sadness, a lack of interest or pleasure in activities, and can lead to a variety of emotional and physical problems.",
    image:
      "/images/depression-3.jpg",
    symptoms: [
      "Persistent sadness or low mood",
      "Loss of interest in daily activities",
      "Changes in appetite or weight",
      "Difficulty concentrating or making decisions",
      "Fatigue or loss of energy",
      "Feelings of worthlessness or guilt",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Comprehensive psychiatric evaluations to assess symptoms and diagnosis",
        "Personalized medication management for symptom relief",
        "Evidence-based therapy such as Cognitive Behavioral Therapy (CBT)",
        "Ongoing support and follow-ups to monitor progress and adapt care",
      ],
    },
  },
  anxiety: {
    title: "Anxiety",
    description:
      "Anxiety disorders involve more than temporary worry or fear. For people with anxiety disorders, the anxiety does not go away and can get worse over time, affecting daily activities.",
    image:
      "/images/anxiety-2.jpg",
    symptoms: [
      "Feeling nervous or restless",
      "Increased heart rate",
      "Sweating or trembling",
      "Avoiding anxiety-inducing situations",
      "Panic attacks",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Psychiatric evaluation to determine type and severity of anxiety",
        "Tailored medication options for managing chronic anxiety or panic attacks",
        "Therapy approaches such as CBT and exposure therapy",
        "Lifestyle recommendations to support emotional regulation",
      ],
    },
  },
  adhd: {
    title: "ADHD",
    description:
      "Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, impulsivity, and hyperactivity that interferes with functioning or development.",
    image:
      "/images/adhd-1.jpg",
    symptoms: [
      "Inattention and distractibility",
      "Impulsiveness",
      "Hyperactivity",
      "Disorganization",
      "Forgetfulness in daily activities",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "In-depth assessments and ADHD screening tools",
        "Medication strategies including stimulants and non-stimulants",
        "Behavioral coaching and coping strategies",
        "Support for academic or work accommodations",
      ],
    },
  },
  ocd: {
    title: "OCD",
    description:
      "Obsessive-Compulsive Disorder involves recurring, unwanted thoughts (obsessions) and/or repetitive behaviors (compulsions). These symptoms can interfere significantly with daily life and activities.",
    image:
      "/images/ocd.jpeg",
    symptoms: [
      "Repetitive hand-washing or checking",
      "Intrusive thoughts",
      "Strict routines or rituals",
      "Fear of contamination or harm",
      "Difficulty tolerating uncertainty",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Accurate diagnosis and symptom tracking",
        "Medication management for OCD (e.g., SSRIs)",
        "Therapy with a focus on Exposure and Response Prevention (ERP)",
        "Long-term treatment planning and support",
      ],
    },
  },
  ptsd: {
    title: "PTSD",
    description:
      "Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event, such as violence, accidents, or natural disasters. It is marked by symptoms like intrusive memories, nightmares, emotional numbness, heightened anxiety, and avoidance of reminders related to the trauma.",
    image:
      "/images/ptsd.jpeg",
    symptoms: [
      "Recurrent, unwanted distressing memories of the traumatic event",
      "Flashbacks (reliving the trauma as if it were happening again)",
      "Nightmares or upsetting dreams related to the trauma",
      "Severe emotional or physical reactions to reminders of the event",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Cognitive Behavioral Therapy (CBT)",
        "Specifically designed to address trauma-related symptoms using safe, structured approaches.",
      ],
    },
  },
  schizophrenia: {
    title: "Schizophrenia",
    description:
      "Schizophrenia is a complex, chronic mental health condition that affects how a person thinks, feels, and perceives reality. It may involve symptoms such as hallucinations, delusions, disorganized thinking, and emotional withdrawal.",
    image:
      "/images/schizophrenia.jpg",
    symptoms: [
      "Hallucinations (hearing voices, seeing things that aren’t there)",
      "Delusions (false, fixed beliefs — e.g., thinking someone is out to harm them)",
      "Flat affect (reduced emotional expression)",
      "Social withdrawal",
      "Disorganized thinking or speech",
      "Lack of motivation or pleasure in activities",

    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Help reduce hallucinations, delusions, and agitation",
        "Cognitive Behavioral Therapy (CBT)",
        "Family therapy to support loved ones",
        "Psychoeducation to help understand the condition",
      ],
    },
  },
  "bipolar-disorder": {
    title: "Bipolar Disorder",
    description:
      "Bipolar disorder is a mental health condition characterized by extreme shifts in mood, energy, and activity levels. Individuals may experience episodes of intense emotional highs, known as mania or hypomania, followed by periods of deep depression. These mood swings can disrupt daily life, affecting relationships, work, and personal stability. During manic phases, individuals may feel unusually euphoric, energetic, or irritable, while depressive episodes often bring feelings of sadness, fatigue, and hopelessness. The cause of bipolar disorder is complex, involving genetic, biological, and environmental factors. Early recognition and consistent treatment are key to managing mood changes and maintaining emotional balance. With appropriate support, individuals can lead fulfilling lives and develop strategies to navigate the ups and downs of the condition.",
    image:
      "/images/BPD.webp",
    symptoms: [
      "Inflated self-esteem or grandiosity",
      "Decreased need for sleep",
      "More talkative or feeling pressured to keep talking",
      "Racing thoughts",
      "Persistent sadness or hopelessness",
      "Loss of interest or pleasure in most activities",

    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Routine and structure",
        "Cognitive Behavioral Therapy (CBT)",
        "Interpersonal and social rhythm therapy (IPSRT)",
        "Psychoeducation to help recognize early signs of mood episodes",
      ],
    },
  },
  "panic-disorder": {
    title: "Panic Disorder",
    description:
      "Panic disorder is a type of anxiety disorder characterized by recurring, unexpected panic attacks—sudden periods of intense fear that may include palpitations, sweating, shortness of breath, and feelings of impending doom. These attacks can occur without an obvious trigger and often lead individuals to fear future episodes, significantly impacting daily life and functioning.",
    image: "/images/panic-attack.webp",
    symptoms: [
      "Sudden and repeated panic attacks",
      "Heart palpitations or accelerated heart rate",
      "Shortness of breath or choking sensations",
      "Dizziness or lightheadedness",
      "Fear of losing control or dying",
      "Persistent worry about future attacks",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Thorough psychiatric evaluation to confirm diagnosis",
        "Cognitive Behavioral Therapy (CBT) targeting panic symptoms",
        "Exposure therapy to reduce fear of triggers",
        "Medication management (SSRIs or anti-anxiety medications)",
        "Relaxation training and stress-reduction techniques",
      ],
    },
  },
  insomnia: {
    title: "Insomnia",
    description:
      "Insomnia is a common sleep disorder that makes it difficult to fall asleep, stay asleep, or get restful sleep, even when you have the opportunity. It can lead to daytime fatigue, mood disturbances, difficulty concentrating, and reduced quality of life. Insomnia may be short-term (acute) or persist for months (chronic), and it can result from stress, medical or mental health conditions, or lifestyle factors.",
    image: "/images/insomnia.jpg", 
    symptoms: [
      "Difficulty falling asleep at night",
      "Waking up during the night or too early",
      "Feeling tired despite sleep",
      "Irritability or mood swings",
      "Trouble focusing or remembering things",
      "Increased anxiety around sleep",
    ],
    help: {
      title: "How We Can Help",
      strategies: [
        "Sleep hygiene education and lifestyle adjustments",
        "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
        "Relaxation techniques such as mindfulness or breathing exercises",
        "Medication management when appropriate",
        "Identifying and addressing underlying mental health factors",
      ],
    },
  },


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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content */}
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
            </div>
          </div>

          {/* How We Can Help Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              {condition.help.title}
            </h2>
            <ul className="list-disc list-inside text-purple-700 text-lg space-y-2">
              {condition.help.strategies.map((strategy, i) => (
                <li key={i}>{strategy}</li>
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
                  className={`block px-4 py-2 rounded-lg transition ${key === slug
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
