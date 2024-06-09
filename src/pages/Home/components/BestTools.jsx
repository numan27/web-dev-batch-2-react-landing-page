import React from "react";
import IMAGES from "../../../assets/index";
import { Container } from "react-bootstrap";
import CustomHeadingSecondary from "../../../components/GenericComponents/CustomHeadingSecondary";

const BestTools = () => {
  const bestToolImages = [
    { img: IMAGES.BEST_IMG_1 },
    { img: IMAGES.BEST_IMG_2 },
    { img: IMAGES.BEST_IMG_3 },
    { img: IMAGES.BEST_IMG_4 },
    { img: IMAGES.BEST_IMG_5 },
    { img: IMAGES.BEST_IMG_6 },
    { img: IMAGES.BEST_IMG_7 },
    { img: IMAGES.BEST_IMG_8 },
    { img: IMAGES.BEST_IMG_9 },
    { img: IMAGES.BEST_IMG_10 },
    { img: IMAGES.BEST_IMG_11 },
    { img: IMAGES.BEST_IMG_12 },
    // { img: IMAGES.BEST_IMG_13 },
  ];

  return (
    <Container className="my-5 text-center">
      <div className="">
        <CustomHeadingSecondary text="The best tool for" />
      </div>

      <div className="d-flex justify-content-around flex-wrap align-items-center">
        {bestToolImages.map((item) => (
          <img src={item.img} alt="Brand Img" />
        ))}
      </div>
    </Container>
  );
};

export default BestTools;
