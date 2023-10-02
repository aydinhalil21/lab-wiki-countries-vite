import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="App">
    </div>
    < Navbar />
    <Routes>
      <Route path= '/' element={< HomePage />}/>
      <Route path= '/country-details/:countryId' element={<CountryDetails />}/>
    </Routes>
    </>
  );
}

export default App;
