import { Navigate, Route, Routes } from "react-router-dom";

import AboutUs from "./components/main/AboutUs/AboutUs";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/*" element={<Navigate to='/home' />}/>
        </Routes>
      </Layout>
  );
}

export default App;
