'use client';

import CardProfile from "@/components/cardProfile/CardProfile";
import CardRequest from "@/components/cardRequest/CardRequest";
import Dashboard from "@/components/dashboard/Dashboard";
import { useNavTab } from "@/context/NavigationContext";

const HomePage: React.FC = () => {
    const {currentData} = useNavTab();

  return (
    <div className='px-5 pb-5 bg-[#f8fbff] h-full'>
      { currentData.currentTab === "Dashboard" && <Dashboard /> }
      { currentData.currentTab === "Card Profile" && <CardProfile /> }
      { currentData.currentTab === "Card Request" && <CardRequest /> }
    </div>
  );
};

export default HomePage;
