import { useState } from "react";
import { useEffect } from "react";
import { scroller } from "react-scroll";

import logo from "../assets/img/logo.svg";
import backgroundimage from "../assets/img/bg-hero.jpg";
import blogAutor from "../assets/img/blog-author.jpg";
import closeIcon from "../assets/img/icon-close.svg";

import "./main.css";
import "./main.min.css";
import "font-awesome/css/font-awesome.min.css";
import About from "./About";

export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768
        ? setMobileMenuOpen(true)
        : setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const triggerNavItem = (id) => {
    scroller.scrollTo(id, { smooth: true });
  };

  const triggerMobileNavItem = (id) => {
    setMobileMenuOpen(false);
    triggerNavItem(id);
  };

  let bodyClasses = "relative";
  if (mobileMenuOpen) {
    bodyClasses += " overflow-hidden max-h-screen";
  }

  return (
    <div className={bodyClasses}>
      <div id="main" className="relative">
        <div>
          <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
            <div className="container flex items-center justify-between">
              <div>
                <a href="/">
                  <img src={logo} className="w-24 lg:w-48" alt="logo image" />
                </a>
              </div>

              <div className="hidden lg:block">
                <ul className="flex items-center">
                  <li className="group pl-6">
                    <span
                      //   @click="triggerNavItem('#about')"
                      onClick={() => triggerNavItem("about")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      About
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#services')"
                      onClick={() => triggerNavItem("services")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Services
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#portfolio')"
                      onClick={() => triggerNavItem("portfolio")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Portfolio
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#clients')"
                      onClick={() => triggerNavItem("#clients")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Clients
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#work')"
                      onClick={() => triggerNavItem("#work")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Work
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#statistics')"
                      onClick={() => triggerNavItem("#statistics")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Statistics
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#blog')"
                      onClick={() => triggerNavItem("#blog")}
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Blog
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#contact')"
                      onClick={() => triggerNavItem("#contact")}
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
                  //   @click="mobileMenu = true"
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
            // className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
            className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 lg:hidden ${
              mobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            // :className="{ 'opacity-100 pointer-events-auto': mobileMenu }"
          >
            <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                //   @click="mobileMenu = false"
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <img src={closeIcon} className="h-10 w-auto" alt />
              </button>

              <ul className="mt-8 flex flex-col">
                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#about')"
                    onClick={() => triggerMobileNavItem("#about")}
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#services')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#portfolio')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#clients')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Clients
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#work')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#statistics')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Statistics
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#blog')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </span>
                </li>

                <li className="py-2">
                  <span
                    //   @click="triggerMobileNavItem('#contact')"
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
              //   style="background-image: url(/assets/img/bg-hero.jpg)"
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
                      Hello I'm Christy Smith!
                    </h1>
                    <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                      <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                        <p className="font-body text-lg uppercase text-white">
                          Let's connect
                        </p>
                        <div className="hidden sm:block">
                          <i className="fa fa-chevron-right text-3xl text-yellow"></i>
                          {/* <i class="fa fa-chevron-right" aria-hidden="false"></i> */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
