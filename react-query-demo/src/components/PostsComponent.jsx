import { useQuery } from 'react-query';  
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: 5000, // cache fresh for 5s
      cacheTime: 1000 * 60 * 5, // keep cache for 5 min
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Posts</h1>
      <button
        onClick={() => refetch()}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Refresh
      </button>
      <ul className="mt-4">
        {data.map((post) => (
          <li key={post.id} className="border-b py-2">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
