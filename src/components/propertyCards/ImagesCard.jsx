import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ImagesCard = ({ properties, isSideBarOpen }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [property, setProperty] = useState({});

  const [price, setPrice] = useState(0);
  const { id } = useParams();
  const [currentMode, setCurrentMode] = useState("Picture Mode");

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

  const nextImage = () => {
    setSelectedImage((prevImage) => (prevImage + 1) % property.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prevIndex) =>
        (prevIndex - 1 + property.images.length) % property.images.length
    );
  };

  const handleModeChange = (e) => {
    setCurrentMode(e.target.value);
  };

  const getModeIcon = () => {
    switch (currentMode) {
      case "Picture Mode":
        return <img src={assets.pic} />;
      case "Video Mode":
        return <img src={assets.play} />;
      case "VR Mode":
        return <img src={assets.group} />;
    }
  };

  return (
    <main className=" mt-6 px-4">
      <div className="flex justify-between w-full mb-5 ">
        <div className="w-10 h-10 bg-gray-100 text-black rounded-[30px] flex justify-center items-center gap-2.5">
          <img src={assets.arrowBack} alt="" className="rotate-90" />
        </div>

        <div className="inline-flex justify-start items-start gap-4">
          <div className="w-7 h-7 relative overflow-hidden">
            <img src={assets.share} alt="" />{" "}
          </div>
          <div className="w-7 h-7 relative overflow-hidden">
            <img src={assets.heart} alt="" />{" "}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 w-full mb-5">
        <div className="col-span-1 lg:col-span-2">
          {property.images && property.images.length > 0 && (
            <div
              className={`${
                isSideBarOpen ? "w-full xl:w-[750px]" : "xl:w-[850px]"
              } relative rounded-md overflow-hidden w-full h-full 2xl:w-[1000px]`}
            >
              <img
                src={property.images[selectedImage]}
                alt={property.title}
                className="w-full xl:[850px] lg:h-[450px] h-[300px] xl:h-[450px] 2xl:w-[1000px] "
              />

              <div className="absolute left-4 top-[40%] z-10">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 relative bg-white/20 rounded-[20px] backdrop-blur-lg overflow-hidden"
                >
                  <img src={assets.arrowLeft} alt="" />
                </button>
              </div>

              <div className="absolute right-4 top-[40%] z-10">
                <button
                  onClick={nextImage}
                  className="w-10 h-10 relative bg-white/20 rounded-[20px] backdrop-blur-lg overflow-hidden"
                >
                  <img src={assets.arrowRight} alt="" />
                </button>
              </div>

              <div className="absolute bottom-7 right-4 z-10 outline-none">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none bg-white h-12 px-6 py-3.5 rounded text-xs flex items-center gap-1.5 shadow-md hover:bg-gray-50 transition-colors">
                    {getModeIcon()}
                    <span>{currentMode}</span>
                    <img src={assets.arrowDown} alt="" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white shadow-lg rounded-md p-1 min-w-[140px] w-[170px]"
                  >
                    <DropdownMenuItem
                      className="flex items-center border-b-gray-300 border-b-[1px] gap-2 px-3 py-3 text-xs cursor-pointer hover:bg-gray-100 rounded-sm"
                      onClick={() => setCurrentMode("Picture Mode")}
                    >
                      <img src={assets.pic} />
                      <span>Picture Mode</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center border-b-gray-300 border-b-[1px] gap-2 px-3 py-3 text-xs cursor-pointer hover:bg-gray-100 rounded-sm"
                      onClick={() => setCurrentMode("Video Mode")}
                    >
                      <img src={assets.play} />
                      <span>Video Mode</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center border-b-gray-300 border-b-[1px] gap-2 px-3 py-3 text-xs cursor-pointer hover:bg-gray-100 rounded-sm"
                      onClick={() => setCurrentMode("VR Mode")}
                    >
                      <img src={assets.group} />
                      <span>VR Mode</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
        <div className="ml-3 hidden lg:block lg:w-[100%]">
          <div className="bg-white mb-3 p-4 rounded-sm border">
            <h3 className="font-medium text-lg flex items-center">
              <div className="w-10 h-10 flex justify-center mr-3 items-center relative bg-slate-200 rounded-[19px]">
                <div className="w-5 h-5 left-[9.50px] top-[9.50px] absolute overflow-hidden">
                  <img src={assets.key} alt="" />
                </div>
              </div>
              Sell Properties
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              As Property Owners and House Agents, you can effortlessly showcase
              properties for sale to a wide audience.
            </p>
          </div>
          <div className="bg-white mb-3  p-4 rounded-sm border">
            <h3 className="font-medium text-lg flex items-center">
              <div className="w-10 h-10 flex justify-center mr-3 items-center relative bg-slate-200 rounded-[19px]">
                <div className="w-5 h-5 left-[9.50px] top-[9.50px] absolute overflow-hidden">
                  <img src={assets.zap} alt="" />
                </div>
              </div>
              Buy Properties
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              As Property Owners and House Agents, you can effortlessly showcase
              properties for sale to a wide audience.
            </p>
          </div>
          <div className="bg-white mb-3  p-4 rounded-sm border">
            <h3 className="font-medium text-lg flex items-center">
              <div className="w-10 h-10 flex justify-center mr-3 items-center relative bg-slate-200 rounded-[19px]">
                <div className="w-5 h-5 left-[9.50px] top-[9.50px] absolute overflow-hidden">
                  <img src={assets.zap} alt="" />
                </div>
              </div>
              Book Shortlets
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              As Property Owners and House Agents, you can effortlessly showcase
              properties for sale to a wide audience.
            </p>
          </div>
        </div>
      </div>

      {property.images && property.images.length > 1 && (
        <div
          className="w-full flex flex-row mb-7 overflow-x-scroll snap-x snap-mandatory"
          style={{ paddingBottom: "15px", clipPath: "inset(0 0 20px 0)" }}
        >
          {property.images &&
            property.images.length > 0 &&
            property.images.slice(0).map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden w-60 h-36 xl:w-80 xl:h-48 flex-shrink-0 snap-start mx-1 cursor-pointer rounded-md transition-all ${
                  selectedImage === image ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={`${image}`}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      )}
    </main>
  );
};

export default ImagesCard;
