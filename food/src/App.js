import { Navigate, Route, Routes } from "react-router-dom";

import AboutUs from "./components/main/AboutUs/AboutUs";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Offer from "./components/main/offer/Offer";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/offer" element={<Offer />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/*" element={<Navigate to='/home' />}/>
        </Routes>
      </Layout>
  );
}

export default App;
