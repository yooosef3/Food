import Clients from "./components/main/Clients";
import Facilities from "./components/main/Facilities";
import Header from "./components/Header/Header";
import HomeUs from "./components/main/AboutUs/HomeUs";
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
    </>
  );
}

export default App;
