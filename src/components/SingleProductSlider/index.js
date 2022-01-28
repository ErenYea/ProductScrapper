import Slider from "react-slick";
import React from "react";
import styled from "styled-components";

const SingleSLider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Carousel {...settings} className="review">
      <a
        href="https://www.walmart.com/browse/video-games/elden-ring/2636_7899038_1473282?facet=video_game_platform%3APlayStation+5%7C%7Cvideo_game_platform%3APlayStation+4"
        target="_blank"
      >
        {" "}
        <Wraps img="image1.jpeg"></Wraps>
      </a>

      <a
        href="https://www.walmart.com/ip/Uncharted-Legacy-of-Thieves-Collection-PlayStation-5/248103554"
        target="_blank"
      >
        <Wraps img="image2.jpeg"></Wraps>
      </a>
      <a
        href="https://www.walmart.com/browse/playstation-5/all-playstation-controllers/2636_3475115_5440784"
        target="_blank"
      >
        <Wraps img="image3.jpeg"></Wraps>
      </a>
      <a
        href="https://www.walmart.com/search?q=rainbow+six+extraction+playstation"
        target="_blank"
      >
        <Wraps img="image4.jpeg"></Wraps>
      </a>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  // border: 2px solid red;
  // height :200px;
  // align-items:center;
  // justify-content: center;
  margin-top: 150px;
  padding: 10px;
`;

const Wraps = styled.div`
  display: block;
  // background:grey;
  // display:flex;
  // justify-content: space-between;
  padding: 20px;
  // border: 2px solid green;
  height: 477px;
  background-image: ${(props) => `url('/images/${props.img}')`};
  background-size: cover;
  // background-position: center;
  backgroung-repeat: no-repeat;
`;

export default SingleSLider;
