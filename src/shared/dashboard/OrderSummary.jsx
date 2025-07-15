/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllContext } from "../../hooks/GlobalProvider";
import { SentenseCase } from "../../actions/actions";
import Button from "../../components/button/Button";

const OrderSummary = ({ event, tab, setTab }) => {
  const { ticket } = useContext(AllContext);
  const price = ticket?.type
    ? event.ticketInfo?.find((item) => item.type === ticket?.type).price *
      ticket.quantity
    : 0;
  const handleSubmit = () => {
    if (tab < 3) setTab((tab) => tab + 1);
  };
  return (
    <section className="space-y-5 bg-white rounded-lg border shadow-sm p-6 max-w-[560px]">
      <h1 className="text-2xl  font-semibold">Order Summary</h1>
      <p className="text-gray-600">
        Select one or more tickets and get ready for an unforgettable experience
      </p>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span>
            {ticket.quantity} × {SentenseCase(ticket.type)}
          </span>
          <span className="font-semibold">₦{price.toLocaleString()}</span>
        </p>
        <p className="flex justify-between text-sm">
          <span>Service Fee</span>
          <span className="">₦2.00</span>
        </p>
        <p className="flex justify-between font-bold">
          <span>Total</span>
          <span className="font-semibold">₦{price.toLocaleString()}</span>
        </p>
      </div>

      <Button
        btnText={tab !== 3 ? "Next" : "Checkout"}
        onClick={handleSubmit}
      />
    </section>
  );
};

export default OrderSummary;
