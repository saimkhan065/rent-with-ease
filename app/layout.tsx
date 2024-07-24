import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import { title } from "process";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import InfoBox from "@/components/InfoBox";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  //Meta Data for SEO
  title: "Rent with ease | Find Rentals Easy",
  description: "",
  keywords: "",
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
