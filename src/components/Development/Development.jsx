import { Link } from "react-scroll";
import image from "../../assets/images/icon_css_html_2.2.svg";

export default function Development() {
  return (
    <div
      id="development"
      className="bg-background"
    >
      <div className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4">
        <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8 text-center xl:text-right">
          <p className="section-title">My developer path</p>
          <p className="my-6 md:text-[18px] text-sm font-normal text-gray-500">
            Design was my starting point, but curiosity pulled me into development.
            I wanted to bring my own interfaces to life, so I started turning layouts into responsive pages and reusable components.
            Today I’m growing as a front-end developer through real projects—bridging design and code to create polished, functional results.
          </p>

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
            See Projects
          </Link>
        </div>

        <div className="justify-end my-2 w-fit mx-auto ">
          <img src={image} alt="" width="540px" />
        </div>
      </div>

    </div>
  );
};
