//import start
import { AiOutlineGithub } from "react-icons/ai";
import { BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
//import end

//prof detail start
export const PROFILE_DETAIL: any = {
  FullName: "Pitroda Rajkumar Kamleshbhai",
  Name: "Raj Pitroda",
  Role: "Senior Software Engineer",
  MobileNo: "+918155028499",
  MobileNoForView: "+91 81550 28499",
  Email1: "pitrodarj@gmail.com",
  AllEmail: "pitrodarj@gmail.com; pitrodaraj1512@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/pitroda-rajkumar-09a861271/",
  WhatsAppNo: "918155028499",
  Experience: "4+ years",
  ResumeLink:
    "https://drive.google.com/file/d/1js3vjJPEAlfkDNASvi2eGiqVf1_FWgQR/view?usp=sharing",
  ShortBio:
    "Experienced frontend developer proficient in HTML, CSS, SCSS and JavaScript, with expertise in React and Next. Dedicated to crafting intuitive user interfaces, optimizing performance, and embracing modern web technologies. Passionate about  impactful digital experiences. Let's collaborate on creating exceptional web applications.",
  UpdatedAt: "May-2024",
  Skills: [
    {
      name: "React JS",
      experience: "4+ Years",
      icon: FaReact,
      icnColor: "#50BBD7",
    },
    {
      name: "Redux",
      experience: "3+ Years",
      icon: SiRedux,
      icnColor: "#7248B6",
    },
    {
      name: "Typescript",
      experience: "3+ Years",
      icon: SiTypescript,
      icnColor: "#1573C0",
    },
    {
      name: "Javascript",
      experience: "4+ Years",
      icon: SiJavascript,
      icnColor: "#EFD81D",
    },

    {
      name: "SCSS",
      experience: "1.2+ Years",
      icon: BsFiletypeScss,
      icnColor: "#C86394",
    },
    {
      name: "CSS",
      experience: "3+ Years",
      icon: BsFiletypeCss,
      icnColor: "#2649E4",
    },
    {
      name: "Next JS",
      experience: "1.5+ Years",
      icon: TbBrandNextjs,
      icnColor: "#04417B",
    },
    {
      name: "Github",
      experience: "3+ Years",
      icon: AiOutlineGithub,
      icnColor: "#ff5a1e",
    },
  ],
  Projects: [
    {
      id: 1,
      name: "SM-FRONT (E-COMMERCE MEDICINE PURCHASE)",
      desc: `Developed an e-commerce platform using Next.js with Tyescript
and Redux with multilanguage support for purchasing medicines.
Created and integrated various modules/features including:
• User authentication functionalities: Login, Register, Forgot
Password, Reset Password. Public information pages: Contact Us,
Terms and Conditions, About Us. Home page showcasing latest,
trending, and most purchased medicines with images.
Implemented a feature allowing users to upload doctor
prescriptions for specific medicine orders. Cart management
functionalities: Add to cart, Remove from cart. Paginated and
filterable medicine listing page for user convenience. Multiple
address support for flexible order placement. Implemented multilanguage support for a diverse user base. Integrated Razorpay for
secure payment processing. Implemented an image gallery for
medicines and order tracking functionality.`,
    },
    {
      id: 2,
      name: "SM-ADMIN (E-COMMERCE ADMIN)",
      desc: `Developed an e-commerce admin panel using React.js with
  Tyescript and Redux with multilanguage support.
  Created and integrated various modules/features including:
  • User authentication functionalities: Login, Register, Forgot
  Password, Reset Password. Crud for Product Management, Order
  Verification and Tracking, User and Role Management, Inventory
  Management, Medicine list etc`,
    },
    {
      id: 3,
      name: `. INSMART PAT IENT`,
      desc: `Developed website panel using Next.js with Tyescript and Redux
  to facilitating direct interaction and appointment bookings with
  registered hospitals and doctors for various ailments.
  Created and integrated various modules/features including:
  • User authentication functionalities: Login, Register, Forgot
  Password, Reset Password. Public information pages: Contact Us,
  Terms and Conditions, About Us. Dashboard and Doctor Listing.
  Appointment Booking and Management. Promotions and
  Discount. Address Management and User Tracking. Appointment
  Listing and based on Doctor availability slot listing.`,
    },
    {
      id: 4,
      name: `INSMART ADMIN`,
      desc: `Developed a dynamic form builder website using React.js with
  Tyescript and Redux and for backend used .Net web api, MSSQL.
  Created and integrated various modules/features including:
  • User authentication functionalities: Login, Register, Forgot
  Password, Reset Password. Dynamic Form Creation,
  Administration and Configuration, Lookups Management, Vector
  management, Dynamic Form control like Textfield, Dropdown,
  Map Control, HTML editor, Sketchpad Control with dynamic
  validation. Role based form access`,
    },
    {
      id: 5,
      name: `TWITTER CAMPAIGN MANAGMENT`,
      desc: `Developed a website using website using React.js with Tyescript
  and Redux. The system facilitated automated interaction with
  campaign audiences
  Created and integrated various modules/features including:
  • User authentication functionalities: Login, Register, Forgot
  Password, Reset Password Campaign Management. Configured
  campaign collections with multiple entities for campaign
  organization and management. Document Management and
  Authentication`,
    },
    {
      id: 6,
      name: `ISCTV9 - CURRENCY EXCHANGE MANAGEMENT`,
      desc: `Developed a website using website using React.js with Tyescript
  and Redux. The system facilitated currency exchange.
  Created and integrated various modules/features including:
  • User authentication functionalities: Login, Register, Forgot
  Password, Reset Password, Role based authorization, configured
  settings for Affiliate, Admin Pages, Beneficiary, Currency, Country,
  and Task, enabling efficient system management. Implemented
  functionalities for users to edit profile details, manage roles, and
  upload documents, Live Currency Exchange Rates, Power BI
  Reports Integration.`,
    },
  ],
};
//prof detail end

//theme start
export const THEME_COLOR: {
  common: { [key: string]: string };
  light: { [key: string]: string };
  dark: { [key: string]: string };
} = {
  common: {
    "theme-color": "#ff5a1e",
    "content-font-size": "16px",
    "header-height": "5rem",
  },
  light: {
    "dark-color": "#322f30",
    "light-color": "#f4ecde",
    "control-light-border-color": "rgba(0, 0, 0, 0.23)",
    bg1: "#f4ecde", // light-color
    bg2: "white",
    bg3: "#322f30", //dark-color
    bg4: "#f4ecde", // light-color
  },
  dark: {
    "dark-color": "white",
    "light-color": "white",
    "control-light-border-color": "rgba(255, 255, 255, 0.23)",
    bg1: "#050201",
    bg2: "#151514",
    bg3: "#050201", //bg1
    bg4: "#151514", // bg2
  },
};
//theme end
