import React from "react";
import "./about.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="col">
          <div className="about__title">Online Chat</div>
          <div className="about__text">
            This online chat was be made for for communication between people,
            in any case if you want you can encrypt your message with key, and
            keep this key, after this who know your room id, can't decrypt your
            message, if he don't have key of course. For this project we are
            use: React, Socket.IO, encrypt algorithm, SCSS.
          </div>
        </div>
      </div>
    </section>
  );
};
