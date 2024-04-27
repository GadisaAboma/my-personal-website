import React from "react";
import Title from "../layouts/Title";
import { gojo, cooklikeme, kabba, edl, gojoDating } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gojo Ethiopian Dating App"
          des=" Gojo is a streamlined dating app designed to help users find romantic partners effectively. Featuring an intuitive swipe mechanism, users can quickly express interest and engage with compatible matches. With robust messaging, Gojo ensures safe and meaningful interactions, making it easier to find love or friendship."
          src={gojo}
        />
        <ProjectsCard
          title="Cook Like Me"
          des=" CookLikeMe brings the excitement of culinary creation to your smartphone. Modeled after the dynamic, short-form video approach of TikTok, this app allows users to share and discover quick cooking videos that inspire kitchen creativity. Whether you're a novice or a seasoned chef, CookLikeMe connects you with easy-to-follow recipes and cooking tips, making delicious dining an accessible adventure for everyone"
          src={cooklikeme}
        />
        <ProjectsCard
          title="Kabba Driver App"
          des=" 
          Kabba is a platform providing accessible transportation via bus pooling for various users. I developed its driver app, featuring authentication, Google Maps routing, route preference, live location tracking, and trip management."
          src={kabba}
        />
        <ProjectsCard
          title="Ethio Delivery Logistics Dashboard"
          des=" Ethio Delivery Logistics admin  Dashboard offers streamlined management of ride-sharing operations. It features real-time tracking of rides and driver activity, tools for fare management, and analytics for optimizing service efficiency. This dashboard ensures smooth operations, enhancing service reliability for both drivers and riders."
          src={edl}
        />
        {/* <ProjectsCard
          title="Drummroll Dashboard"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={gojo}
        /> */}
        <ProjectsCard
          title="Gojo Dashboard"
          des=" The Gojo Admin Dashboard is an essential tool for managing the Gojo dating app. It offers real-time insights and key metrics, facilitating user management, system monitoring, and marketing initiatives. With features for tracking user engagement and performance analytics, the dashboard enhances operational efficiency and ensures a secure, enjoyable dating experience for all users!"
          src={gojoDating}
        />
      </div>
    </section>
  );
};

export default Projects;
