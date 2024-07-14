import AboutComponent from "./About/About";
import HeroComponent from "./Hero/Hero";
import SchedulesComponent from "./Schedules/Schedules";

const HomeComponent: React.FC = () => (
  <>
    <HeroComponent />
    <AboutComponent />
    <SchedulesComponent />
  </>
);

export default HomeComponent;
