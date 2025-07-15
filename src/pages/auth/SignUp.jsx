import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import FormInput from "../../components/form-input/FormInput";
import { useNavigate } from "react-router-dom";
import { allPaths } from "../../routes/paths";
import { postMethod } from "../../http-methods/allMethods";
import { createUserUrl } from "../../apis/allApis";
import { showMessage } from "../../user-messages/messages";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    console.log("Form Data:", values);
    try {
      const response = await postMethod(createUserUrl, values);
      console.log(response);
      showMessage("success", response?.data?.message);
    } catch (error) {
      showMessage("error", error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 w-full md:w-1/3 h-fit shadow-sm p-6 md:p-8 space-y-4 rounded-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="text-[#7b7b7b] text-sm">
            Already have an account?
            <span
              className="text-[#395df5] hover:cursor-pointer"
              onClick={() => navigate(allPaths.signIn)}
            >
              {" Sign In"}
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
                <Field name="firstName">
                  {({ field }) => (
                    <FormInput
                      label="First name"
                      type="text"
                      required
                      {...field}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <Field name="lastName">
                  {({ field }) => (
                    <FormInput
                      label="Last name"
                      type="text"
                      required
                      {...field}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <Field name="email">
                  {({ field }) => (
                    <FormInput
                      label="Email Address"
                      type="email"
                      {...field}
                      required
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

              <Button
                type="submit"
                btnText={
                  isSubmitting ? "Creating Account..." : "Create Account"
                }
                loading={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
