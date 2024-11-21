import Slider from "../../components/Common/Slider/Slider";
import OptionsSection from "../../components/OptionsSection/OptionsSection";
import ServicesOptions from "../../components/ServicesOptions/ServicesOptions";
import WhyWe from "../../components/WhyWe/WhyWe";
import Faq from "../../components/FAQ/Faq"
import WeGivesYou from "../../components/WeGivesYou/WeGivesYou";

function Main() {
  return (
    <main>
      <Slider />
      <OptionsSection />
      <ServicesOptions />
      <WhyWe />
      <Faq/>
      <WeGivesYou/>
    </main>
  );
}

export default Main;
