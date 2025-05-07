import { useParams, Link } from 'react-router-dom';

const resources = [
  {
    id: 'mental-health-basics',
    title: 'Mental Health Basics',
    category: 'Education',
    summary: 'Understanding the foundations of mental health.',
    content: (
      <>
        <p>Learn the basics of mental health and wellness. Here are some helpful resources:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <Link to="https://www.nami.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
              NAMI 
            </Link>
            <p>Learn more about mental health conditions, find support groups, and access educational resources for individuals and families.</p>
          </li>

          <li>
            <Link to="https://www.cdc.gov/mentalhealth/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
              CDC 
            </Link>
            <p>Find trusted public health information, coping tips, and data on mental health trends and prevention strategies.</p>
          </li>
          <li>
            <Link to="https://www.samhsa.gov/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            SAMHSA
            </Link>
            <p>Access national helplines, treatment locators, and information on mental health and substance use support.</p>
          </li>
          <li>
            <Link to="https://www.apa.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            APA 
            </Link>
            <p>Find expert articles and research on mental health topics, therapies, and coping strategies.</p>
          </li>
          <li>
            <Link to="https://adaa.org/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            ADAA 
            </Link>
            <p>Get information and tips on managing anxiety, depression, OCD, PTSD, and related conditions.</p>
          </li>
          <li>
            <Link to="https://www.psychologytoday.com/us" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            Psychology Today 
            </Link>
            <p> Browse a large directory of therapists and read articles on a wide range of mental health and wellness topics.</p>
          </li>
          <li>
            <Link to="https://www.nimh.nih.gov/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">
            NIMH 
            </Link>
            <p>Discover the latest research, treatment options, and statistics on mental health disorders.</p>
          </li>
          
        </ul>
      </>
    ),

    date: '2024-05-01',
  },
  {
    id: 'veteran-tips',
    title: 'Mental Health Tips for Veterans',
    category: 'Veterans',
    summary: 'Tailored strategies to support veterans’ mental wellness.',
    content: (
      <>
        Supporting veterans with guidance on mental health and wellness.
        Check out more details on their <Link to="https://www.mentalhealth.va.gov/" className="text-purple-600 underline">Mental Health Resources</Link> page.
      </>
    ),
    date: '2024-05-02',
  },
  // {
  //   id: 'medication-management',
  //   title: 'Medication Management Insights',
  //   category: 'Medication',
  //   summary: 'What to know about safely managing psychiatric meds.',
  //   content: 'Full article on medication management...',
  //   date: '2024-05-03',
  // },
];

const ResourceDetail = () => {
  const { id } = useParams();
  const post = resources.find((r) => r.id === id);

  if (!post) return <div className="p-10">Post not found</div>;

  return (
    <div className="min-h-screen bg-white py-16 px-6 max-w-4xl mx-auto">
      <Link to="/resource" className="text-purple-600 hover:underline mb-4 inline-block">← Back to Resources</Link>
      <h1 className="text-3xl font-bold text-purple-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date} • {post.category}</p>
      <p className="text-gray-700 leading-7 whitespace-pre-wrap">{post.content}</p>
    </div>
  );
};

export default ResourceDetail;

