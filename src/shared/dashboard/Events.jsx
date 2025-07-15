import EventCard from "./EventCard";
import { useContext } from "react";
import { AllContext } from "../../hooks/GlobalProvider";

const Events = () => {
  const { events } = useContext(AllContext);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-20 space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">
          {/* {category === "all" ? "Upcoming Events" : "Filtered Events"} */}
          Events
        </h2>
        <p className="text-[#4b5563]">
          {events.length} {events.length > 1 ? "events" : "event"} found
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
