import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
        setSubmitting(true);
        setStatus({ error: "", success: "" });

        // Mock API
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (values.username.toLowerCase() === "error") reject("Registration failed. Try again.");
            else resolve("Registration successful!");
          }, 1000);
        })
          .then((msg) => {
            setStatus({ success: msg });
            resetForm();
          })
          .catch((err) => setStatus({ error: err }))
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <h2>User Registration (Formik)</h2>
          {status?.error && <p style={{ color: "red" }}>{status.error}</p>}
          {status?.success && <p style={{ color: "green" }}>{status.success}</p>}

          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
