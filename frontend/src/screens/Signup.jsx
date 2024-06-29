import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const initialValues = { name: "", email: "", password: "", cellNumber: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    cellNumber: Yup.string()
      .matches(/^[0-9]+$/, "Contact number must be digits only")
      .length(10, "Contact number must be exactly 10 digits long")
      .required("Contact number is required"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <Form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900">
            Sign Up to our platform
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <Field
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Name"
              required
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label
              htmlFor="cellNumber"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact Number
            </label>
            <Field
              type="cellNumber"
              name="cellNumber"
              id="cellNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
            <ErrorMessage name="cellNumber" component="div" />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Field
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline"
            >
              Create account
            </Link>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Signup;
