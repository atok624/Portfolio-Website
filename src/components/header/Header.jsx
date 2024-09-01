import React, { useRef, useState } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Header.module.css";

const Header = () => {
  const [display, setDisplay] = useState(true);
  const navRef = useRef(null);
  const [textColor, setTextColor] = useState("");

  const displayMenu = () => {
    display === false ? setDisplay(true) : setDisplay(false);
  };

  const checkDisplay = () => {
    display === false ? setDisplay(true) : "";
  };

  const downloadPdf = () => {
    const url = "/assets/Nicholas_Amissah_CV.pdf";
    fetch(url).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.href = fileURL;
        alink.download = "Nicholas-Amissah-Resume.pdf";
        alink.click();
      });
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 50) {
      navRef.current?.classList.add("bg-white");
      setTextColor("text-[#11001d]");
    } else {
      navRef.current?.classList.remove("bg-white");
      setTextColor("");
    }
  };

  return (
    <header id="header" className="md:mx-0">
      <div className="w-full h-full relative">
        <div
          ref={navRef}
          className="md:pb-[1rem] nav-content md:flex justify-between items-center fixed z-10 top-0 w-full"
        >
          <nav className=" px-3 md:px-14 lg:px-36 text-white flex justify-between items-center transition-all duration-300 ease-in-out">
            <a
              className={`${textColor} text-2xl md:text-3xl lg:text-xl font-bolder border border-green-500 rounded-full p-2`}
              href="#header"
            >
              NA
            </a>
            <button
              type="button"
              className={
                display
                  ? "hamburger hamburger--spin z-10 md:hidden"
                  : "hamburger hamburger--spin z-10 is-active"
              }
              onClick={displayMenu}
            >
              <span className="hamburger-box">
                <span
                  className={`hamburger-inner ${
                    textColor === ""
                      ? ""
                      : "bg-[#11001d] before:bg-[#141414] after:bg-[#11001d]"
                  }`}
                ></span>
              </span>
            </button>
          </nav>
          <ul
            className={
              display
                ? `hidden md:flex gap-10 items-center pt-4 pr-[8rem] ${
                    textColor === "" ? "text-white" : textColor
                  }`
                : "flex w-full box-border h-screen flex-col items-center justify-start text-2xl gap-10 bg-slate-900 animate__animated animate__fadeIn animate__faster"
            }
          >
            <li className="nav-item uppercase z-0">
              <a href="#about" onClick={checkDisplay}>
                About
              </a>
            </li>
            <li className="nav-item uppercase">
              <a href="#projects" onClick={checkDisplay}>
                Works
              </a>
            </li>
            <li className="nav-item uppercase">
              <a href="#contact" onClick={checkDisplay}>
                Contact
              </a>
            </li>
            <li className="nav-item uppercase">
              <a
                href="https://drive.google.com/file/d/1zNOMUe_ljw8FhsuWcDpxzE_VAjw22o63/view?usp=sharing"
                type="button"
                target="_blank"
                className="inline-block bg-green-600 text-white p-3 rounded animate__animated animate__pulse animate__infinite animate__fast md:w-[10rem] text-center"
                id="downloadBtn"
              >
                Get My Resume
              </a>
            </li>
          </ul>
        </div>

        <section id="about" className=" px-4 py-14 md:p-14 lg:px-36 md:my-8">
          <div className="md:flex gap-8 items-center">
            <div className="profile-img hidden md:block rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/84607674?s=400&u=daf97e973523ed1dce44185f1eb7bb29a7ead595&v=4"
                alt="Profile Image"
                style={{ width: 750 }}
              />
            </div>
            <div className="about-content">
              <p className="mt-10 md:mt-8 text-lg lg:text-3xl text-slate-300">
                Full-Stack Developer
              </p>
              <p className="stack text-green-500 my-1 lg:text-xl">
                <span>Javascript </span>|<span> React & Redux </span>|
                <span> Ruby </span>|<span> Ruby on Rails </span>|
                <span> HTML/CSS </span>
              </p>
              <p className="lg:text-lg mb-4">
                My name is Nicholas Kwamena Amissah and I'm a software
                developer! I can help you build a product, feature or website.
                Look through some of my work and experience! If you like what
                you see and have a project you need coded, don’t hesitate to
                contact me.
              </p>
              <p className="text-lg md:text-xl mb-4">
                I'm dedicated to crafting clean, efficient, and maintainable
                code. My experience and skills allow me to build and deliver
                high-quality projects that meet clients' needs and exceed their
                expectations.
              </p>
              <p className="text-lg md:text-xl mb-8">
                Whether it's building a product from scratch, enhancing existing
                features, or collaborating with a team, I'm always excited to
                take on new challenges and contribute my skills to create
                exceptional digital experiences.
              </p>

              <div className="connect">
                <p className="text-xl md:text-lg uppercase mt-2 text-green-500 tracking-widest font-light">
                  Let's Connect
                </p>
                <div className="socials flex gap-4 mt-2">
                  <a
                    href="https://github.com/atok624"
                    target="_blank"
                    className="text-2xl"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicholas-amissah/"
                    className="text-2xl"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://x.com/NicholasAmisah"
                    className="text-2xl"
                    target="_blank"
                  >
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
