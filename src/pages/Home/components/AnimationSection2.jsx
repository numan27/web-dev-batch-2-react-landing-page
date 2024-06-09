import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IMAGES from "../../../assets/index";
import CustomHeadingSecondary from "../../../components/GenericComponents/CustomHeadingSecondary";
import CustomDesc from "../../../components/GenericComponents/CustomDesc";

const AnimationSection2 = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={6}>
          <div className="mt-5">
            <div className="mb-4">
              <CustomHeadingSecondary text="Animate Text in ablink Automatic and Immediate" />
            </div>
            <CustomDesc
              className=""
              text="The technology our AI assure a great writing, without waiting, without creative block, instant content only"
            />
          </div>
        </Col>

        <Col md={6}>
          <img className="w-100" src={IMAGES.ANIMATE_IMG_2} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default AnimationSection2;
