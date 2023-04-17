import React, { Fragment, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles";
import Link from "next/link";
import AnimatedLogo from "../AnimatedLogo";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  heroTexts: string[];
  role: string;
  resume: string;
};

function Hero({ heroTexts, role, resume }: Props) {
  const [text, count] = useTypewriter({
    words: heroTexts,
    loop: true,
    delaySpeed: 2000,
  });
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function downloadResume() {
    const response = await fetch(resume);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "JCMN_Resume.pdf";
    a.click();
  }

  return (
    <>
      {/* Create modal that contains the resume inside an iframe make it responsive and animated */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-dracula-darker rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-dracula-light-50"
                >
                  Resume
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Here is my resume, you can download it by clicking the
                    download button.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-[500px]">
                      <iframe
                        src={resume}
                        className="w-full h-full"
                        title="Resume"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    // href={resume}
                    // download="resume.pdf"
                    onClick={downloadResume}
                  >
                    Download
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
        <BackgroundCircles />
        <AnimatedLogo />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 placeholder:pb-2 tracking-[15px] mx-5">
            {role}
          </h2>
          <h1 className="px-10 text-4xl font-semibold lg:text-6xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#ff79c6" />
          </h1>
          {/* Make the buttons don't overlap in small screen sizes */}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-5">
            <Link href="#about" scroll={false}>
              <button className="heroButton">About</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>

            <button className="heroButton" onClick={openModal}>
              Resume
            </button>
            {/* <button className="heroButton" onClick={openModal}>
              Experience
            </button> */}

            {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          
         */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
