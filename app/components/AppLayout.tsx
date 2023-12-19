import Footer from "./Footer";
import NavBar from "./NavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;