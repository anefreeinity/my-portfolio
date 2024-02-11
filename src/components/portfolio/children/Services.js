import iconDevWhite from "../../../assets/img/icon-development-white.svg";
import iconDevBlack from "../../../assets/img/icon-development-black.svg";

import iconCntWhite from "../../../assets/img/icon-content-white.svg";
import iconCntBlack from "../../../assets/img/icon-content-black.svg";

import iconMobWhite from "../../../assets/img/icon-mobile-white.svg";
import iconMobBlack from "../../../assets/img/icon-mobile-black.svg";

import iconEmlWhite from "../../../assets/img/icon-email-white.svg";
import iconEmlBlack from "../../../assets/img/icon-email-black.svg";

import iconDsnWhite from "../../../assets/img/icon-design-white.svg";
import iconDsnBlack from "../../../assets/img/icon-design-black.svg";

import iconGraWhite from "../../../assets/img/icon-graphics-white.svg";
import iconGraBlack from "../../../assets/img/icon-graphics-black.svg";

export default function Service() {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconDevWhite} alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconDevBlack} alt="development icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Mostly I use Angular and React.js for web development.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconMobWhite} alt="content marketing icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconMobBlack} alt="content marketing icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              API DEVELOPMENT
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I use DotNet Core and Node.js with Express.js for API development.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconGraWhite} alt="Mobile Application icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconGraBlack} alt="Mobile Application icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              3D Graphics Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Currently I'm using ThreeJS for 3D graphics development.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconCntWhite} alt="Graphic Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconCntBlack} alt="Graphic Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Embedded Programming
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I've experience with Arduino and Raspberry Pi.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconDsnWhite} alt="Theme Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconDsnBlack} alt="Theme Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Drone Designing
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I've designed and created my own drone.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={iconEmlWhite} alt="Email Marketing icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={iconEmlBlack} alt="Email Marketing icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Problem Solving
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I'm a problem solver and I'm always looking for new ways to solve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
