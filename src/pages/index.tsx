import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "gatsby";
import "../components/styles/styles.scss";
import Navbar from "../components/Navbar";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "../components/Image";
import Portfolio_projects from "../components/Portfolio_projects";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pageTransition = {
  duration: 1,
  ease: "anticipate",
};

function useMousePosition() {
  let [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  return mousePosition;
}

const IndexPage = () => {
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  // const { x, y } = useMousePosition();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);
  const scaleOutOnScroll = useTransform(scrollYProgress, [0, 0.1], [1, 0.6]);
  const FadeOutOnScroll = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);

  //! animation apparition on scroll
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const text = useRef(null);

  const intersection = useIntersection(image, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersection2 = useIntersection(image2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersection3 = useIntersection(image3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const intersection4 = useIntersection(image4, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const TextIntersection = useIntersection(text, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });

  const fadeIn = (element) => {
    gsap.to(element, 0.8, {
      opacity: 1,
      x: 0,
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 0.8, {
      opacity: 1,
      x: -60,
      ease: "power4.out",
    });
  };
  const fadeIn2 = (element) => {
    gsap.to(element, 0.8, {
      opacity: 1,
      x: 0,
    });
  };
  const fadeOut2 = (element) => {
    gsap.to(element, 0.8, {
      opacity: 1,
      x: 60,
      ease: "power4.out",
    });
  };

  const textfadeIn = (element) => {
    gsap.to(element, 0.8, {});
  };
  const textfadeOut = (element) => {
    gsap.to(element, 0.8, {});
  };

  TextIntersection && TextIntersection.intersectionRatio < 0.6
    ? textfadeOut(".TextFadeIn")
    : textfadeIn(".TextFadeIn");

  return (
    <main>
      <title>Home Page</title>
      <Navbar />
      <>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="home"
        >
          <div className="intro_anim">
            <svg
              width="302"
              height="157"
              viewBox="0 0 302 157"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.89062 96.082H3.95345L4.01432 96.0665L8.56583 94.9044C16.0998 94.2089 26.2225 93.5437 38.9364 92.909C29.0604 107.163 21.4375 118.421 16.069 126.682C13.3328 130.892 11.18 134.327 9.61231 136.984C8.05168 139.63 7.05131 141.538 6.64257 142.679L6.64245 142.679L6.63894 142.69C6.04839 144.461 5.73438 145.89 5.73438 146.949C5.73438 148.126 6.50759 149.01 7.75908 149.638C9.00389 150.327 10.8224 150.857 13.1765 151.25C15.5273 151.707 17.3853 151.941 18.7344 151.941C20.1297 151.941 21.3224 151.556 22.2731 150.755C23.2514 149.984 24.103 148.883 24.8393 147.478C25.6251 146.043 37.4073 127.591 60.2211 92.0739L66.293 91.9805C66.2942 91.9805 66.2954 91.9805 66.2967 91.9805C68.8192 91.9806 72.6056 92.0774 77.66 92.2716C78.9676 92.5311 80.128 92.6641 81.1367 92.6641C82.4438 92.6641 83.6159 91.6904 84.6777 90.0977L84.6778 90.0977L84.6823 90.0907C85.253 89.203 85.7198 88.5499 86.0851 88.1196C87.9357 86.4625 89.3401 85.0592 90.2868 83.9132C90.7622 83.3378 91.1316 82.8159 91.3845 82.3501C91.633 81.8923 91.793 81.4454 91.793 81.0312C91.793 79.4512 91.1816 78.1634 89.9638 77.2183C88.7717 76.2931 87.034 75.7227 84.813 75.4571C80.6941 74.9039 76.2887 74.5245 71.5974 74.3185C83.478 56.5337 95.0114 40.5729 106.197 26.4355C116.824 25.6337 125.463 23.2161 132.082 19.1527L132.086 19.15C134.908 17.378 137.128 15.6258 138.731 13.8899C139.528 13.0264 140.134 12.228 140.535 11.496C140.931 10.7736 141.146 10.0802 141.109 9.43379C141.106 8.81251 140.895 8.0905 140.527 7.28777C140.153 6.47129 139.599 5.53388 138.873 4.47845C137.291 2.17727 133.999 1.13672 129.281 1.13672C124.515 1.13672 119.82 2.22963 115.201 4.40711L115.198 4.40831C110.691 6.56407 105.874 9.7502 100.749 13.9565C85.2618 16.3481 70.8796 17.543 57.6016 17.543C44.3237 17.543 34.5162 17.1847 28.1651 16.4719C24.9852 16.1149 22.637 15.664 21.0955 15.1292C20.3226 14.861 19.787 14.5832 19.4534 14.3109C19.1249 14.0427 19.0391 13.8218 19.0391 13.6484C19.0391 12.893 19.5203 12.0109 20.7166 11.0036L20.7184 11.0021C21.9483 9.9566 23.2044 9.46094 24.4961 9.46094C25.2628 9.46094 25.9 9.38796 26.3629 9.20683C26.5983 9.11471 26.8185 8.98321 26.9824 8.79079C27.1543 8.58899 27.2422 8.34539 27.2422 8.08203C27.2422 7.59313 26.9681 7.21487 26.583 6.94583C26.2099 6.68519 25.6929 6.49422 25.0734 6.34994C23.8278 6.05988 21.999 5.92188 19.6133 5.92188C14.8428 5.92188 10.8273 7.08253 7.59995 9.43584L7.59993 9.43582L7.5959 9.43882C4.44406 11.7859 2.80469 14.5909 2.80469 17.8477C2.80469 20.633 3.58562 23.0894 5.15601 25.196C6.72193 27.2967 9.05188 29.0219 12.1094 30.3891C18.2125 33.1181 27.3064 34.4609 39.3398 34.4609C56.4093 34.4609 70.9259 33.4338 82.8837 31.375C74.8213 40.9388 64.5448 55.1804 52.0571 74.0889C40.1681 74.2245 29.1745 74.7775 19.0771 75.7484L19.0762 75.7485C15.761 76.0735 13.5144 76.369 12.3698 76.6382L12.3631 76.6399C11.1927 76.9325 9.87837 77.8205 8.4282 79.2047L8.42811 79.2046L8.41988 79.2129C7.05763 80.5751 6.15385 81.6368 5.78716 82.3701C5.48796 82.9686 4.57804 84.2623 3.00698 86.2916L3.0069 86.2915L3.00079 86.2997C1.469 88.3643 0.65625 90.3233 0.65625 92.1641C0.65625 93.3568 0.892613 94.3439 1.44941 95.0399C2.02325 95.7572 2.86881 96.082 3.89062 96.082ZM181.232 118.061L181.246 118.004V117.945C181.246 117.472 181.158 117.025 180.898 116.688C180.62 116.326 180.212 116.176 179.77 116.176C179.515 116.176 179.245 116.25 178.977 116.359C178.703 116.471 178.399 116.632 178.067 116.836C177.404 117.244 176.594 117.846 175.642 118.634C173.7 120.241 170.672 123.839 166.575 129.366L166.574 129.367C162.52 134.86 160.422 139.558 160.422 143.434C160.422 147.182 161.565 149.996 163.946 151.747C166.255 153.444 168.999 154.285 172.152 154.285C175.952 154.285 179.957 152.573 184.157 149.245C188.359 145.917 192.793 140.944 197.463 134.347C202.026 127.959 206.328 121.505 210.37 114.986L210.371 114.984C214.408 108.408 219.161 100.629 224.629 91.6446C230.163 82.6603 234.16 76.4222 236.624 72.9206C239.101 69.4005 243.726 62.6261 250.496 52.6009C257.256 42.6867 262.481 35.3606 266.175 30.6161C274.97 29.2483 282.619 27.3962 289.119 25.0564L289.12 25.0558C292.737 23.7406 295.628 22.152 297.772 20.2772C299.969 18.412 301.168 16.4633 301.168 14.4297C301.168 12.4976 300.547 10.5858 299.338 8.7011C297.447 5.42123 293.642 3.87109 288.168 3.87109C279.878 3.87109 270.129 8.4919 258.944 17.5775C239.485 21.5278 222.275 23.5 207.309 23.5C199.794 23.5 194.183 23.2394 190.458 22.7235C188.591 22.4648 187.232 22.1462 186.352 21.7805C185.911 21.5974 185.622 21.4152 185.451 21.2485C185.286 21.0891 185.25 20.9673 185.25 20.875C185.25 20.8022 185.307 20.5909 185.562 20.1924C185.802 19.817 186.173 19.3429 186.686 18.7664C187.252 18.1329 187.692 17.5501 187.993 17.0199C188.29 16.4952 188.473 15.9841 188.473 15.5039C188.473 15.1634 188.322 14.8766 188.08 14.6608C187.852 14.4579 187.548 14.319 187.212 14.219C186.538 14.0188 185.576 13.9297 184.359 13.9297C181.822 13.9297 178.671 15.0212 174.935 17.1187L174.932 17.1206C171.188 19.2597 169.099 22.0563 168.822 25.5226C168.691 27.0995 168.625 28.7404 168.625 30.4453C168.625 32.2225 169.374 33.96 170.793 35.6498L170.799 35.6574C172.269 37.3364 175.259 38.8003 179.626 40.1042L179.633 40.106C184.067 41.3634 191.288 41.9805 201.254 41.9805C210.999 41.9805 224.332 39.8765 241.234 35.6873C236.908 41.0769 232.557 47.1162 228.179 53.8043L228.177 53.8077C226.42 56.5414 224.044 60.2192 221.049 64.8414L221.046 64.8456C218.118 69.4656 213.465 76.6903 207.084 86.5208C200.712 96.2741 192.679 107.592 182.983 120.477L182.97 120.494L182.959 120.512C182.706 120.918 182.428 121.059 182.113 121.059C181.714 121.059 181.378 120.94 181.084 120.701C180.864 120.475 180.772 120.261 180.759 120.048L181.232 118.061ZM101.196 137.121C97.9862 140.264 96.3594 143.904 96.3594 148.023C96.3594 150.475 96.964 152.406 98.2612 153.721C99.5597 155.038 101.468 155.652 103.891 155.652C107.903 155.652 111.481 153.843 114.615 150.31C117.735 146.857 119.332 143.228 119.332 139.43C119.332 137.11 118.619 135.289 117.123 134.062C115.645 132.852 113.484 132.289 110.727 132.289C107.548 132.289 104.369 133.948 101.196 137.121Z"
                stroke="white"
              />
            </svg>
          </div>

          <header>
            <motion.div
              className="container"
              style={{ scale: scaleOutOnScroll, opacity: FadeOutOnScroll }}
            >
              <div className="nav_contain">
                <div>
                  <span className="span-4">F</span>
                  <span className="span-3">l</span>
                  <span className="span-2">o</span>
                  <span className="span-1">r</span>
                  <span className="span-2">i</span>
                  <span className="span-3">a</span>
                  <span className="span-4">n</span>
                </div>
              </div>
              <div className="nav_contain">
                <div>
                  <span className="span-4">T</span>
                  <span className="span-3">e</span>
                  <span className="span-2">l</span>
                  <span className="span-1">l</span>
                  <span className="span-2">i</span>
                  <span className="span-3">e</span>
                  <span className="span-4">r</span>
                </div>
              </div>
              <h1>Développer web</h1>
            </motion.div>
          </header>
          <section className="biographie">
            <div
              className="image"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <Image filename={"Tete.JPG"} alt="my picture" />
            </div>
            <div className="paragraphe">
              <div className="TextFadeIn" ref={text}>
                <p>
                  Bonjour, je suis Florian TELLIER, développeur front end junior
                  de 20ans. Je possède un bac S mention bien et je suis
                  actuellement en licence 3 "Conception et Développement
                  d’Application Web et Mobile".
                </p>
                <p>
                  Passionné de développement web, j'essaie d'apprendre un
                  maximum de choses à ce sujet.
                </p>
              </div>
              {/* <i className="fab fa-html5 TextFadeIn" ref={text}></i>{" "}
              <i className="fab fa-css3-alt TextFadeIn" ref={text}></i>{" "}
              <i className="fab fa-js TextFadeIn" ref={text}></i>{" "}
              <i className="fab fa-sass TextFadeIn" ref={text}></i>{" "}
              <i className="fab fa-react TextFadeIn" ref={text}></i>{" "}
              <i className="fab fa-node TextFadeIn" ref={text}></i>
              <i className="fab fa-angular TextFadeIn" ref={text}></i>
              <i className="i-logo_image" ref={text}>
                <Image filename={"Gatsby_logo.png"} alt="logo gatsby" />
              </i> */}
              <div className="logos_container">
                <Image filename={"html5.png"} alt="logo html5" />
                <Image filename={"css.png"} alt="logo css" />
                <Image filename={"js.png"} alt="logo js" />
                <Image filename={"sass.png"} alt="logo sass scss" />
                <Image filename={"react.png"} alt="logo react" />
                <Image filename={"angular.png"} alt="logo angular" />
                <Image filename={"nodejs.png"} alt="logo nodejs" />
                <Image filename={"icon.png"} alt="logo gatsby" />
              </div>

              <a
                href="#contact"
                className="TextFadeIn"
                ref={text}
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              >
                {" "}
                <span>me contacter</span>
              </a>
            </div>
          </section>

          <Portfolio_projects
            cursor={cursorHovered}
            cursorText={cursorHovered_clickable}
          />

          <section className="a_propos">
            <div>
              <p>
                Je n'ai pas encore accumulé beaucoup d'expérience
                professionnelle mais je suis passioné par la création de site
                web depuis plusieurs années déjà. Je m'implique dans tous les
                projets que je réalise car je souhaite toujours m'améliorer.
              </p>
              <p>
                Je suis toujours partant pour réaliser un projet, n'hésiter pas
                a me contacter si vous pensez que l'on pourrais créer quelque
                chose ensemble.
              </p>
            </div>
          </section>
          <section className="contact" id="contact">
            <div>
              <a
                href="mailto:florian.tellier02@gmail.com"
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              >
                <span>Email : </span>
                <span> florian.tellier02@gmail.com</span>
              </a>
            </div>

            <div>
              <a
                href="tel:06 43 17 66 22"
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              >
                <span>Telephone : </span>
                <span> 06 43 17 66 22</span>
              </a>
            </div>
            <div className="github_icon">
              <a
                href="https://github.com/multicolores"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-github"
                  onMouseEnter={() => {
                    setCursorHovered(true);
                    setcursorHovered_clickable(true);
                  }}
                  onMouseLeave={() => {
                    setCursorHovered(false);
                    setcursorHovered_clickable(false);
                  }}
                ></i>
              </a>
            </div>
          </section>

          <div className="contact_Me">
            {/* <h2>Me contacter</h2> */}
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <input type="text" name="name" required />{" "}
                <label htmlFor="name">
                  {" "}
                  <span>Nom :</span>{" "}
                </label>
              </p>
              <p>
                <input type="email" name="email" required />
                <label htmlFor="email">
                  <span>Email :</span>
                </label>
              </p>
              <p>
                <label htmlFor="message" className="message">
                  <span>Message</span> <textarea name="message"></textarea>
                </label>
              </p>
              <button type="submit">Envoyer</button>
            </form>

            <div>
              <i className="far fa-envelope"></i>
            </div>
          </div>
        </motion.div>
        {/* <ScrollToTop /> */}
      </>
    </main>
  );
};

export default IndexPage;
