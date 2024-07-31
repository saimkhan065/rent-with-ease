import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import Link from "next/link";
//import connectDB from "@/config/database";

const HomePage: React.FC = async () => {
  //await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      {/* <div>Properties Home</div>
      <Link href="/properties">Show Properties</Link> */}
      <HomeProperties />
    </>
  );
};

export default HomePage;
