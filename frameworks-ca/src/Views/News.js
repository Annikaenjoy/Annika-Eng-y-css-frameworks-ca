import React from "react";
import NavBar from "../components/Navbar";
import Heading from "../components/Heading";
import PageNumber from "../components/Pagenumber";
import ContentCards from "../components/Cards";

// Images
import Image1 from "../img/NewsImages/news-1.jpg";
import Image2 from "../img/NewsImages/news-2.jpg";
import Image3 from "../img/NewsImages/news-3.jpg";
import Image4 from "../img/NewsImages/news-4.jpg";
import Image5 from "../img/NewsImages/news-5.jpg";
import Image6 from "../img/NewsImages/news-6.jpg";
import Image7 from "../img/NewsImages/news-7.jpg";
import Image8 from "../img/NewsImages/news-8.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Footer
import Footer from "../components/Footer";

const News = () => {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Heading content="News" />
        <PageNumber />
        <Row>
          <Col md={3}>
            <ContentCards image={Image1} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image2} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image3} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image4} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image5} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image6} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image7} />
          </Col>
          <Col md={3}>
            <ContentCards image={Image8} />
          </Col>
          <PageNumber />
        </Row>
      </div>
      <Footer />
    </>
  );
};
export default News;
