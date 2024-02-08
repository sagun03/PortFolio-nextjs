import SocialMediaLinks from "./SocialMediaLinks";

const RightSection = () => {
  return (
    <main className="flex-custom1 p-6">
      <section className="py-1">
        <div className="flex items-center flex-col">
          <div className="flex justify-center w-full sm:flex-col">
          <div className="relative">
            <img
              src="/pic3.jpeg"
              alt="Profile Circle"
              className="rounded-full w-36 max-h-28 sm:w-40 sm:max-h-40 md:w-52 md:max-h-52 lg:w-72 lg:max-h-72 drop-shadow-md"
            />
          </div>
          <div className="p-2 sm:p-0 flex flex-col text-center sm:text-start sm:block justify-center sm:mt-4 sm:justify-items-start  w-full">
            <h2 className="text-3xl font-semibold sm:text-2xl">Sagun Saluja</h2>
            <p className="text-gray-600 font-semibold text-xl">
              Software Developer
            </p>
          </div>
          </div>
          <div className="mt-6 sm:mt-1 sm:justify-items-start w-full">
            <p className="text-base text-center sm:text-sm sm:text-start">
              👋 I&apos;m a passionate Software Developer with 5+ years of
              dedicated experience deeply enthusiastic about React (However, this portfolio is built in next js ✨)
            </p>
            <div className="py-3 mt-2 hidden sm:block">
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
