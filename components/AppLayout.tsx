
"use client";
import { useEffect } from "react";
import MidSection from "./layoutComponents/MidSection";
// import NavBar from "./header/NavBar";
import { RecoilRoot } from "recoil";
import RightSection from "./layoutComponents/RightSection";
import NavBar from "./header/NavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); 
  });
  
  return (
    <>
      <RecoilRoot>
          <div className="flex flex-col h-screen">
            <NavBar />
            <main className="flex-1 flex mt-14 flex-col sm:flex-row bg-black">
              <RightSection />
              <MidSection>{children}</MidSection>
            </main>
          </div>
      </RecoilRoot>
    </>
  );
};

export default AppLayout;

