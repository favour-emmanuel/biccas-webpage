import { Link } from "react-router-dom";

import stoke from "../assets/stroke-group.svg";
import user1 from "../assets/user-1.svg";
import user2 from "../assets/user-2.svg";
import user3 from "../assets/user-3.svg";
import user4 from "../assets/user-4.svg";
import euroCoin from "../assets/euro-coin.svg";
import playIcon from "../assets/play-icon.svg";

interface userImages {
  imageLink: string;
  alt: string;
}

interface listMap {
  heading: string;
  listItem: string;
}

const listData: listMap[] = [
  // {
  //   heading: "Support",
  //   listItem:
  // },
];

const userImageData: userImages[] = [
  {
    imageLink: user1,
    alt: "user1",
  },
  {
    imageLink: user2,
    alt: "user2",
  },
  {
    imageLink: user3,
    alt: "user3",
  },
  {
    imageLink: user4,
    alt: "user4",
  },
  {
    imageLink: playIcon,
    alt: "play icon",
  },
];

const Footer = () => {
  return (
    <div className="  bg-appNavyBlue pt-24">
      <div className="mx-auto max-w-[72rem]">
        <div className="flex gap-x-56 text-white">
          <div>
            <h1 className="text-3xl max-w-[20rem] font-semibold">
              People are Saying About DoWhith
            </h1>
            <p className="text-appGray max-w-[28rem] sm:text-base text-xs py-5">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <img src={stoke} alt="" className="sm:max-w-[2rem] max-w-[1rem]" />
            <p className="text-appGray max-w-[28rem] sm:text-base text-xs py-5">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <span className="text-appGray max-w-[28rem] sm:text-base text-xs  my-5">
              _ Aria Zinanrio
            </span>
            {/* user group */}
            <div className="flex gap-4">
              {userImageData.map(({ imageLink, alt }) => (
                <img src={imageLink} alt={alt} className="user__image" />
              ))}
            </div>
          </div>
          <form
            action=""
            className="w-[28rem] bg-appNavyLight px-10 py-8 rounded-lg"
          >
            <div>
              <div className="flex justify-center">
                <img
                  src={euroCoin}
                  alt=""
                  className="md:max-w-[4rem] max-w-[2rem]"
                />
              </div>
              <h1 className="text-center pt-2 sm:text-2xl text-xl font-medium">
                Get Started
              </h1>
              {/* label for email */}
              <h3 className="my-2.5 sm:text-base text-sm">Email</h3>
              {/* input */}
              <input
                type="email"
                placeholder="Enter your Email"
                className="text-appGray w-full outline-none px-2.5 py-2 rounded-md"
              />
              {/* label for message */}
              <h3 className="my-2.5 sm:text-base text-sm">Message</h3>
              {/* text area */}
              <textarea
                name=""
                placeholder="what are you saying?"
                className="bg-white text-appGray px-2.5 outline-none w-full py-2 rounded-md"
              ></textarea>
              <button className="bg-appGreen w-full py-2 flex justify-center items-center rounded-md cursor-pointer mt-2.5">
                Request Demo
              </button>
              <h4 className="flex justify-end text-xs gap-1 mt-2 cursor-pointer">
                <span className="text-appGray">or </span> Start Free Trial
              </h4>
            </div>
          </form>
        </div>
        <div className="pt-11 text-white">
          <div>
            <Link to="/" className="logo">
              Biccas
            </Link>
            <p></p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <h3>{}</h3>
            <li></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
