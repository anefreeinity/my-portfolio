import { PORTFOLIO_DATA } from "../../../data/Data";
import Social from "../../utils/Social";

export default function About() {
  const tabItems = PORTFOLIO_DATA.about.skills.map((skill, key) => (
    <div key={key} className={key === 0 ? "" : "pt-6"}>
      <div className="flex items-end justify-between">
        <h4 className="font-body font-semibold uppercase text-black">
          {skill.name}
        </h4>
        <h3 className="font-body text-3xl font-bold text-primary">
          {skill.percentage}
        </h3>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-lila">
        <div
          className="h-3 rounded-full bg-primary"
          style={{ width: skill.percentage }}
        ></div>
      </div>
    </div>
  ));

  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            {PORTFOLIO_DATA.about.header}
          </h4>
          <p
            className="pt-6 font-body leading-relaxed text-grey-20"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            {PORTFOLIO_DATA.about.discription}
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Social color_class={"text-primary"} />
              {/* <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          {tabItems}
          {/* <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML & CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Python
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Javascript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Figma
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "91%" }}
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
