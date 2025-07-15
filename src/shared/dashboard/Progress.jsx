/* eslint-disable react/prop-types */
import { IoCheckmarkSharp } from "react-icons/io5";

const Progress = ({ tab, setTab }) => {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-8">
      <div>Ticketa</div>
      <div>
        <ol className="flex items-center justify-center space-x-1">
          {["Choose ticket", "Contact Information", "Checkout"].map(
            (step, i, arr) => (
              <li key={i + "id"} className="flex items-center gap-2">
                <div
                  className="flex flex-col md:flex-row items-center space-x-1 text-sm cursor-pointer"
                  onClick={() => setTab(1 + i)}
                >
                  {tab >= 1 + i ? (
                    <IoCheckmarkSharp className="text-white bg-blue-600 rounded-full p-2 w-8 h-8" />
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-gray-500">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                  )}

                  <span>{step}</span>
                </div>
                {i !== arr.length - 1 && (
                  <div className="h-[2px] w-8 bg-gray-500"></div>
                )}
              </li>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Progress;
