import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../components/Image";

function useMousePosition() {
  let [mousePosition, setMousePosition] = useState({ x: -50, y: -50 });

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);

  return mousePosition;
}

function Portfolio_projects(props) {
  //curseur
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  const { x, y } = useMousePosition();

  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);

  //text apparition
  const [revealText, setRevealText] = useState({
    show: false,
    show_forum: false,
    show_muscuApp: false,
    show_resto: false,
    show_resto_gatsby: false,
    show_architecture: false,
    show_blog: false,
    show_sushi: false,
    show_SpaceStar: false,
    show_Capsule: false,
    show_portfolio: false,

    class: "r",
  });

  return (
    <>
      <motion.div
        animate={{
          x: x - 25,
          y: y - 25,
          scale: cursorHovered || props.cursor ? 2.2 : 1,
        }}
        className="cursor"
      >
        <motion.span
          animate={{
            opacity: cursorHovered_clickable || props.cursorText ? 1 : 0,
          }}
        >
          Click
        </motion.span>
      </motion.div>
      <div className="portfolio_projects">
        <motion.section
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Portfolio</h1>

          <AnimatePresence>
            {revealText.show_forum && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ce projet en Symfony à été réalisé en License 3. Les
                  fonctionnalités présentes dans ce site font suite à une list
                  de User Story
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_muscuApp && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Application pour suivre ses entraînements de musculation
                  FullStack réalisée avec ReactJs, NodeJS et une base de données
                  Mongodb
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_resto && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ce site s'inspire grandement d'un design de site existant mais
                  la conception de ce site representait pour moi un chalenge
                  interessant
                  <br></br> J'ai alors codé ce site a ma manière en React.j{" "}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_resto_gatsby && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ce projet ayant pour thème un restaurant quelconque a été
                  réalisé avec gatsby.js qui permet de donner au site des
                  performences accrue pour le chargement des images notamment.{" "}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_architecture && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ce projet ayant pour thème le portfolio d'un architecte
                  quelconque a été réalisé avec gatsby.js qui permet de donner
                  au site des performences accrue pour le chargement des images
                  notamment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_blog && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ce blog a été réalisé avec Gatsby et Netlify CMS, il possède
                  un environnement permettant d'ajouter de nouveaux article sans
                  faire de code.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_sushi && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ceci est un simple site sur le thème des sushi que j'ai
                  réalisé dans le but de m'entrainer.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_SpaceStar && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ceci est un simple site sur le thème d'une voiture que j'ai
                  réalisé pour m'entrainer.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_Capsule && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Ceci est un site que j'ai réalisé pour m'améliorer en design.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {revealText.show_portfolio && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                // className={revealText.class}
              >
                <p>
                  Voici le site sur lequel vous êtes actuellement, il est l'un
                  de mes projets donc je suis le plus fière.
                  <br></br> J'espère que ce site vous montre non seulement mes
                  capacitées techniques mais aussi la passion avec laquel je
                  crée mes sites.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.div
          className="projects_container"
          exit={{ opacity: 0, x: "50%" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_forum: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_show_resto: false,
                class: "r",
              })
            }
          >
            <Link to={"/forum"}>
              <Image
                filename={"ForumDiscussion.jpg"}
                alt="image du Forum"
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Forum</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_muscuApp: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_show_resto: false,
                class: "r",
              })
            }
          >
            <Link to={"/muscuapp"}>
              <Image
                filename={"muscu-appMainPageScreen.png"}
                alt="image de l'application pour suivre ses entrînements de musculation"
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Musculation</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_resto: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_show_resto: false,
                class: "r",
              })
            }
          >
            <Link to={"/restaurant"}>
              <Image
                filename={"restaurant_home.jpg"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>restaurant</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_resto_gatsby: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_show_resto: false,
                class: "r",
              })
            }
          >
            <Link to={"/restaurant_gatsby"}>
              <Image
                filename={"Gatsby-restaurant-home.JPG"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>restaurant 2.0</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_architecture: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_architecture: false,
                class: "r",
              })
            }
          >
            <Link to={"/architecture"}>
              <Image
                filename={"Architecture2-home.jpg"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Architecture</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_blog: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_blog: false,
                class: "r",
              })
            }
          >
            <Link to={"/blog"}>
              <Image
                filename={"Blog_home.jpg"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Blog</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_sushi: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_sushi: false,
                class: "r",
              })
            }
          >
            <Link to={"/sushi"}>
              <Image
                filename={"sushi_darkmode_home.jpg"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>sushi</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_SpaceStar: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_SpaceStar: false,
                class: "r",
              })
            }
          >
            <Link to={"/spacestar"}>
              <Image
                filename={"SpaceStar.JPG"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Space Star</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_Capsule: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_Capsule: false,
                class: "r",
              })
            }
          >
            <Link to={"/capsule"}>
              <Image
                filename={"capsule_header.jpg"}
                alt=""
                onMouseEnter={() => {
                  setCursorHovered(true);
                  setcursorHovered_clickable(true);
                }}
                onMouseLeave={() => {
                  setCursorHovered(false);
                  setcursorHovered_clickable(false);
                }}
              />
              <h2>Capsule</h2>
            </Link>
          </motion.div>

          <motion.div
            onHoverStart={() =>
              setRevealText({
                show_portfolio: true,
                class: "animated",
              })
            }
            onHoverEnd={() =>
              setRevealText({
                show_portfolio: false,
                class: "r",
              })
            }
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Portfolio_projects;
