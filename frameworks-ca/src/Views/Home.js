import "../sass/style.scss";
import Heading from "../components/Heading";
import NavBar from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import TabSection from "../components/Tab";
import CarouselImages from "../components/HeaderImage";
import AccordionSection from "../components/Accordion";
import Container from "react-bootstrap/Container";

// Footer
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <CarouselImages />
        <Container xs={10}>
          <Heading content="We do YAY things" />
          <Paragraph />
          <div className="d-md-none">
            <AccordionSection />
          </div>
          <div className="d-none d-md-block">
            <TabSection />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
