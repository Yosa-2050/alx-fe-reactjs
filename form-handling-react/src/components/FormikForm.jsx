import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const ValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm, setStatus }) => {
    setStatus({ success: "", error: "" });

    try {
      // Mock API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log("Mock API response:", data);

      setStatus({ success: "User registered successfully!", error: "" });
      resetForm();
    } catch (err) {
      console.error(err);
      setStatus({ success: "", error: "Registration failed. Try again!" });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ status }) => (
        <Form className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded-lg shadow bg-white">
          <h2 className="text-xl font-bold">User Registration (Formik)</h2>

          {status?.error && <p className="text-red-600">{status.error}</p>}
          {status?.success && <p className="text-green-600">{status.success}</p>}

          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
