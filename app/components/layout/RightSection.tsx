import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";
import ContributionGraph from "../contributionGrpah/ContributionGraph";
const RightSection = () => {
  return (
    <main className="flex-custom1 p-6">
      <section className="py-1">
        <div className="flex items-center flex-col">
          <div className="relative">
            <img
              src="/pic3.jpeg"
              alt="Profile Circle"
              className="rounded-full w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 drop-shadow-md"
            />
          </div>
          <div className="mt-4 justify-items-start w-full">
            <h3 className="text-2xl font-semibold">Sagun Saluja</h3>
            <p className="text-gray-600 font-semibold text-xl">
              Software Developer
            </p>
          </div>
          <div className="mt-1 justify-items-start w-full">
            <p className="text-sm">
              👋 I&apos;m a passionate Software Developer with 5+ years of
              dedicated experience deeply enthusiastic about React (However, this portfolio is built in next js ✨)
            </p>
            <div className="py-3 mt-2">
            {/* <ContributionGraph /> */}
            <SocialMediaLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RightSection;
