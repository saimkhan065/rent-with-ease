import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <div>Properties Home</div>
      <Link href="/properties">Show Properties</Link>
    </>
  );
};

export default HomePage;
