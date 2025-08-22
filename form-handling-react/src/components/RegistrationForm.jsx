import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(""); // corrected variable

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required."); // corrected setter
            return;
        }

        setError(""); // corrected setter
        console.log("Form submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold">User Registration (controlled)</h2>
            {error && <p className="text-red-600">{error}</p>} {/* lowercase <p> */}

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded" 
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;
