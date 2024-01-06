import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SocialMediaLinks from "./SocialMediaLinks";
const RightSection = () => {
  return (
    <main className="flex-custom1 p-6">
      <section className="py-1">
        <div className="flex items-center flex-col">
          <div className="relative w-full">
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
          <div className="mt-2 justify-items-start w-full">
            <p className="text-sm">
              👋 I'm a passionate Software Developer
              deeply enthusiastic about React (However, this portfolio is built in next js ✨). 💻 I bring over 4 years of
              dedicated experience in web development, specializing in crafting
              captivating and highly responsive user interfaces.
            </p>
            <div className="py-3">
            <SocialMediaLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RightSection;
