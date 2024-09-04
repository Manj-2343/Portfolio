import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Web Development"}
            disc={` I have experience in web development, having worked on multiple projects that involved both front-end and back-end development to create user-friendly and high-quality web applications.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"ReactJs Developer"}
            disc={` I have a strong background in building dynamic and responsive user interfaces with React. I've worked on various projects where I leveraged React's powerful features to create seamless and engaging web applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"MERN Stack Developer"}
            disc={`I have experience in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js). My work involves crafting efficient backend systems and interactive front-end experiences to build comprehensive web solutions. `}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
