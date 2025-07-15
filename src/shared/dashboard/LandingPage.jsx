import { useContext } from "react";
import SearchInput from "../../components/search-box/SearchInput";
import { AllContext } from "../../hooks/GlobalProvider";

const LandingPage = () => {
  const { setSearchQuery } = useContext(AllContext);

  return (
    <section className="">
      <div className="px-4 sm:px-6 lg:px-20 py-20 space-y-10 bg-head flex flex-col items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Discover Amazing Events
        </h1>
        <p className="text-xl md:text-2xl">
          Find and book tickets for concerts, conferences, and experiences near
          you
        </p>
        <SearchInput handleSubmit={setSearchQuery} />
      </div>
    </section>
  );
};

export default LandingPage;
