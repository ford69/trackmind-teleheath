import { useState } from 'react';
import { Link } from 'react-router-dom';

const resources = [
  {
    id: 'mental-health-basics',
    title: 'Mental Health Basics',
    category: 'Education',
    summary: 'Understanding the foundations of mental health.',
    content: (
      <>
        Learn the basics of mental health and wellness. 
        Check out more details on <Link to="https://www.nami.org/" className="text-purple-600 underline">Mental Health Resources</Link> page.
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
        Check out more details on our <Link to="https://www.mentalhealth.va.gov/" className="text-purple-600 underline">Mental Health Resources</Link> page.
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
  // Add more posts as needed
];

const Resources = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const filtered = resources.filter(
    (r) =>
      (category === 'All' || r.category === category) &&
      r.title.toLowerCase().includes(query.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const categories = ['All', 'Education', 'Veterans'];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">Resources & Blog</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1); // reset to first page
              }}
              className={`px-4 py-2 rounded-full border border-purple-300 hover:bg-purple-200 transition ${
                category === cat ? 'bg-purple-600 text-white' : 'bg-white text-purple-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3 border rounded-md mb-6"
        />

        <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 shadow-lg rounded-lg border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
              {/* <Link
                to={`/resources/${post.id}`}
                className="text-purple-600 font-medium hover:underline"
              >
                Read More →
              </Link> */}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>External links provided on this site are for informational purposes only. TrackMind Psychiatric & Mental Health is not affiliated with, does not endorse, and is not responsible for the content, accuracy, or practices of any third-party websites.</p>
        </div>

        {filtered.length > postsPerPage && (
          <div className="flex justify-center gap-4 mt-8">
            {Array.from({ length: Math.ceil(filtered.length / postsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-full border border-purple-300 hover:bg-purple-200 transition ${
                  currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
