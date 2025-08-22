import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Mock API call
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.username.toLowerCase() === "error") {
          reject("Registration failed. Try again.");
        } else {
          resolve("Registration successful!");
        }
      }, 1000);
    })
      .then((message) => {
        setSuccess(message);
        setFormData({ username: "", email: "", password: "" });
      })
      .catch((msg) => setError(msg));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration (Controlled)</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
