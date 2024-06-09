import React from "react";
import { Container } from "react-bootstrap";
import CustomHeadingSecondary from "../../../components/GenericComponents/CustomHeadingSecondary";

const GradientSection = () => {
  return (
    <div className="gradient-component">

      <Container className="gradient-box rounded-5 mx-auto top-50 start-50 translate-middle">
        <div>
          <CustomHeadingSecondary text="Try it for free right now!" />
        </div>
      </Container>
    </div>
  );
};

export default GradientSection;
