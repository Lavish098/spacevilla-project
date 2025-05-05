import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyContextProvider from "./context/PropertyContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <PropertyContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Route>
        </Routes>
      </PropertyContextProvider>
    </BrowserRouter>
  );
}

export default App;
