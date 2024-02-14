import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ProjectDetail({
  open,
  setOpen,
  description = "Not provided\n",
  hostLink = "Not Available",
  repoLink = "Not Available",
  name = "Not provided",
}) {
  const cancelButtonRef = useRef(null);

  const handelClick = (e, link) => {
    e.preventDefault();
    if (link !== "Not Available") {
      window.open(link, "_blank");
    }
  };

  description = description === null ? "Not provided\n" : description;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl p-2">
                <div className="flex flex-col items-end justify-center">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-inset focus:bg-red-200 float-right"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="pl-4 pr-4 pb-4">
                  <Dialog.Title
                    as="h3"
                    className="font-semibold leading-6 text-violet-700 pb-4 text-xl"
                  >
                    {name}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-500"
                  >
                    Description
                  </Dialog.Title>
                  <div
                    className="mt-2 p-2 bg-slate-100"
                    style={{
                      height: "auto",
                      maxHeight: "50vh",
                      overflowY: "auto",
                      borderRadius: "5px",
                    }}
                  >
                    <ol>
                      {description &&
                        description.split("\n").map((item, index) => (
                          <li key={index}>
                            <p
                              style={{
                                textAlign: "justify",
                                textJustify: "inter-word",
                              }}
                            >
                              {item === "%" ? <span>&nbsp;</span> : item}
                            </p>
                          </li>
                        ))}
                    </ol>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-sm font-semibold leading-6 text-gray-500 pt-4"
                  >
                    Host Link:{" "}
                    <a
                      className={
                        hostLink === null
                          ? "cursor-text text-blue-400"
                          : "cursor-pointer text-blue-400"
                      }
                      onClick={(e) => {
                        handelClick(e, hostLink);
                      }}
                    >
                      {hostLink === null ? "Not Available" : hostLink}
                    </a>
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-sm font-semibold leading-6 text-gray-500 pt-2"
                  >
                    Github Link:{" "}
                    <a
                      className={
                        repoLink === null
                          ? "cursor-text text-blue-400"
                          : "cursor-pointer text-blue-400"
                      }
                      onClick={(e) => {
                        handelClick(e, repoLink);
                      }}
                    >
                      {repoLink === null ? "Not Available" : repoLink}
                    </a>
                  </Dialog.Title>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
