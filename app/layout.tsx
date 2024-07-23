import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import { title } from "process";

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
        <Navbar></Navbar>
        <div>{children}</div>
        <div>TEST:THERE IS A CHILREN PROP DIV ABOVE</div>
      </body>
    </html>
  );
};

export default MainLayout;
