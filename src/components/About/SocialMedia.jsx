import {
  faLinkedin,
  faGithub,
  faBehance,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/radostina-b-7512942b1/", disabled: false },
  { icon: faGithub, link: "https://github.com/reeidi", disabled: false },
  { icon: faBehance, link: "#", disabled: true },
  { icon: faGoogleDrive, link: "https://drive.google.com/file/d/1Ixtjmqixf8Fc-eFPUwtsa1wgNKPrVHvj/view", disabled: false },
];

export default function SocialMedia() {
  return socialIcons.map((item, index) => (
    <a
      href={item.disabled ? undefined : item.link}
      className={`text-primary ${item.disabled ? "" : "hover:bg-primary"} p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square ${item.disabled ? "text-gray-400" : ""}`}
      />
    </a>
  ));
};
