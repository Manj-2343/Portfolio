import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="project">
      <Zoom>
        <h1>
          Recent <span className="green">Projects</span>
        </h1>
        <p>
          As a React developer, I specialize in building dynamic, responsive,
          and highly interactive user interfaces. My experience includes
          creating various web applications where I've implemented React's
          component-based architecture to deliver seamless user experiences. I
          have a strong understanding of state management, hooks, and front-end
          performance optimization, ensuring that the applications I build are
          both scalable and efficient.
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
