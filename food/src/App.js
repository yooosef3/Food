import { Navigate, Route, Routes } from "react-router-dom";

import AboutUs from "./components/main/AboutUs/AboutUs";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Offer from "./components/main/offer/Offer";
import OurTeam from "./components/main/OurTeam";
import PricingList from "./components/main/PricingList";
import Testimonals from "./components/main/testimonals/Testimonals";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/offer" element={<Offer />}/>
          <Route path="/ourteam" element={<OurTeam />}/>
          <Route path="/testimonals" element={<Testimonals />}/>
          <Route path="/pricinglist" element={<PricingList />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/*" element={<Navigate to='/home' />}/>
        </Routes>
      </Layout>
  );
}

export default App;
