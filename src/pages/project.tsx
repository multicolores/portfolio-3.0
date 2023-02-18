import React from "react";
import { Link } from "gatsby";
import Image from "../components/Image";
import NextProject from "../components/next_project";
const ProjectPage = (props) => {
  const projectsListArray = [
    {
      name: "Forum",
      description:
        "Ce projet en Symfony à été réalisé en License 3. Les fonctionnalités présentes dans ce site font suite à une list de User Story",
      mainImage: "ForumDiscussion.jpg",
      pagePath: "/forum",
      revealName: "show_forum",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "PHP,Symphony,Twig",
      imagesList: "",
    },
    {
      name: "Musculation",
      description:
        "Application pour suivre ses entraînements de musculation FullStack réalisée avec ReactJs, NodeJS et une base de données Mongodb",
      mainImage: "muscu-appMainPageScreen.png",
      pagePath: "/muscuapp",
      revealName: "show_muscuApp",
      projectUrl: "https://muscu-app-react.netlify.app/",
      projectGitHubUrl: "https://github.com/multicolores/muscu-app-react",
      techUsedList: "React, NodeJs, scss, material ui",
      imagesList: "",
    },
    {
      name: "Restaurant",
      description:
        "Ce site s'inspire grandement d'un design de site existant mais la conception de ce site representait pour moi un chalenge interessant. J'ai alors codé ce site a ma manière en React.js",
      mainImage: "restaurant_home.jpg",
      pagePath: "/restaurant",
      revealName: "show_resto",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "React, Gatsby, scss",
      imagesList: "",
    },
    {
      name: "Restaurant 2.0",
      description:
        "Ce projet ayant pour thème un restaurant quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.",
      mainImage: "Gatsby-restaurant-home.JPG",
      pagePath: "/restaurant_gatsby",
      revealName: "show_resto_gatsby",
      projectUrl: "",
      projectGitHubUrl: "",
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
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "React, Gatsby, scss",
      imagesList: "",
    },
    {
      name: "Blog",
      description:
        " Ce blog a été réalisé avec Gatsby et Netlify CMS, il possède un environnement permettant d'ajouter de nouveaux article sans faire de code.",
      mainImage: "Blog_home.jpg",
      pagePath: "/blog",
      revealName: "show_blog",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "React, Gatsby, scss, netlify",
      imagesList: "",
    },
    {
      name: "Sushi",
      description:
        " Ceci est un simple site sur le thème des sushi que j'ai réalisé dans le but de m'entrainer.",
      mainImage: "sushi_darkmode_home.jpg",
      pagePath: "/sushi",
      revealName: "show_sushi",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "HTML, JS, CSS",
      imagesList: "",
    },
    {
      name: "Space Star",
      description:
        " Ceci est un simple site sur le thème d'une voiture que j'ai réalisé pour m'entrainer.",
      mainImage: "SpaceStar.JPG",
      pagePath: "/spacestar",
      revealName: "show_SpaceStar",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "HTML, JS, CSS",
      imagesList: "",
    },
    {
      name: "Capsule",
      description:
        "Ceci est un site que j'ai réalisé pour m'améliorer en design.",
      mainImage: "capsule_header.jpg",
      pagePath: "/capsule",
      revealName: "show_Capsule",
      projectUrl: "",
      projectGitHubUrl: "",
      techUsedList: "HTML, JS, CSS",
      imagesList: "",
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
      {projectsListArray.map((project, i) => {
        return (
          project.pagePath.replace("/", "") == props.name && (
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
                <a
                  className="visit_site"
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span>visiter le site</span>
                </a>
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
