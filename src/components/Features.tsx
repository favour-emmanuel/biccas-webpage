import collabTeams from "../assets/collabTeams.svg";
import cloudStorage from "../assets/cloudStorage.svg";
import dailyAnalytics from "../assets/dailyAnalytics.svg";

interface featuresImageData {
  imageUrl: string;
  imageAlt: string;
  headingText: string;
  subText: string;
}

const featuresData: featuresImageData[] = [
  {
    imageUrl: collabTeams,
    imageAlt: "Collaboration Team Image",
    headingText: "Collboration Teams ",
    subText: "Here you can handle projects together with team virtually",
  },
  {
    imageUrl: cloudStorage,
    imageAlt: "Cloud Storage Image",
    headingText: "Cloud Storage",
    subText:
      "No nedd to worry about storage because we provide storage up to 2 TB",
  },
  {
    imageUrl: dailyAnalytics,
    imageAlt: "Daily Analytics Image",
    headingText: "Daily Analytics",
    subText:
      "We always provide useful informatin to make it easier for you every day",
  },
];

const Features = () => {
  return (
    <div className="max-w-[72rem] mx-auto  md:py-12 py-8 lg:px-0 px-5">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-10">
        <h1 className="feature__text">Our Features you cab get</h1>
        <p className="text-appGray max-w-[28rem] pt-3 pb-6 sm:text-base text-sm">
          We offer a variety of interesting features that you can help increase
          your productivity at work and manage your project easily
        </p>
        <button className="hero__btn max-w-[10rem]">Get Started</button>
      </div>
      <div className="flex justify-between md:flex-row flex-col">
        {featuresData.map(({ imageUrl, imageAlt, headingText, subText }) => (
          <>
            <div>
              <img src={imageUrl} alt={imageAlt} className="max-w-[18rem]" />
              <div>
                <h4 className="text-appBlack font-semibold sm:text-xl text-lg pt-7">
                  {headingText}
                </h4>
                <p className="text-appGray font-normal sm:text-base text-sm max-w-[21rem] pt-4">
                  {subText}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Features;
