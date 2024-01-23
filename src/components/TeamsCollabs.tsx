import brand1 from "../assets/brand-1.svg";
import brand2 from "../assets/brand-2.svg";
import brand3 from "../assets/brand-3.svg";
import brand4 from "../assets/brand-4.svg";
import brand5 from "../assets/brand-5.svg";

interface TeamsCollabsData {
  imageUrl: string;
  imageAlt: string;
}

const teamData: TeamsCollabsData[] = [
  {
    imageUrl: brand1,
    imageAlt: "unsplash Logo",
  },

  {
    imageUrl: brand2,
    imageAlt: "notion Logo",
  },

  {
    imageUrl: brand3,
    imageAlt: "intercom Logo",
  },

  {
    imageUrl: brand4,
    imageAlt: "descript Logo",
  },

  {
    imageUrl: brand5,
    imageAlt: "grammarly Logo",
  },
];

const TeamsCollabs = () => {
  return (
    <div className="max-w-[72rem] mx-auto text-center py-16 lg:px-0 px-5">
      <h1 className="font-bold lg:text-3xl md:text-2xl text-xl">
        More than 25,000 teams use Collabs
      </h1>
      <div className="my-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-10 ">
        {teamData.map(({ imageAlt, imageUrl }) => (
          <img src={imageUrl} className="brand__logos" alt={imageAlt} />
        ))}
      </div>
    </div>
  );
};

export default TeamsCollabs;
