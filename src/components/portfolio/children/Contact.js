import { useRef } from "react";
import { PORTFOLIO_DATA } from "../../../data/Data";

export default function Contact() {
  const name = useRef();
  const subject = useRef();
  const message = useRef();

  const mailTo = `mailto:${PORTFOLIO_DATA.profile.mail}`;

  const handelSubmit = (e) => {
    const userData = {
      name: name.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };

    console.log(userData);

    const mail = `mailto:${PORTFOLIO_DATA.profile.mail}?subject=${
      userData.subject === undefined || null || ""
        ? "subject"
        : userData.subject
    }&body=${
      userData.message === undefined || null || ""
        ? "message"
        : userData.message
    }`;
    window.location.href = mail;
    e.preventDefault();
  };

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's a contact form
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          Please provide your name and email address, along with your message.
        </p>
      </div>
      <form
        className="mx-auto w-full pt-10 sm:w-3/4"
        onSubmit={(e) => handelSubmit(e)}
      >
        <div className="flex flex-col md:flex-row">
          <input
            ref={name}
            className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            id="name"
          />
          <input
            ref={subject}
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Subject"
            type="text"
            id="email"
          />
        </div>
        <textarea
          ref={message}
          className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            ({PORTFOLIO_DATA.profile.phone_i}) {PORTFOLIO_DATA.profile.phone}
          </p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Email
            </p>
          </div>
          <a href={mailTo}>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              {PORTFOLIO_DATA.profile.mail}
            </p>
          </a>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
              My Address
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            {PORTFOLIO_DATA.profile.address}
          </p>
        </div>
      </div>
    </div>
  );
}
