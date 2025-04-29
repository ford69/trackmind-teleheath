import { useParams, Link } from 'react-router-dom';

const resources = [
  {
    id: 'mental-health-basics',
    title: 'Mental Health Basics',
    category: 'Education',
    summary: 'Understanding the foundations of mental health.',
    content: (
      <>
        Learn the basics of mental health and wellness. 
        Check out more resource information from <Link to="https://www.nami.org/" className="text-purple-600 underline">National Alliance on Mental Illness.</Link> page.
      </>
    ),
    date: '2024-05-01',
  },
  {
    id: 'veteran-tips',
    title: 'Mental Health Tips for Veterans',
    category: 'Veterans',
    summary: 'Tailored strategies to support veterans’ mental wellness.',
    content: 'Full content on veteran-specific tips...',
    date: '2024-05-02',
  },
  {
    id: 'medication-management',
    title: 'Medication Management Insights',
    category: 'Medication',
    summary: 'What to know about safely managing psychiatric meds.',
    content: 'Full article on medication management...',
    date: '2024-05-03',
  },
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
