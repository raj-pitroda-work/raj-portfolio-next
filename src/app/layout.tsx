import "./css-scss/index.scss";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import EditContextWrapper from "@/Components/Common/EditContextWrapper";
import { ToastContainer } from "react-toastify";
import ogImg from "../../public/opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raj Pitroda - Portfolio",
  description:
    "Expert in React JS and Next JS with 5 years of experience crafting dynamic, high-performance web applications, complemented by working knowledge of Node JS Nest JS for backend support.",
  openGraph: {
    images: [{ url: ogImg.src }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EditContextWrapper>
          <>
            <Header />
            <div className="page-main-content">{children}</div>
            <Footer />
          </>
        </EditContextWrapper>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="colored"
        />
      </body>
    </html>
  );
}
