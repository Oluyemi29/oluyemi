import HeroFour from "@/components/HeroFour";
import HeroOne from "@/components/HeroOne";
import HeroThree from "@/components/HeroThree";
import HeroTwo from "@/components/HeroTwo";
import Header from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="navBackground">
        <Header />
        <HeroOne />
      </div>
      <HeroTwo />
      <HeroThree />
      <HeroFour />
    </div>
  );
}
