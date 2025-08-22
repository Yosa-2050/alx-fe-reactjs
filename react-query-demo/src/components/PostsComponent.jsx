import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache data for 1 minute
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (error instanceof Error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Posts</h1>
      <button
        onClick={() => refetch()}
        style={{
          marginTop: '0.5rem',
          padding: '0.25rem 0.75rem',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '0.25rem',
          cursor: 'pointer',
        }}
      >
        Refresh
      </button>
      <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
        {data.map((post) => (
          <li key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
            <h2 style={{ fontWeight: '600' }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
