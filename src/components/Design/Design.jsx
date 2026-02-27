import { Link } from "react-scroll";
import image1 from "../../assets/images/icon_web_design_1.svg";  

export default function Design() {
  return (
    <div
      id="design"
      className="bg-soft-white pt-30"
    >
      <div
        className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      >
        <div className="mx-auto">
          <img src={image1} alt="" width="540px" />
        </div>

        <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8 text-center xl:text-left">
          <p className="section-title">My design background</p>
          <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal text-gray-500">
            In my years of experience in graphic and web design,
            I've worked on everything from leaflets to websites and mobile apps.
            That mix has shaped my eye for detail and taught me how to communicate ideas clearly across different formats.
          </p>
          <p className="my-6 md:text-[18px] text-sm font-normal text-gray-500">
            I blend clean design with efficient code to build engaging,
            user-friendly web experiences that stand out.
          </p>
          <Link
            to={'projects'}
            smooth={true}
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

      </div>
    </div>
  );
};
