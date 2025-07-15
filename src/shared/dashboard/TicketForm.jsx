/* eslint-disable react/prop-types */
import FormInput from "../../components/form-input/FormInput";
import SelectInput from "../../components/select-input/SelectInput";

const TicketForm = ({ handleFormData, formData }) => {
  return (
    <section className="space-y-5 bg-white rounded-lg border shadow-sm p-6 max-w-[560px]">
      <h1 className="text-2xl  font-semibold">Customer Information</h1>
      <p className="text-gray-600">
        Fill out the form with your details so we can send you your ticket.
      </p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleFormData(e)}
          placeholder="Enter your first name
"
        />

        <FormInput
          label="Email Address"
          type={"email"}
          name="email"
          value={formData.email}
          onChange={(e) => handleFormData(e)}
          placeholder="Enter your email address"
        />

        <SelectInput
          label={"Choose your gender"}
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={(e) => handleFormData(e)}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </SelectInput>

        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleFormData(e)}
          placeholder="Enter your phone number"
        />
      </form>
    </section>
  );
};

export default TicketForm;
