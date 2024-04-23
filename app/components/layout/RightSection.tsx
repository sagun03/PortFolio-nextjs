import FadeEffectWrapper from "../about-me/components/FadeEffectWrapper";
import SocialMediaLinks from "./SocialMediaLinks";

const RightSection = () => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    const isMobileString = window.localStorage.getItem("isMobile");
    isMobile = isMobileString ? JSON.parse(isMobileString) : false;
  }
  return (
    <main className="flex-custom1 p-6">
      <section className="py-1">
        <div className="flex items-center flex-col">
          <div className="flex justify-center w-full sm:flex-col">
            <div className="relative">
              <FadeEffectWrapper>
                <img
                  src="/pic3.jpeg"
                  alt="Profile Circle"
                  className="rounded-full w-36 max-h-28 sm:w-40 sm:max-h-40 md:w-52 md:max-h-52 lg:w-72 lg:max-h-72 drop-shadow-md"
                />
              </FadeEffectWrapper>
            </div>
            <FadeEffectWrapper duration={200}>
              <div className="p-2 sm:p-0 flex flex-col text-center sm:text-start sm:block justify-center sm:mt-4 sm:justify-items-start  w-full">
                {!isMobile && (
                  <h2 className="text-3xl font-semibold sm:text-2xl">
                    Sagun Saluja
                  </h2>
                )}
                <p className="text-gray-600 font-semibold text-xl">
                  Full Stack Developer
                </p>
              </div>
            </FadeEffectWrapper>
          </div>
          <div className="mt-6 sm:mt-1 sm:justify-items-start w-full">
            <FadeEffectWrapper duration={400}>
              {" "}
              <p className="text-base text-center sm:text-sm sm:text-start">
                👋 I&apos;m a passionate Full Stack Developer with 5+ years of
                dedicated experience deeply enthusiastic about React (However,
                this portfolio is built in next js ✨)
              </p>{" "}
            </FadeEffectWrapper>

            <div className="py-3 mt-2 hidden sm:block">
              {/* <ContributionGraph /> */}
              <FadeEffectWrapper duration={600}>
                <SocialMediaLinks />
              </FadeEffectWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RightSection;
