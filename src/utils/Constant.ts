//import start
import { AiOutlineGithub } from "react-icons/ai";
import { SiNestjs, SiNodedotjs } from "react-icons/si";
import { BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import moment from "moment";
import { BiLogoPostgresql } from "react-icons/bi";

//import end

const currentDate = moment();
const currentYear = currentDate.format("yyyy");

const startDate = moment("01/10/2020", "dd/mm/yyyy");
const startYear = startDate.format("yyyy");

const totalExp = +currentYear - +startYear;

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
  Experience: `${totalExp}+ years`,
  ResumeLink:
    "https://drive.google.com/file/d/1MtPbB52zi95DO_Ow_7hRIFJ9y6RJuA7W",
  ShortBio:
    "Experienced frontend developer proficient in HTML, CSS, SCSS and JavaScript, with expertise in React JS and Next JS. Dedicated to crafting intuitive user interfaces, optimizing performance, and embracing modern web technologies. Passionate about  impactful digital experiences. Let's collaborate on creating exceptional web applications.",
  UpdatedAt: `${currentDate.format("MMMM")} - ${currentDate.format("yyyy")}`,
  Skills: [
    {
      name: "React JS",
      experience: `${totalExp}+ Years`,
      icon: FaReact,
      icnColor: "#50BBD7",
    },
    {
      name: "Redux",
      experience: `${totalExp - 2}+ Years`,
      icon: SiRedux,
      icnColor: "#7248B6",
    },
    {
      name: "Typescript",
      experience: `${totalExp - 1}+ Years`,
      icon: SiTypescript,
      icnColor: "#1573C0",
    },
    {
      name: "Javascript",
      experience: `${totalExp - 1}+ Years`,
      icon: SiJavascript,
      icnColor: "#EFD81D",
    },

    {
      name: "SCSS",
      experience: `${totalExp - 3.5}+ Years`,
      icon: BsFiletypeScss,
      icnColor: "#C86394",
    },
    {
      name: "CSS",
      experience: `${totalExp - 2}+ Years`,
      icon: BsFiletypeCss,
      icnColor: "#2649E4",
    },
    {
      name: "Next JS",
      experience: `${totalExp - 3}+ Years`,
      icon: TbBrandNextjs,
      icnColor: "#04417B",
    },
    {
      name: "Node JS",
      experience: `1+ Years`,
      icon: SiNodedotjs,
      icnColor: "#417E38",
    },
    {
      name: "Nest JS",
      experience: `1+ Years`,
      icon: SiNestjs,
      icnColor: "#EA2863",
    },
    {
      name: "Postgresql",
      experience: `0.5+ Years`,
      icon: BiLogoPostgresql,
      icnColor: "#336791",
    },

    {
      name: "Github",
      experience: `${totalExp - 1}+ Years`,
      icon: AiOutlineGithub,
      icnColor: "#ff5a1e",
    },
  ],
  Projects: [
    {
      id: 1,
      name: "Health-Ease",
      html: `<p>
                Developed a comprehensive e-commerce and telemedicine platform allowing users to purchase medicines,
                book doctor appointments (video, clinic, and home visits), and order lab tests, built with seamless
                <strong>Zoom SDK</strong> integration. The platform incorporates several modules and features:
              </p>
              <ul>
                <li>User authentication and role-based access.</li>
                <li>Doctor appointment booking with time-slot selection for video calls (via <strong>Zoom SDK</strong>), clinic visits, and home visits.</li>
                <li>Online purchase of medicines and health-related products.</li>
                <li>Integrated lab test ordering and report access.</li>
                <li>Cart management for streamlined purchases.</li>
                <li>Secure payment processing for all transactions.</li>
                <li>Intuitive user interface for easy navigation and booking.</li>
                <li><strong>Multi-language</strong> support for a diverse user base.</li>
                <li>Real-time notifications for appointments and order status updates.</li>
                <li>Comprehensive admin dashboard for managing appointments, inventory, and user activity.</li>
              </ul>
              <p>
                Technology used: <strong>Next JS, Typescript, Redux</strong>
              </p>`,
    },
    {
      id: 2,
      name: "Currency Exchange",
      html: `<p>
              Developed a comprehensive currency exchange platform with real-time updates, user, currency, Beneficiary management, and Power BI integration.
              The platform facilitated secure and real-time currency exchange, supported by an efficient management system with the following features:
             </p>
            <ul>
              <li>User authentication: login, registration, forgot password, reset password.</li>
              <li>Role-based authorization to manage secure access for admins, affiliates, and users.</li>
              <li>Configurable modules: affiliate settings, admin pages, beneficiary setup, currency and country management, and task assignments.</li>
              <li>User profile management: edit details, manage roles, and upload KYC/verification documents.</li>
              <li>Live exchange currency rates and updates using <strong>WebSocket</strong>.</li>
              <li><strong>Power BI</strong> reports integration for advanced analytics and insights.</li>
              <li>Comprehensive admin dashboard for system monitoring and control.</li>
              <li>Responsive design for seamless access across devices.</li>
              <li>Enhanced data security and encryption for sensitive financial transactions.</li>
            </ul>
            <p>
              Technology used: <strong>React JS, Typescript, Recoil</strong>
            </p>`,
    },
    {
      id: 3,
      name: `Dynamic Form Building`,
      html: `<p>
              Developed a dynamic form builder website. A dynamic form builder website enabling users to create, configure, and manage custom forms with various controls and dynamic validation.
            </p>
            <p>The platform incorporates several modules and features:</p>
            <ul>
              <li>Dynamic form creation and configuration.</li>
              <li>Administration and configuration modules.</li>
              <li>Lookup management.</li>
              <li>Vector management.</li>
              <li>Dynamic form controls including text fields, dropdowns, map controls, HTML editor, and sketchpad controls, with dynamic validation.</li>
              <li>Role-based access to forms.</li>
              <li><strong>Google Map</strong> Integration.</li>
              <li>Workflow management.</li>
            </ul>
            <p>
              Technology used: <strong>React JS, Typescript, Redux, Nest JS</strong>
            </p>`,
    },
    {
      id: 4,
      name: `SM-FRONT (E-COMMERCE MEDICINE PURCHASE)`,
      html: `<p>
              Developed an e-commerce platform with <strong>multi-language</strong> support for purchasing medicines and some <strong>SSR Page</strong> implementation for <strong>SEO</strong>.
              The platform includes several integrated modules and features:
            </p>
            <ul>
              <li>User authentication: login, registration, forgot password, and password reset functionalities.</li>
              <li>Public information pages: Contact Us, Terms and Conditions, and About Us.</li>
              <li>A home page displaying the latest, trending, and most purchased medicines.</li>
              <li>A prescription upload feature enabling users to attach doctor prescriptions for specific medicine orders.</li>
              <li>Comprehensive cart management: add to cart, remove from cart.</li>
              <li>A paginated and filterable medicine listing page to enhance user convenience.</li>
              <li>Support for multiple delivery addresses, offering flexible order placement.</li>
              <li><strong>Multi-language</strong> support to cater to a diverse user base.</li>
              <li>Razorpay integration for secure payment processing.</li>
              <li>An image gallery for medicines and an order tracking feature for customers.</li>
            </ul>
            <p>
              Technology used: <strong>Next JS, Typescript, Redux</strong>
            </p>`,
    },
    {
      id: 5,
      name: `SM-ADMIN (E-COMMERCE ADMIN)`,
      html: `<p>
              Developed an e-commerce admin panel for managing products, orders, users, and inventory, with authentication and role-based access.
              This platform includes several integrated modules and features:
            </p>
            <ul>
              <li>User authentication: login, registration, forgot password, and password reset functionalities.</li>
              <li>Product configuration.</li>
              <li>Order verification and tracking.</li>
              <li>User and role management.</li>
              <li>Inventory management.</li>
              <li>Medicine list management and other essential modules.</li>
            </ul>
            <p>
              Technology used: <strong>React JS, Typescript, Redux</strong>
            </p>`,
    },
    {
      id: 6,
      name: `Loanfity`,
      html: `<p>
              Developed a loan simulator and application platform with Nafath integration, enabling users to simulate loan options and securely apply for loans.
              The platform includes several robust modules and features:
            </p>
            <ul>
              <li>User authentication via <strong>Nafath</strong> for secure, national-level identity verification.</li>
              <li>Dynamic loan simulator for calculating monthly installments, interest rates, and payment schedules.</li>
              <li>Loan application form with document upload and real-time status tracking.</li>
              <li>Personalized dashboard displaying loan simulation results and application history.</li>
              <li>Integration with external APIs to ensure up-to-date financial data and loan responses.</li>
              <li>Responsive and user-friendly design for seamless access across devices.</li>
              <li>Real-time notifications for application updates and loan-related alerts.</li>
              <li><strong>Firebase push notification.</strong></li>
              <li>Robust data security and encryption to safeguard sensitive financial information.</li>
            </ul>
            <p>
              Technology used: <strong>React JS, Typescript</strong>
            </p>`,
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
