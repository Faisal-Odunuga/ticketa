import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import FormInput from "../../components/form-input/FormInput";
import { allPaths } from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import { postMethod } from "../../http-methods/allMethods";
import { loginUrl } from "../../apis/allApis";
import { showMessage } from "../../user-messages/messages";

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await postMethod(loginUrl, values);
      showMessage("success", response?.data?.message);
    } catch (error) {
      showMessage("error", error?.response?.data?.message);
      if (error?.response?.data?.message === "Email not verified") {
        localStorage.setItem("email", values.email);
        return navigate(allPaths.verifyOtp);
      }
    }
    // navigate(allPaths.dashboard);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 w-full md:w-1/3 h-fit shadow-sm p-6 md:p-8 space-y-4 rounded-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Welcome back to Ticketa</h2>
          <p className="text-[#7b7b7b] text-sm">
            Don&apos;t have an Account yet?
            <span
              className="text-[#395df5] hover:cursor-pointer"
              onClick={() => navigate(allPaths.signUp)}
            >
              {" Create one"}
            </span>
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field name="email">
                  {({ field }) => (
                    <FormInput
                      label="Email Address"
                      type="email"
                      required
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <Field name="password">
                  {({ field }) => (
                    <FormInput
                      label="Password"
                      required
                      isPasswordType
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center gap-2">
                  <FormInput
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    boxStyle="w-fit"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                btnText={isSubmitting ? "Signing In..." : "Sign In"}
                loading={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
