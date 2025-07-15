import { useContext } from "react";
import Button from "../../components/button/Button";
import { AllContext } from "../../hooks/GlobalProvider";

const Filters = () => {
  const { category, handleSetCategory, eventCategories } =
    useContext(AllContext);
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-6 bg-white">
      <div className="flex flex-wrap gap-2 justify-center">
        {eventCategories.map((item) => (
          <Button
            key={item.value}
            btnText={item.label}
            onClick={() => handleSetCategory(item.value)}
            className={`${
              category === item.value
                ? "bg-blue-500 text-red-500"
                : "hover:bg-gray-100 !text-black bg-white border border-gray-200"
            } !w-fit`}
          />
        ))}
      </div>
    </section>
  );
};

export default Filters;
