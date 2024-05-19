import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import EditComp from "../Common/EditComp";

const SocialHandlers: React.FC<{ icnClass: string; hideLbl?: boolean }> = ({
  icnClass,
  hideLbl,
}) => {
  const values = GetUserContextValue();
  return (
    <div className="flex items-center">
      {!hideLbl && (
        <span className="xl:text-2xl lg:text-lg xs:text-xl font-medium -mt-1.5">
          Contact Me :
        </span>
      )}
      &nbsp;
      <EditComp name="MobileNo">
        <a href={`tel:${values.MobileNo}`} className="contact-icn">
          <IoMdCall className={icnClass} />
        </a>
      </EditComp>
      &nbsp;
      <EditComp name="Email1">
        <a
          href={`mailto:${values.Email1};${values.Email2}`}
          className="contact-icn"
        >
          <MdOutlineMailOutline className={icnClass} />
        </a>
      </EditComp>
      &nbsp;
      <EditComp name="LinkedIn">
        <a href={values.LinkedIn} target="_blank" className="contact-icn">
          <FaLinkedinIn className={icnClass} />
        </a>
      </EditComp>
      &nbsp;
      <EditComp name="WhatsAppNo">
        <a
          href={`//api.whatsapp.com/send?phone=${values.WhatsAppNo}`}
          target="_blank"
          className="contact-icn"
        >
          <FaWhatsapp className={icnClass} />
        </a>
      </EditComp>
      &nbsp;
    </div>
  );
};

export default SocialHandlers;
