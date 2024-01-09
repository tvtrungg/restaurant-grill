import SectionOne from "../components/HomeSection/SectionOne";
import SectionTwo from "../components/HomeSection/SectionTwo";
import SectionThree from "../components/HomeSection/SectionThree";
import SectionFour from "../components/HomeSection/SectionFour";

type THomeProps = {};

export default function Home({}: THomeProps) {
  return (
    <main className="home-bg w-full h-full -z-10">
      <div className="backdrop-blur-[2px] w-full h-full z-0">
        <div className="max-w-screen-2xl mx-auto z-10">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
      </div>
    </main>
  );
}
