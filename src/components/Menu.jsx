import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import gsap from "gsap";

import forumDiscussion from "../images/ForumDiscussion.jpg";
import muscuTrackerMainPage from "../images/muscu-tracker--main-page.jpg";
import muscuAppMainPage from "../images/muscu-app--all.jpg";
import restaurant_home from "../images/restaurant_home.jpg";
import resto_gatsby_home from "../images/gatsby-restaurant--home.jpg";
import architecture_home from "../images/Architecture2-home.jpg";
import Blog from "../images/Blog_home.jpg";
import sushi_darkmode_home from "../images/sushi_darkmode_home.jpg";
import SpaceStar from "../images/spacestar--main.jpg";
import Capsule from "../images/capsule_header.jpg";

const everyProjects = [
  {
    name: "MuscuTracker",
    image: muscuTrackerMainPage,
    path: "/muscutracker",
  },
  {
    name: "MuscuApp",
    image: muscuAppMainPage,
    path: "/muscuapp",
  },
  { name: "Forum", image: forumDiscussion, path: "/forum" },
  { name: "Restaurant", image: restaurant_home, path: "/restaurant" },
  {
    name: "Restaurant 2.0",
    image: resto_gatsby_home,
    path: "/restaurant_gatsby",
  },
  { name: "architecture", image: architecture_home, path: "/architecture" },
  { name: "Blog", image: Blog, path: "/blog" },
  { name: "sushi", image: sushi_darkmode_home, path: "/sushi" },
  { name: "Space Star", image: SpaceStar, path: "/SpaceStar" },
  { name: "Capsule", image: Capsule, path: "/capsule" },
];

const Menu = (props) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let ImageBackground = useRef(null);
  let Text = useRef(null);
  let Mouse = useRef(null);

  const [state, setState] = useState({
    initial: false,
    clicked: false,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  useEffect(() => {
    if (state.clicked === false) {
      //close the menu
      // menu.style.display = "none";
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open the menu
      // menu.style.display = "block";
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        // opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      staggerText(Text, Mouse);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,

      ease: "power3.inOut",
      stagger: {
        amount: 0.07,
      },
    });
  };

  const staggerText = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 2,
      x: -50,
      opacity: 0,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.5,
      },
    });
  };

  //images

  const handleImages = (image) => {
    gsap.to(ImageBackground, {
      duration: 0,
      background: `url(${image}) center center`,
    });
    gsap.to(ImageBackground, {
      duration: 0.4,
      opacity: 0.1,
      ease: "power3.inOut",
    });
    gsap.from(ImageBackground, {
      duration: 0.4,
      skeyY: 2,
      transformOrigin: "right top",
    });
  };

  const handleImagesReturn = () => {
    gsap.to(ImageBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <>
      <button disabled={disabled} onClick={handleMenu} className="button_menu">
        {state.menuName}
      </button>

      <div ref={(el) => (menu = el)} className="menu">
        <div
          ref={(el) => (revealMenuBackground = el)}
          className="menu_background"
        ></div>
        <div ref={(el) => (revealMenu = el)} className="menu_container">
          <div ref={(el) => (ImageBackground = el)} className="ImageBackground">
            {" "}
          </div>

          <div className="mouse" ref={(el) => (Mouse = el)}>
            <div className="scroll_down"> </div>
          </div>

          <div className="links_container" ref={(el) => (Text = el)}>
            {everyProjects.map((el, index) => (
              <Link to={el.path} key={index}>
                <span
                  key={el.name}
                  onMouseEnter={() => handleImages(el.image)}
                  onMouseOut={handleImagesReturn}
                  className={props.actualPage === el.name ? "active" : null}
                >
                  {el.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
