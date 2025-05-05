import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import Form from "../Form";

const TitleCard = ({ properties }) => {
  const [property, setProperty] = useState({});
  const { id } = useParams();
  const [formTitle, setFormTitle] = useState("");

  const [price, setPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleTitleChange = (title) => {
    console.log("clicked");

    setIsVisible(!isVisible);
    setFormTitle(title);
  };

  return (
    <div className="bg-white flex-wrap xl:flex-nowrap flex justify-between shadow-md rounded-md w-full p-2">
      <div>
        <h2 className="w-full justify-start text-[20px] text-slate-800 lg:text-sm xl:text-base font-semibold font-['Crimson_Pro'] leading-normal">
          {property.title}
        </h2>
        <p className="text-base text-gray-500 flex items-center">
          <img src={assets.marker} alt="" className="mr-1 w-5 h-5" />
          {property.address}
        </p>
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="flex justify-between w-32">
          <div className="flex items-center text-gray-600 mr-1">
            <img src={assets.bed} alt="" className="w-5 h-5" />
            <span className="ml-1 text-[20px]">4</span>
          </div>
          <div className="flex items-center text-gray-600 mr-1">
            <img src={assets.bath} alt="" className="w-5 h-5" />
            <span className="ml-1 text-[20px]">2</span>
          </div>
          <div className="flex items-center text-gray-600">
            <img src={assets.kitchen} alt="" className="w-5 h-5" />
            <span className="ml-1 text-[20px]">4</span>
          </div>
        </div>
        <span className="text-lg font-semibold text-green-600">
          &#8358;{price}
        </span>
      </div>

      <div className="mt-4 w-full grid grid-cols-3 md:grid-cols-4 lg:w-[550px] xl:w-[710px]">
        <button className="mr-1" onClick={() => handleTitleChange("Call Back")}>
          <div className="flex justify-start md:justify-center items-center w-[93px] md:w-[150px] lg:w-[100px] xl:w-[140px] bg-green-100 text-green-600 border-green-400 border-2 py-2 px-1  lg:py-2 lg:px-2 xl:py-2 xl:px-2 rounded-md lg:text-[15px] xl:text-[20px] hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">
            <img
              src={assets.incomingCall}
              alt=""
              className="w-4 h-4 mr-1 xl:w-6 xl:h-6"
            />
            <h2>Callback</h2>
          </div>
        </button>
        <button
          className=" -ml-4"
          onClick={() => handleTitleChange("Book a Tour")}
        >
          <div className="flex justify-start md:justify-center items-center w-[120px] md:w-[150px] lg:w-[120px] xl:w-[170px] bg-green-100 text-green-600 border-green-400 border-2 py-2 px-1 rounded-md lg:text-[15px] xl:text-[20px] hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">
            <img
              src={assets.calender}
              alt=""
              className="w-4 h-4 mr-1 xl:w-6 xl:h-6"
            />
            <h2>Book a Tour</h2>
          </div>
        </button>
        <button className="mr-1 -m-1">
          <div className="flex justify-start md:justify-center items-center w-[125px] md:w-[150px] lg:w-[130px] xl:w-[170px] bg-green-100 text-green-600 border-green-400 border-2 py-2 px-1 lg:px-2 rounded-md lg:text-[15px] xl:text-[20px] hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">
            <img
              src={assets.chat}
              alt=""
              className="w-4 h-4 mr-1 xl:w-6 xl:h-6"
            />
            <h2>Chat with Us</h2>
          </div>
        </button>
        <div className="mt-2 md:mt-0 w-[150px] lg:w-[140px] xl:w-[200px] flex justify-center items-center bg-green-600 text-white py-2 xl:px-2 lg:px-2 rounded-md lg:text-[15px] xl:text-[20px] font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1">
          <button className="">Start Transaction</button>
        </div>
      </div>

      <div className="absolute z-10">
        {isVisible ? (
          <Form title={formTitle} setIsVisible={setIsVisible} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TitleCard;
