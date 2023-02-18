import React, { useState } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../components/Image";

function Portfolio_projects(props) {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);

  //text apparition
  const [revealText, setRevealText] = useState({
    show: false,
    show_forum: false,
    show_muscuTracker: false,
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

  const projectsListArray = [
    {
      name: "MuscuTracker",
      description:
        "Application web pour suivre ses entraînements de musculation FullStack réalisée avec ReactJs, NodeJS et une base de données Mongodb",
      mainImage: "muscu-tracker--main-page.jpg",
      pagePath: "/muscutracker",
      revealName: "show_muscuTracker",
    },
    {
      name: "MuscuApp",
      description:
        "Application android pour suivre ses entraînements de musculation en java",
      mainImage: "muscu-app--all.jpg",
      pagePath: "/muscuapp",
      revealName: "show_muscuApp",
    },
    {
      name: "Forum",
      description:
        "Ce projet en Symfony à été réalisé en License 3. Les fonctionnalités présentes dans ce site font suite à une list de User Story",
      mainImage: "ForumDiscussion.jpg",
      pagePath: "/forum",
      revealName: "show_forum",
    },
    {
      name: "Restaurant",
      description:
        "Ce site s'inspire grandement d'un design de site existant mais la conception de ce site representait pour moi un chalenge interessant. J'ai alors codé ce site a ma manière en React.js",
      mainImage: "restaurant_home.jpg",
      pagePath: "/restaurant",
      revealName: "show_resto",
    },
    {
      name: "Restaurant 2.0",
      description:
        "Ce projet ayant pour thème un restaurant quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.",
      mainImage: "gatsby-restaurant--home.jpg",
      pagePath: "/restaurant_gatsby",
      revealName: "show_resto_gatsby",
    },
    {
      name: "Architecture",
      description:
        "Ce projet ayant pour thème le portfolio d'un architecte quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.",
      mainImage: "Architecture2-home.jpg",
      pagePath: "/architecture",
      revealName: "show_architecture",
    },
    {
      name: "Blog",
      description:
        " Ce blog a été réalisé avec Gatsby et Netlify CMS, il possède un environnement permettant d'ajouter de nouveaux article sans faire de code.",
      mainImage: "Blog_home.jpg",
      pagePath: "/blog",
      revealName: "show_blog",
    },
    {
      name: "Sushi",
      description:
        " Ceci est un simple site sur le thème des sushi que j'ai réalisé dans le but de m'entrainer.",
      mainImage: "sushi_darkmode_home.jpg",
      pagePath: "/sushi",
      revealName: "show_sushi",
    },
    {
      name: "Space Star",
      description:
        " Ceci est un simple site sur le thème d'une voiture que j'ai réalisé pour m'entrainer.",
      mainImage: "spacestar--main.jpg",
      pagePath: "/spacestar",
      revealName: "show_SpaceStar",
    },
    {
      name: "Capsule",
      description:
        "Ceci est un site que j'ai réalisé pour m'améliorer en design.",
      mainImage: "capsule_header.jpg",
      pagePath: "/capsule",
      revealName: "show_Capsule",
    },
  ];
  return (
    <>
      <div className="portfolio_projects">
        <motion.section
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Portfolio</h1>

          {projectsListArray.map((project, i) => {
            return (
              <AnimatePresence key={i}>
                {revealText[project.revealName] && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <p>{project.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </motion.section>

        <motion.div
          className="projects_container"
          exit={{ opacity: 0, x: "50%" }}
          transition={{ duration: 1 }}
        >
          {projectsListArray.map((project, i) => {
            return (
              <motion.div
                onHoverStart={() =>
                  setRevealText({
                    [project.revealName]: true,
                    class: "animated",
                  })
                }
                onHoverEnd={() =>
                  setRevealText({
                    show_show_resto: false,
                    class: "r",
                  })
                }
                key={i}
              >
                <Link to={"project" + project.pagePath}>
                  <Image
                    filename={project.mainImage}
                    alt="image de l'application"
                  />
                  <h2>{project.name}</h2>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Portfolio_projects;
