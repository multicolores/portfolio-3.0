import React from "react";
import { Link } from "gatsby";
import Image from "../components/Image";
import NextProject from "../components/next_project";
import Menu from "../components/Menu";

const ProjectPage = (props) => {
  const projectName = props.name ?? "MuscuTracker";

  const projectsListArray = [
    {
      name: "MuscuTracker",
      description:
        "Application web pour suivre ses entraînements de musculation FullStack réalisée avec ReactJs, NodeJS et une base de données Mongodb",
      mainImage: "muscu-tracker--main-page.jpg",
      pagePath: "/muscutracker",
      revealName: "show_muscuTracker",
      projectUrl: "https://muscu-tracker.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/MuscuTrackerFront",
      techUsedList: "React, NodeJs, SCSS, MongoDB",
      imagesList:
        "muscu-tracker--phone.png,muscu-tracker--home-page.jpg,muscu-tracker--register.jpg,muscu-tracker--home2.jpg",
    },
    {
      name: "MuscuApp",
      description:
        "Application android pour suivre ses entraînements de musculation",
      mainImage: "muscu-app--all.jpg",
      pagePath: "/muscuapp",
      revealName: "show_muscuApp",
      projectUrl: "",
      projectGitHubUrl: "https://github.com/multicolores/AndroidMuscuApp",
      techUsedList: "Java,SQLite,andoidStudio",
      imagesList:
        "muscu-app--stats.jpg,muasu-app--main.jpg,muscu-app--home.jpg",
    },
    {
      name: "Forum",
      description:
        "Ce projet en Symfony à été réalisé en License 3. Les fonctionnalités présentes dans ce site font suite à une list de User Story",
      mainImage: "ForumDiscussion.jpg",
      pagePath: "/forum",
      revealName: "show_forum",
      projectUrl: "",
      projectGitHubUrl: "https://github.com/multicolores/ForumSymfony",
      techUsedList: "PHP,Symphony,Twig",
      imagesList: "ForumInscription.jpg,ForumDiscussion.jpg,ForumHome.jpg",
    },
    {
      name: "Restaurant",
      description:
        "Ce site s'inspire grandement d'un design de site existant mais la conception de ce site representait pour moi un chalenge interessant. J'ai alors codé ce site a ma manière en React.js",
      mainImage: "restaurant_home.jpg",
      pagePath: "/restaurant",
      revealName: "show_resto",
      projectUrl: "https://react-florian-restaurant.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/Restaurant-site",
      techUsedList: "React, Gatsby, scss",
      imagesList:
        "restaurant_home_drink.jpg,restaurant_eat.jpg,restaurant_visit.jpg,restaurant_home_eat.jpg",
    },
    {
      name: "Restaurant 2.0",
      description:
        "Ce projet ayant pour thème un restaurant quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.",
      mainImage: "gatsby-restaurant--home.jpg",
      pagePath: "/restaurant_gatsby",
      revealName: "show_resto_gatsby",
      projectUrl: "https://restaurant-gatsby2.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/Restaurant2.0",
      techUsedList: "React, Gatsby, scss",
      imagesList:
        "Gatsby-restaurant-eat.jpg,Gatsby-restaurant-drink.jpg,Gatsby-restaurant-about.jpg",
    },
    {
      name: "Architecture",
      description:
        "Ce projet ayant pour thème le portfolio d'un architecte quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.",
      mainImage: "Architecture2-home.jpg",
      pagePath: "/architecture",
      revealName: "show_architecture",
      projectUrl: "https://gatsby-architecture.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/Architecture-2.0",
      techUsedList: "React, Gatsby, scss",
      imagesList: "Architecture2-project_page.jpg,Architecture2-apropos.jpg",
    },
    {
      name: "Blog",
      description:
        " Ce blog a été réalisé avec Gatsby et Netlify CMS, il possède un environnement permettant d'ajouter de nouveaux article sans faire de code.",
      mainImage: "Blog_home.jpg",
      pagePath: "/blog",
      revealName: "show_blog",
      projectUrl: "https://blog-1-gatsby.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/Blog-1.0",
      techUsedList: "React, Gatsby, scss, netlify",
      imagesList: "Blog_page1.jpg,Blog_admin.JPG",
    },
    {
      name: "Sushi",
      description:
        " Ceci est un simple site sur le thème des sushi que j'ai réalisé dans le but de m'entrainer.",
      mainImage: "sushi_darkmode_home.jpg",
      pagePath: "/sushi",
      revealName: "show_sushi",
      projectUrl: "https://sushi-site.netlify.app/sushi_darkmode.html",
      projectGitHubUrl:
        "https://github.com/multicolores/Petit-site-html-css/tree/main/Sushi%20site",
      techUsedList: "HTML, JS, CSS",
      imagesList:
        "shushi_white.JPG,sushi_darkmode_mobile.jpg,suhsi_lightmode_mobile.jpg,sushi_site_white.jpg,sushi_site_darkmode.jpg",
    },
    {
      name: "Space Star",
      description:
        " Ceci est un simple site sur le thème d'une voiture que j'ai réalisé pour m'entrainer.",
      mainImage: "spacestar--main.jpg",
      pagePath: "/spacestar",
      revealName: "show_SpaceStar",
      projectUrl: "https://mitsubishi-spacestar.netlify.app/",
      projectGitHubUrl:
        "https://github.com/multicolores/Petit-site-html-css/tree/main/SpaceStar",
      techUsedList: "HTML, JS, CSS",
      imagesList: "SpaceStar_carac.jpg,SpaceStar_img2.jpg",
    },
    {
      name: "Capsule",
      description:
        "Ceci est un site que j'ai réalisé pour m'améliorer en design.",
      mainImage: "capsule_header.jpg",
      pagePath: "/capsule",
      revealName: "show_Capsule",
      projectUrl: "https://capsuletemporelle.netlify.app/",
      projectGitHubUrl:
        "https://github.com/multicolores/Petit-site-html-css/tree/main/capsule",
      techUsedList: "HTML, JS, CSS",
      imagesList: "capsule_header.jpg,capsule_page.jpg",
    },
  ];
  //   {project.name == "Forum" ? <p>test</p> : <p>non</p>}

  return (
    <>
      <Link to={"/"}>
        <span className="homeLink">
          <Image filename="myLogo.png" alt="logo" />
        </span>
      </Link>
      <Menu />
      {projectsListArray.map((project, i) => {
        return (
          project.pagePath.replace("/", "") == projectName && (
            <div className="projectPageContainer">
              {/* //**HEADER**  */}
              <div className="name">
                {project.name.split("").map((letter, i) => {
                  return <span className={"span-" + (i + 1)}>{letter}</span>;
                })}
              </div>

              <div className="image_container">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    filename={project.mainImage}
                    alt={"Main image of the website project" + project.name}
                  />
                </a>
              </div>

              {/* //**DESCRIPTION**  */}
              <p className="description">
                Application pour suivre ses entraînements de musculation
                FullStack réalisée avec ReactJs, NodeJS et une base de données
                Mongodb
                {project.projectUrl && (
                  <a
                    className="visit_site"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span>visiter le site</span>
                  </a>
                )}
                <a
                  href={project.projectGitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>voir le code</span>
                </a>
                {project.techUsedList
                  .replace(" ", "")
                  .split(",")
                  .map((tech, i) => {
                    return <i key={i}>{tech}</i>;
                  })}
              </p>

              {/* //**Images views of project**  */}
              {project.imagesList.split(",").map((imageUrl, i) => {
                return (
                  <div className={"image_page page" + (i + 1)} key={i}>
                    <Image
                      filename={imageUrl}
                      alt={
                        "Screen shot of a part of the project " + project.name
                      }
                    />
                  </div>
                );
              })}

              <Link
                to={
                  projectsListArray[i + 1]
                    ? "/project" + projectsListArray[i + 1].pagePath
                    : "/project" + projectsListArray[0].pagePath
                }
              >
                {projectsListArray[i + 1] ? (
                  <NextProject
                    project={projectsListArray[i + 1].name}
                    image={projectsListArray[i + 1].mainImage}
                  />
                ) : (
                  <NextProject
                    project={projectsListArray[0].name}
                    image={projectsListArray[0].mainImage}
                  />
                )}
              </Link>
            </div>
          )
        );
      })}
    </>
  );
};

export default ProjectPage;
