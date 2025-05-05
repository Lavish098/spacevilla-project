import { createContext, useContext, useEffect, useState } from "react";
import { properties as propertyData } from "../../public/properties";

export const PropertyContext = createContext();

const PropertyContextProvider = (props) => {
  const [properties, setProperties] = useState([]);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };
  const fetchProperties = async () => {
    // setLoading(true);
    try {
      setProperties(propertyData);
    } catch (error) {
      console.error("Error fetching properties:", error);
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <PropertyContext.Provider
      value={{
        properties,
        toggleSideBar,
        isSideBarOpen,
        // loading,
        // setLoading,
        // error,
        // setError,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
