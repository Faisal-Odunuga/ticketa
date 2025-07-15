import Events from "../../shared/dashboard/Events";
import Filters from "../../shared/dashboard/Filters";
import LandingPage from "../../shared/dashboard/LandingPage";

const UserDashboard = () => {
  return (
    <div className="min-h-screen !bg-[#f4f6ff]">
      <LandingPage />
      <Filters />
      <Events />
    </div>
  );
};

export default UserDashboard;
