import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-8 p-8 bg-gray-100">
      {/* Controlled Form */}
      <div className="flex-1">
        <RegistrationForm />
      </div>

      {/* Formik Form */}
      <div className="flex-1">
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
