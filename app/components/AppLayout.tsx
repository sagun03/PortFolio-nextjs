"use client"
import { RecoilRoot } from "recoil";
import MidSection from "./layout/MidSection";
import NavBar from "./header/NavBar";
import RightSection from "./layout/RightSection";
import { memo } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <RecoilRoot>
        <NavBar />
        <main
          className="h-full bg-primary px-2 sm:h-main-screen sm:px-8 md:px-16 sm:flex"
        >
          <RightSection />
          <MidSection>{children}</MidSection>
        </main>
      </RecoilRoot>
    </>
  );
};

export default memo(AppLayout);
