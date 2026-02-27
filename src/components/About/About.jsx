import radost from "../../assets/images/Radost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";
import laptop_screen from "../../assets/images/laptop_screen.svg";
import "./About.css";

export default function About() {
  return (
    <div
      id="about"
      className="">
      <div
        style={{ backgroundImage: `url(${laptop_screen})` }}
        className={`background-frame content relative mx-4 xxl:mx-0.5 -bottom-10 lg:-bottom-18 z-10 rounded-3xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-36 lg:p-20 md:p-16 sm:p-10 p-4`}
      >
        <div className="flex max-md:flex-col justify-center items-center gap-6">

          <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
            <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
              <img
                className="h-[120%] object-cover"
                src={radost}
                alt=""
              />
            </div>

            <div className="relative bottom-9">
              <div className="flex justify-center">
                <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-lg">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:w-full w-[33rem]">
            <h2
              className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
            >
              Hi, I'm Radost!
            </h2>
            <div
              className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
            >
              <p>
                {/* Създавам уебсайтове и дигитални интерфейси с фокус върху чист дизайн и удобно потребителско изживяване.
                Комбинирам UI/UX работа във Figma с front-end разработка, за да превръщам идеи в модерни и функционални решения. */}
                I create websites and digital interfaces with a focus on clean design and a seamless user experience.
                I combine UI/UX work in Figma with front-end development to turn ideas into modern, functional solutions
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to={'projects'}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-140}
                activeStyle={{
                  backgroundColor: "#9929fb",
                  color: "white",
                }}
                className={`btn xxs:btn-lg btn-primary px-6 max-xs:px-2 xxs:py-3 text-xs xxs:text-[14px] sm:text-[16px]`}
              >
                My Projects
              </Link>
              <a
                className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 text-primary border-primary hover:text-primary-dark hover:border-primary-dark bg-white duration-300 transition-all  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
                href="#!"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
