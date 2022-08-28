import Clients from "./components/main/Clients";
import Facilities from "./components/main/Facilities";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import HomeUs from "./components/main/AboutUs/HomeUs";
import LatestNews from "./components/main/LatestNews";
import Map from "./components/main/Map";
import OffHome from "./components/main/OffHome";
import Questions from "./components/main/Questions";
import Sponsors from "./components/main/Sponsors";
import TopSlider from './components/main/slider/TopSlider';
function App() {
  return (
    <>
      <Header />
      <TopSlider />
      <HomeUs />
      <Facilities />
      <Clients />
      <OffHome />
      <Sponsors />
      <Questions />
      {/* <Map /> */}
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
