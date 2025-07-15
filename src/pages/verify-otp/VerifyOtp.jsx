import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Button from "../../components/button/Button";
import { resendOtpUrl, verifyEmailUrl } from "../../apis/allApis";
import { getMethod } from "../../http-methods/allMethods";
import { showMessage } from "../../user-messages/messages";
import { TbLoader3 } from "react-icons/tb";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const email = localStorage.getItem("email");
  const [user, domain] = email.split("@");
  const masked = `${user.slice(0, 3) + "*".repeat(user.length - 3)}@${domain}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  async function handleCounter() {
    if (counter !== 0) return;
    try {
      setCounter(60);
      setOtp("");
      const response = await getMethod(`${resendOtpUrl}/${email}`);
      showMessage("success", response?.data?.message);
      console.log(response);
    } catch (error) {
      showMessage("error", error?.response?.data?.message);
      console.log(error);
    }
  }

  async function handleSubmit() {
    if (otp.length !== 6) return;
    try {
      setIsLoading(true);
      const response = await getMethod(
        `${verifyEmailUrl}/faisalodunga@gmail.com/${otp}`
      );
      showMessage("success", response?.data?.message);
      console.log(response);
    } catch (error) {
      showMessage("error", error?.response?.data?.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="max-w-[70%] lg:max-w-[30%] flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-3xl font-bold">Verify OTP</h1>
        <p>
          We already sent and OTP to your email {masked}. Please verify the OTP.
        </p>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={"space-x-4"}
            renderInput={(props) => <input {...props} />}
            inputStyle={"border rounded-lg text-3xl !w-12 !h-12"}
          />
        </div>
        <p>
          You did&apos;nt receive any OTP?{" "}
          <span
            onClick={handleCounter}
            className={`text-gray-700 cursor-not-allowed ${counter === 0 && "!text-blue-600 !cursor-pointer"}`}
          >
            Resend {counter ? `(${counter}s)` : ""}
          </span>
        </p>
        <Button
          btnText={"Confirm OTP"}
          className={`w-full`}
          loading={isLoading}
          onClick={handleSubmit}
          disabled={isLoading}
          hasIcon={isLoading ? <TbLoader3 className="animate-spin" /> : null}
        />
      </div>
    </section>
  );
};

export default VerifyOtp;
