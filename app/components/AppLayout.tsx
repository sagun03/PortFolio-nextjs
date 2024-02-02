"use client";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import RightSection from "./RightSection";
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
          className="flex h-full bg-primary px-16"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <RightSection />
          <MidSection>{children}</MidSection>
          {/* <LeftSection /> */}
        </main>
      </RecoilRoot>
    </>
  );
};

export default memo(AppLayout);
