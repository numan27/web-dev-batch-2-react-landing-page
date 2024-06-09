import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      heading: "Clients",
      links: [
        { link: "Login", path: "#" },
        { link: "Signup", path: "#" },
      ],
    },
    {
      heading: "SOCIAL MEDIA",
      links: [{ link: "Twitter", path: "https://twitter.com" }],
    },
    {
      heading: "LEGAL INFO",
      links: [
        { link: "Legal information", path: "#" },
        { link: "Terms & Conditions", path: "#" },
        { link: "Privacy Policy", path: "#" },
      ],
    },
    {
      heading: "SUPPORT",
      links: [
        { link: "Helpdesk", path: "#" },
        { link: "Support", path: "#" },
      ],
    },
  ];

  return (
    <div className="footer pt-5">
      <div className="container mt-5 pt-5">
        <Row className="mt-5 pt-4">
          {footerData.map((items) => (
            <Col md={3}>
              <h2 className="text-white fw-medium text-uppercase">
                {items.heading}
              </h2>
              <div className="d-flex flex-column pt-3">
                {items.links.map((data) => (
                  <Link
                    className="text-decoration-none footer-link mb-1"
                    to={data.path}
                  >
                    {data.link}
                  </Link>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Footer;
