/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SentenseCase } from "../../actions/actions";
import Button from "../../components/button/Button";
import SelectInput from "../../components/select-input/SelectInput";
import { AllContext } from "../../hooks/GlobalProvider";

const TicketData = ({ event }) => {
  const { ticket, dispatch } = useContext(AllContext);
  const price = ticket?.type
    ? event.ticketInfo?.find((item) => item.type === ticket?.type).price *
      ticket.quantity
    : 0;

  return (
    <section className="space-y-5 bg-white rounded-lg border shadow-sm p-6 max-w-[560px]">
      <h1 className="text-2xl  font-semibold">Ticket Information</h1>
      <p className="text-gray-600">
        Choose your ticket type and quantity to proceed with booking.
      </p>
      <div className="space-y-3">
        <SelectInput
          name="type"
          id="type"
          value={ticket?.type}
          onChange={(e) =>
            dispatch({ type: "set_type", payload: e.target.value })
          }
        >
          <option value={""} disabled>
            Choose your ticket type
          </option>
          {event.ticketInfo.map(({ type }) => (
            <option value={type} key={type}>
              {SentenseCase(type)}
            </option>
          ))}
        </SelectInput>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold">{SentenseCase(ticket.type)}</h1>
            <p className="text-gray-500 text-sm">
              ₦ {price.toLocaleString()} per ticket
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              btnText={"-"}
              className={
                "!p-4 !text-sm !text-black border rounded-lg !bg-transparent hover:!bg-gray-100"
              }
              onClick={() => dispatch({ type: "dec" })}
            />

            <span>{ticket.quantity}</span>

            <Button
              btnText={"+"}
              className={
                "!p-4 !text-sm !text-black border rounded-lg !bg-transparent hover:!bg-gray-100"
              }
              onClick={() => dispatch({ type: "inc" })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketData;
