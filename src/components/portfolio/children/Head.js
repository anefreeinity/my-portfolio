import logo from "../../../assets/img/logo.svg";
import anyfreeinity from "../../../assets/mydata/anefreeinity_logo.svg";
import backgroundimage from "../../../assets/img/bg-hero.jpg";
// import blogAutor from "../../../assets/img/blog-author.jpg";
import blogAutor from "../../../assets/mydata/profile_photo.jpg";
import closeIcon from "../../../assets/img/icon-close.svg";

import About from "./About";
import Service from "./Services";
import Project from "./Projects";
import Client from "./Clients";
import Work from "./Work";
import Statistics from "./Statistics";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

import { PORTFOLIO_DATA } from "../../../data/Data";

export default function Head({
  triggerNavItem,
  setMobileMenuOpen,
  mobileMenuOpen,
  triggerMobileNavItem,
}) {
  return (
    <div>
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 350 50"
              >
                <text
                  x="10"
                  y="40"
                  fill="white"
                  fontFamily="Trebuchet MS, sans-serif"
                  className="font-header text-4xl font-semibold text-primary sm:text-5xl lg:text-5xl"
                >
                  ANEFreeInIty
                </text>
              </svg>
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("about")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("services")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("portfolio")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("clients")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("work")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("statistics")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("blog")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("contact")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <i
                className="fa fa-bars text-white"
                style={{ fontSize: "28px" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            <img src={closeIcon} className="h-10 w-auto" alt />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("about")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("services")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("portfolio")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("clients")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Clients
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("work")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("statistics")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("blog")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Blog
              </span>
            </li>

            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("contact")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{
            backgroundImage: `url(${backgroundimage})`,
          }}
        >
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl">
                <img
                  src={blogAutor}
                  className="h-48 rounded-full sm:h-56"
                  alt="author"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello I'm Ayan Bhattacharya!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">
                      Let's connect
                    </p>
                    <div className="hidden sm:block">
                      <i className="fa fa-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <a href="/">
                      <i className="fa fa-facebook-official fa-lg text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="fa fa-twitter fa-lg text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="fa fa-github fa-lg text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="fa fa-linkedin fa-lg text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="fa fa-instagram fa-lg text-white hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <About />
        <Service />
        <Project />
        <Client />
        <Work />
        <Statistics />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
