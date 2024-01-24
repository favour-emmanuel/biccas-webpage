import subtract from "../assets/Subtract.svg";
import benefitImage from "../assets/success.svg";

interface benefitData {
  text: string;
}

const benefitItems: benefitData[] = [
  {
    text: "Free Consulting With Expert Saving Money",
  },

  {
    text: "Online Banking",
  },

  {
    text: "Investment Report Every Month",
  },

  {
    text: "Saving Money For The Future",
  },

  {
    text: "Online Transaction",
  },
];

const Benefits = () => {
  return (
    <div className="max-w-[72rem] mx-auto md:py-8 py-5 lg:px-0 px-5">
      <div className="flex md:flex-row flex-col justify-between  py-20">
        <div>
          <h1 className="feature__text pb-7">What Benifit Will You Get</h1>
          {benefitItems.map(({ text }) => (
            <div className="flex items-center gap-5 py-4">
              <img src={subtract} alt="" className="max-w-[1.4rem] " />
              <p className="sm:text-base text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src={benefitImage}
            alt="image"
            className="lg:max-w-[31rem] md:max-w-[28rem] md:mt-0 mt-9"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
