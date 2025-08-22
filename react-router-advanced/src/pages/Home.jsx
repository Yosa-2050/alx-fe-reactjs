import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link to="/profile">Profile</Link>|{''}
                <Link to="/blog/1">Blog Post 1</Link>|{''}
                <Link to="/blog/2">Blog Post 2</Link>|{''}
            </nav>
        </div>
    );
}

export default Home;