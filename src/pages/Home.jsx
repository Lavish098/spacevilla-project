import { useContext, useState } from "react";
import Header from "../components/homeCards/Header";
import NavBar from "../components/Navbar";
import PropertyTabs from "../components/homeCards/PropertyTabs";
import SearchBox from "../components/homeCards/SearchBox";
import TrustedBy from "../components/homeCards/TrustedBy";
import { PropertyContext } from "../context/PropertyContext";
import RecomProductCard from "../components/homeCards/RecomProductCard";
import SellSection from "../components/homeCards/SellSection";
import HowItWorks from "../components/homeCards/HowItWorks";
import StrugglingSection from "../components/homeCards/StrugglingSection";
import ExclusiveSection from "../components/homeCards/ExclusiveSection";
import VillaSphere from "../components/homeCards/VillaSphere";
import FAQ from "../components/homeCards/FAQ";
import BottomNav from "../components/BottomNav";
import SpacevillaApp from "../components/homeCards/SpaceVillaApp";

const Home = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const { properties } = useContext(PropertyContext);

  return (
    <div className="2xl:mx-24">
      <Header />
      <div className="container mx-auto px-4 md:px-6 -mt-56 xl:-mt-[110px] relative z-10">
        <div className="bg-black/20 flex flex-col justify-center items-center backdrop-blur-sm rounded-lg shadow-xl p-4 py-10">
          <PropertyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBox activeTab={activeTab} />
        </div>
      </div>
      <TrustedBy />
      <div className=" mx-4 mt-10 w-full">
        <div className="flex flex-col w-full justify-center items-center text-[#2F3C53] mb-10">
          <h2 className="text-[25px] md:text-[30px] font-semibold">
            Recommended Properties
          </h2>
          <p>Some of our selected properties based on your location</p>
        </div>
        <main className=" grid grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {properties.length > 0 ? (
            properties
              .slice(0, 6)
              .map((property) => (
                <RecomProductCard key={property.id} property={property} />
              ))
          ) : (
            <div>No properties</div>
          )}
        </main>

        <div className="  flex justify-center items-center w-full mt-10 mb-10 text-[15px]">
          <h2 className="bg-[#039855] px-10 py-3 rounded-lg text-white">
            Load More Listings
          </h2>
        </div>
      </div>

      <SellSection />
      <HowItWorks />
      <StrugglingSection />
      <ExclusiveSection />
      <VillaSphere />
      <FAQ />

      <div className="text-[#B9B9BF2E] flex justify-center items-center w-full">
        <h2 className="text-[70px]">
          Spacevilla is changing the world of real estate
        </h2>
      </div>
      <SpacevillaApp />
      <BottomNav />
    </div>
  );
};

export default Home;
