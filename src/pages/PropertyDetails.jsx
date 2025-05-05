import { useContext, useEffect, useState } from "react";
import ImagesCard from "../components/propertyCards/ImagesCard";
import { PropertyContext } from "../context/PropertyContext";
import NavBar from "../components/Navbar";
import TitleCard from "../components/propertyCards/titleCard";
import PropertyTabs from "../components/propertyCards/PropertyTabsCard";
import SimilarProductCard from "../components/propertyCards/SimilarProductCard";
import BottomNav from "../components/BottomNav";
import SideNavBar from "../components/SideNavBar";

const PropertyDetails = () => {
  const { properties, isSideBarOpen } = useContext(PropertyContext);

  return (
    <div className="w-full">
      <div className="flex relative ">
        <SideNavBar />
        <div
          className={`${
            isSideBarOpen ? "xl:w-[80.5%]" : "2xl:mx-24 w-full xl:w-[94%]"
          }`}
        >
          <ImagesCard properties={properties} isSideBarOpen={isSideBarOpen} />
          <TitleCard properties={properties} />
        </div>
      </div>
      <PropertyTabs properties={properties} />

      <div className=" mx-3 xl:mx-8 mt-10">
        <h2 className="text-[30px] font-semibold mb-5">Similar Products</h2>
        <main className=" grid grid-cols-1 mx-3 xl:mx-0 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {properties.length > 0 ? (
            properties
              .slice(0, 6)
              .map((property) => (
                <SimilarProductCard key={property.id} property={property} />
              ))
          ) : (
            <div>No properties</div>
          )}
        </main>
      </div>

      <div className="text-green-600 underline flex justify-center items-center w-full mt-10 text-[20px]">
        <h2>Load More Listings</h2>
      </div>

      <BottomNav />
    </div>
  );
};

export default PropertyDetails;
