import subtract from "../assets/Subtract.svg";

interface planSectionData {
  text: string;
}

const freeUser: planSectionData[] = [
  {
    text: "2 Users",
  },

  {
    text: "2 Files",
  },

  {
    text: "Public Share & Comments",
  },

  {
    text: "Chat Support ",
  },

  {
    text: "New income apps",
  },
];

const proUser: planSectionData[] = [
  {
    text: "4 Users",
  },

  {
    text: "All Apps",
  },
  {
    text: "Unlimited editable exports",
  },
  {
    text: "Folders and collaboration",
  },
  {
    text: "All incoming apps",
  },
];

const businessUser: planSectionData[] = [
  {
    text: "All the features of pro plan",
  },
  {
    text: "Account success Manager",
  },
  {
    text: "Single Sign-On (SSO)",
  },
  {
    text: "Co-conception pogram",
  },
  {
    text: "Collaboration-Soon",
  },
];

const Plan = () => {
  return (
    <div className="max-w-[72rem] mx-auto py-8 lg:px-0 px-5">
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-semibold max-w-[28rem]">
            Choose Plan That's Right For You
          </h1>
          <p className="text-appGray pt-6">
            Choose plan that works best for you, feel free to contact us
          </p>
          <div className="flex justify-center py-7">
            <div className="max-w-[22rem] py-2 bg-white rounded-lg flex gap-8 items-center px-6 box__shadow">
              <button className="border-none py-2 bg-white text-appBlack text-sm font-medium">
                Bill Monthly
              </button>
              <button className="bg-appGreen py-2 px-5 text-white text-sm font-medium rounded-md">
                Bill Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-6 pt-10">
        {/* white box group */}
        <div className="max-w-[23rem] bg-white px-5 py-3 rounded-xl">
          <div className="text-center">
            <h1 className="text-3xl font-semibold pt-5">Free</h1>
            <p className="text-appGray text-base">
              Have a go and test your superpowers
            </p>
            <h3 className="text-2xl text-appBlack font-semibold pt-3">
              <sup className="text-appGray text-sm">$</sup> 0
            </h3>
          </div>
          <div className="max-w-[20rem] py-5 px-8">
            {freeUser.map(({ text }) => (
              <div className="flex items-center gap-5 py-3">
                <img src={subtract} alt="" className="max-w-[1.4rem]" />
                <p className="sm:text-[0.938rem] text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className=" bg-white text-appGreen border-none py-2 rounded-lg box__shadow px-10 mb-3">
              Signup for free
            </button>
          </div>
        </div>
        {/* green box group */}
        <div className="max-w-[23rem] bg-appGreen px-5 py-3 rounded-xl">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold pt-5">Free</h1>
            <p className="text-sm pt-2">Have a go and test your superpowers</p>
            <h3 className="text-2xl font-semibold pt-3">
              <sup className=" text-sm">$</sup> 8
            </h3>
            <div>
              <button className="bg-appLightGreen py-1.5 px-3 text-sm rounded-md">
                Save $50 a year
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[20rem] py-5 px-5 bg-white my-3 rounded-md">
              {proUser.map(({ text }) => (
                <div className="flex items-center gap-5 py-3">
                  <img src={subtract} alt="" className="max-w-[1.4rem]" />
                  <p className="sm:text-[0.938rem] text-sm">{text}</p>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className=" bg-appGreen border-none text-white py-2 rounded-lg box__shadow px-10 mb-3">
                  Go to pro
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* white */}
        <div className="max-w-[23rem] bg-white px-5 py-3 rounded-xl">
          <div className="text-center">
            <h1 className="text-3xl font-semibold pt-5">Free</h1>
            <p className="text-appGray text-base">
              Have a go and test your superpowers
            </p>
            <h3 className="text-2xl text-appBlack font-semibold pt-3">
              <sup className="text-appGray text-sm">$</sup> 0
            </h3>
          </div>
          <div className="max-w-[20rem] py-5 px-8">
            {businessUser.map(({ text }) => (
              <div className="flex items-center gap-5 py-3">
                <img src={subtract} alt="" className="max-w-[1.4rem]" />
                <p className="sm:text-[0.938rem] text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className=" bg-white text-appGreen border-none py-2 rounded-lg box__shadow px-10 mb-3">
              Go to Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
