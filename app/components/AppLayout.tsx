import Footer from "./Footer";
import LeftSection from "./LeftSection";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import RightSection from "./RightSection";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="flex">
      <RightSection />
      <MidSection> {children} <Footer /> </MidSection>
      <LeftSection />
      </main>
      
    </>
  );
};

export default AppLayout;
