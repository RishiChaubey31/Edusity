import React from "react";
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's column today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          provident laboriosam reprehenderit neque. Sunt voluptatem velit eaque,
          perferendis nemo autem architecto maxime harum dignissimos earum
          dolore voluptatibus odio porro magnam possimus sint officia
          praesentium illum? In, similique omnis? Corrupti saepe eius, aliquid
          id quisquam optio enim, possimus, adipisci quos aliquam voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          provident laboriosam reprehenderit neque. Sunt voluptatem velit eaque,
          perferendis nemo autem architecto maxime harum dignissimos earum
          dolore voluptatibus odio porro magnam possimus sint officia
          praesentium illum? In, similique omnis? Corrupti saepe eius, aliquid
          id quisquam optio enim, possimus, adipisci quos aliquam voluptatum.
        </p>
      </div>
    </div>
  );
};

export default About;
