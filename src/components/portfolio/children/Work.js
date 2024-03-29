import companyLogo from "../../../assets/img/logo-spotify.svg";
import { PORTFOLIO_DATA } from "../../../data/Data";

export default function Work() {
  const workExperiences = PORTFOLIO_DATA.workExperiences.map((company, key) => (
    <div
      key={key}
      className="mt-8 flex flex-col text-center md:flex-row md:text-left"
    >
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img
              src={company.logo}
              className="h-auto w-32"
              alt="company logo"
            />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-grey-40">
                {company.timeline}
              </span>
              <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                {company.title}
              </span>
              <div className="pt-2">
                <span
                  className="block font-body text-black"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {company.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I did before and currently doing
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
        {workExperiences}
      </div>
    </div>
  );
}
