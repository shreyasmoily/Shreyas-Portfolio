import React, { useEffect } from "react";
import "./Home.css";
import profile from "../Assets/profile.jpg";
import Projects from "../Components/Projects";
import Typewriter from "typewriter-effect";
import Particle from "../Components/Particle";
import Aos from "aos";
import "aos/dist/aos.css";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Banner from "../../src/Assets/banner.jpg"

function Home() {
  useEffect(() => {
    Aos.init({
      // offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 150,
    });
  }, []);
  const styles = {
    bounceInDown: {
      animation: "x 10s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
    bounceInRight: {
      animation: "x 10s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };

  return (
    <div>
      <section id="nav-bar" class="container">
        <header class="nav-bar">
          <div class="brand">
            <a href="#shreyasmoily">
              <h1>Shreyas Moily</h1>
            </a>
          </div>
          <div class="nav-list">
            {/* <div class="hamburger">
							<div class="bar"></div>
						</div> */}
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#hire">Contact</a>
              </li>
            </ul>
          </div>
        </header>
      </section>
      {/* <!-- End nav-bar  --> */}

      {/* <!-- Hero Section  --> */}
      <section id="hero" class="hero container">
        <div class="hero-info">
          <h1 class="hero-info-heading">Hey</h1>
          <p class="hero-info-subheading">
            <Typewriter
              options={{
                strings: ["This is", "Shreyas Moily"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <a href="#" type="button" class="hero-info-button">
            Portfolio
          </a>
        </div>
        <div class="hero-img">
          <img src={Banner} alt="" />
        </div>
        <Particle />
      </section>
      {/* <!-- End Hero Section  --> */}

      {/* <!-- About section  --> */}
      <StyleRoot>
        <section
          id="about"
          class="about container"
          data-aos="zoom-in"
          style={styles.bounceInRight}
        >
          <div class="about-info">
            <h1 class="about-info-heading">About Me</h1>
            <p class="about-info-desc">
              I am a front end developer capable of building both Apps and
              skilled with the technologies like React js, Front End development
              using HTML, CSS and JavaScript.
            </p>
            <a href="#" type="button" class="about-info-button">
              B in B{" "}
            </a>
          </div>
          <div class="about-img">
            <div class="about-img-wrapper">
              <img src={profile} alt="" />
            </div>
          </div>
        </section>
      </StyleRoot>
      {/* <!-- End About section  --> */}

      {/* <!-- Service Section  --> */}
      <section id="services" class="services container" data-aos="zoom-in">
        <div class="services-header">
          <h1 class="services-header-heading">services</h1>
          <p class="services-header-desc">
            Web Applications development
          </p>
        </div>
        <div class="services-info">
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-palette"></i>
                <h1 class="service-front-heading">Web Design</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Web Design</h1>
                <p class="service-back-desc">
                  Web design refers to the design of websites that are displayed
                  on the internet. It usually refers to the user experience
                  aspects of website development rather than software development.
                </p>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-laptop-code"></i>
                <h1 class="service-front-heading">Font End Dev</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Front End Dev</h1>
                <p class="service-back-desc">
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with them directly
                </p>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="service-card">
              <div class="service-front">
                <i class="fa fa-building"></i>
                <h1 class="service-front-heading">Web App Development</h1>
              </div>
              <div class="service-back">
                <h1 class="service-back-heading">Web App Development</h1>
                <p class="service-back-desc">
                  Web Application development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website or Web Application so that a user can
                  see and interact with them directly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        {" "}
        <Projects />
      </section>

      {/* <!-- End Service Section  --> */}

      {/* <!-- Hire Section  --> */}
      <section id="hire" class="hire container">
        <h1 class="hire-heading">Hire me to build your dream website</h1>
        <a
          href="mailto:shreyasmoily9@gmail.com"
          type="button"
          class="hire-button"
        >
          Let's Go !!
        </a>
      </section>
      {/* <!-- End Hire Section  --> */}

      {/* <!-- Footer section  --> */}
      <footer id="footer" class="footer container">
        <div class="footer-contact">
          <h1 class="footer-contact-heading">Contact Details</h1>
          <p class="footer-contact-info">Email: shreyasmoily9@gmail.com</p>
          <p class="footer-contact-info">Mobile: 9483764374</p>
        </div>
        <div class="footer-social-follow">
          {/* <h1 class="footer-social-follow-heading">Follow Me</h1> */}
          <div class="footer-social-icon">
            {/* <!-- <a href="#"><i class="fab fa-facebook"></i></a> --> */}
            <a
              target="_blank"
              href="https://www.instagram.com/shreyasmoily_/"
            >
              <i class="fab fa-instagram-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.https://www.linkedin.com/in/shreyas-moily-1064b91a4//"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
