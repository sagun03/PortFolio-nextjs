"use client";
import { RecoilRoot } from "recoil";
import MidSection from "./layout/MidSection";
import NavBar from "./header/NavBar";
import RightSection from "./layout/RightSection";
import { memo, useEffect, useState } from "react";
import Loader from "./common/Loader";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isDelay, setIsDelay] = useState(true);
 
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDelay(false);
    }, 0); 
    return () => clearTimeout(delayTimer); 
  }, []);

  
  return (
    <>
      <RecoilRoot>
        {isDelay ? (
          <></>
        ) : (
          <>
            {" "}
            <NavBar />
            <main className="h-full bg-primary px-2 sm:h-main-screen sm:px-8 md:px-16 sm:flex">
              <RightSection />
              <MidSection>{children}</MidSection>
            </main>
          </>
        )}
      </RecoilRoot>
    </>
  );
};

export default memo(AppLayout);
