import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomHeadingSecondary from "../../../components/GenericComponents/CustomHeadingSecondary";
import CustomDesc from "../../../components/GenericComponents/CustomDesc";

export const StatsSection = () => {
  const statsData = [
    { count: "20+", desc: "AI and Machine Learning Patterns" },
    { count: "76+", desc: "Users approve and use regularly AI writing" },
    { count: ">96%", desc: "Proven accuracy" },
    { count: "67", desc: "Proven accuracy" },
  ];

  return (
    <div
      className="py-5 position-relative"
      style={{ backgroundColor: "#EFEBF8" }}
    >
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <CustomHeadingSecondary text="Animate Text in ablink Automatic and Immediate" />
          </Col>

          <Col md={6}>
            <CustomDesc
              className=""
              text="The technology our AI assure a great writing, without waiting, without creative block, instant content only"
            />
          </Col>
        </Row>

        <Row className="mt-5 pt-4 mx-3 mb-5 pb-5">
          {statsData.map((items) => (
            <Col
              lg={3}
              md={6}
              className="d-flex justify-content-lg-end justify-content-start"
            >
              <div>
                <h1
                  className=""
                  style={{
                    color: "#D42B8B",
                    fontSize: "55px",
                    fontWeight: "800",
                  }}
                >
                  {items.count}
                </h1>
                <CustomDesc className="" text={items.desc} />
              </div>
            </Col>
          ))}
        </Row>

        <div className="gradient-section p-5 rounded-5">
          <Row className="px-4 d-flex align-items-center">
            <Col md={6}>
              <CustomHeadingSecondary
                textColor="text-white"
                text="Within the reach of any anime fan Easy to use and effective"
              />
            </Col>
            <Col md={6}>
              <CustomDesc
                textColor="text-white"
                text="Our Al will enhance the quality of your fan fiction or your post, it can create an interesting backstory or it can even advise you on how to continue with your text or conversation"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
