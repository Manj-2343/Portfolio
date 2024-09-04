import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg",
    disc: "Crafting a seamless online shopping experience with my MERN stack e-commerce project. Leveraging MongoDB, Express.js, React, and Node.js to ensure efficient product management and an engaging user interface.",
    liveLink: "https://myecommerceapp123.netlify.app",
  },
  {
    img: "https://designpickle-resources.s3.us-east-2.amazonaws.com/2020/Zoom+Backgrounds/April/20_DesignPickle_Zoom_Background-6.jpg",
    disc: "Built the VirtualIR app with React, an innovative platform that simulates real-world scenarios in an interactive virtual environment. The app combines advanced features with a user-friendly interface, allowing users to explore and interact with various virtual realities effectively.",
    liveLink: "https://myvirtualr123.netlify.app",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682002135678-87b8a2fdde50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdGdwdHxlbnwwfHwwfHx8MA%3D%3D",
    disc: "Designed and developed a modern and responsive landing page for ChatGPT using React. The page showcases key features and functionalities of ChatGPT, with smooth navigation, engaging visuals, and optimized performance across devices.",
    liveLink: "https://chat-gpt-site-app.netlify.app",
  },
  {
    img: "https://www.brainmobi.com/blog/wp-content/uploads/2017/03/travel-app.png",
    disc: "Developed a comprehensive travel app using React, designed to enhance user travel planning experiences. The app features intuitive navigation, interactive maps, and personalized recommendations, offering a seamless experience for travelers to explore destinations, book accommodations, and manage itineraries.",
    liveLink: "https://travelapp123.netlify.app",
  },
  {
    img: "https://cdn.digitbin.com/wp-content/uploads/Top-best-Android-Apps-to-watch-and-stream-free-movies-online.jpg",
    disc: "Created a dynamic movie app with React, offering users an immersive experience to explore, search, and view details about their favorite movies. The app includes features like movie trailers, cast information, and personalized recommendations, all wrapped in a sleek, easy-to-use interface.",
    liveLink: "https://github.com/Manj-2343/SPA-MoviexApp-with-React",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
