import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PropertyTabs = ({ properties }) => {
  const [activeTab, setActiveTab] = useState("details");
  const [property, setProperty] = useState({});

  const [price, setPrice] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        console.log(properties);

        const foundProperty = properties.find((property) => property.id === id);

        console.log(foundProperty);
        if (foundProperty) {
          setProperty(foundProperty);
          setPrice(foundProperty.price.toLocaleString());
        } else {
          // setError("Property not found"); // Handle case where property is not found
        }
      } catch (err) {
        console.error(err);
      } finally {
      }
    };
    fetchProperty();

    // console.log(selectedImage);
  }, [properties, id]);

  return (
    <div className="mt-8 border rounded-md overflow-hidden">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 text-sm font-medium flex items-center ${
            activeTab === "details"
              ? "text-green-600 border-b-2 border-green-600 bg-white"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          <svg
            className="w-4 h-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M3 8H21" stroke="currentColor" strokeWidth="2" />
            <path d="M8 21V8" stroke="currentColor" strokeWidth="2" />
          </svg>
          Details
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium flex items-center ${
            activeTab === "map"
              ? "text-green-600 border-b-2 border-green-600 bg-white"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("map")}
        >
          <svg
            className="w-4 h-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Map
        </button>
      </div>

      {activeTab === "details" && (
        <div className="py-4 px-3 xl:px-6 bg-white">
          <h3 className="font-medium mb-2 lg:text-[20px]">Description</h3>
          <div className="text-gray-600 text-sm">
            {property?.description?.[0] && (
              <p className="text-gray-600 text-sm lg:text-lg">
                {property.description[0]}
              </p>
            )}
          </div>

          <p className="text-gray-600 text-sm mt-4 lg:text-lg">
            {property?.description?.[1] && property.description[1]}
          </p>

          <div className="mt-4 text-xs lg:text-[15px] text-gray-500">
            <div className="flex flex-wrap gap-x-8 gap-y-1">
              <span>Market Status: {property.status}</span>
              <span>Added on: 31 May 2024</span>
              <span>Last Updated: 2 June 2024</span>
            </div>
          </div>

          <div className="border rounded-lg mt-10 px-3 xl:px-5">
            <h3 className="font-medium mt-6 mb-2 lg:text-[25px]">Amenities</h3>
            <div className=" rounded-md overflow-hidden mb-10">
              <table className="w-full text-[11px] md:text-[13px] lg:text-[20px] xl:text-lg">
                <tbody>
                  <tr className="">
                    <td className=" py-1 px-1 xl:px-4">Air Conditioning</td>
                    <td className=" py-1 px-1 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-1 xl:px-4 ">Reception</td>
                    <td className=" py-1 px-1 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-1 xl:px-4 ">Gym</td>
                    <td className=" py-1 px-1 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-1 xl:px-4 ">Elevator</td>
                    <td className=" py-1 px-1 xl:px-4 text-center">Yes</td>
                  </tr>
                  <tr className="">
                    <td className=" py-1 px-2 xl:px-4 ">Swimming Pool</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">No</td>
                    <td className=" py-1 px-2 xl:px-4 ">Heater</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">No</td>
                    <td className=" py-1 px-2 xl:px-4 ">In-Unit Laundry</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-2 xl:px-4 ">Playground</td>
                    <td className=" py-1 px-2 xl:px-4 text-center">Yes</td>
                  </tr>
                  <tr>
                    <td className=" py-1 px-2 xl:px-4 ">Parking Space</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-2 xl:px-4 ">Storage room</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-2 xl:px-4 ">In-Unit Laundry</td>
                    <td className=" py-1 px-2 xl:px-4 text-center ">Yes</td>
                    <td className=" py-1 px-2 xl:px-4 ">Garden</td>
                    <td className=" py-1 px-2 xl:px-4 text-center">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "map" && (
        <div className="py-4 px-6 bg-white">
          <div className="bg-gray-100 h-64 rounded-md flex items-center justify-center">
            <p className="text-gray-500">
              Map view is not available in this demo
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTabs;
