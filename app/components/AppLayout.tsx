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
          <Loader />
        ) : (
          <div className="flex flex-col h-screen">
            <NavBar />
            <main className="flex-1 flex mt-14 flex-col sm:flex-row bg-black">
              <RightSection />
              <MidSection>{children}</MidSection>
            </main>
          </div>
        )}
      </RecoilRoot>
    </>
  );
};

export default memo(AppLayout);

