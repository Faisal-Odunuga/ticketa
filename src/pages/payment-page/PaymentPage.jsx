import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import OrderSummary from "../../shared/dashboard/OrderSummary";
import TicketForm from "../../shared/dashboard/TicketForm";
import TicketData from "../../shared/dashboard/TicketData";
import { AllContext } from "../../hooks/GlobalProvider";
import Progress from "../../shared/dashboard/Progress";
import Card from "../../components/card/Card";

const PaymentPage = () => {
  const { eventId } = useParams();

  const {
    events,
    formData,
    ticketDetails,
    setTicketDetails,
    handleTicketDetails,
    handleFormData,
  } = useContext(AllContext);
  const [tab, setTab] = useState(1);

  //   const [isLoading, setIsLoading] = useState(false);

  const event = events?.find((item) => item.id === eventId);

  return (
    <main className="flex items-center justify-center p-6">
      <section className="w-full max-w-6xl space-y-10 mx-auto">
        <div className="">
          <Progress tab={tab} setTab={setTab} />
        </div>

        {tab === 1 && (
          <Card>
            <TicketData
              ticketDetails={ticketDetails}
              setTicketDetails={setTicketDetails}
              handleTicketDetails={handleTicketDetails}
              event={event}
            />
            <OrderSummary event={event} tab={tab} setTab={setTab} />
          </Card>
        )}
        {tab === 2 && (
          <Card>
            <TicketForm formData={formData} handleFormData={handleFormData} />
            <OrderSummary event={event} tab={tab} setTab={setTab} />
          </Card>
        )}
        {tab === 3 && <OrderSummary event={event} tab={tab} setTab={setTab} />}

        {/* <OrderSummary event={event} tab={tab} setTab={setTab} /> */}
      </section>
    </main>
  );
};

export default PaymentPage;
