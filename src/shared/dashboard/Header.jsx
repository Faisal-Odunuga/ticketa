import { Ticket } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        <div className="flex items-center h-16 space-x-2">
          <span>Hello, Odunuga</span>
        </div>
        <div className="flex items-center space-x-2">
          <Ticket className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">My Tickets</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
