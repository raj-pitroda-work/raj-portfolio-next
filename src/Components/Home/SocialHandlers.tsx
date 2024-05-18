import { PROFILE_DETAIL } from "@/utils/Constant";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const SocialHandlers: React.FC<{ icnClass: string; hideLbl?: boolean }> = ({
  icnClass,
  hideLbl,
}) => {
  return (
    <div className="flex items-center">
      {!hideLbl && (
        <span className="xl:text-2xl lg:text-lg xs:text-xl font-medium">
          Contact Me :
        </span>
      )}
      &nbsp;
      <a href={`tel:${PROFILE_DETAIL.MobileNo}`} className="contact-icn">
        <IoMdCall className={icnClass} />
      </a>
      &nbsp;
      <a
        href={`mailto:${PROFILE_DETAIL.Email1};${PROFILE_DETAIL.Email2}`}
        className="contact-icn"
      >
        <MdOutlineMailOutline className={icnClass} />
      </a>
      &nbsp;
      <a href={PROFILE_DETAIL.LinkedIn} target="_blank" className="contact-icn">
        <FaLinkedinIn className={icnClass} />
      </a>
      &nbsp;
      <a
        href={`//api.whatsapp.com/send?phone=${PROFILE_DETAIL.WhatsAppNo}`}
        target="_blank"
        className="contact-icn"
      >
        <FaWhatsapp className={icnClass} />
      </a>
      &nbsp;
    </div>
  );
};

export default SocialHandlers;
