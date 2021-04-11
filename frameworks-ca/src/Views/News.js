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

// Footer
import Footer from "../components/Footer";

const News = () => {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Container xs={10}>
          <Heading content="News" />
          {/* <PageNumber/> */}
          <ContentCards image={Image1} />
          <ContentCards image={Image2} />
          <ContentCards image={Image3} />
          <ContentCards image={Image4} />
          <ContentCards image={Image5} />
          <ContentCards image={Image6} />
          <ContentCards image={Image7} />
          <ContentCards image={Image8} />
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default News;
