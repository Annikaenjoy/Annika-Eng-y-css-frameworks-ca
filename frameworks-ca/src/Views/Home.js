import '../App.scss';
import Heading from '../components/Heading';
import NavBar from '../components/Navbar'
import Paragraph from '../components/Paragraph'
import TabSection from '../components/Tab';
import Footer from '../components/Footer';
import CarouselImages from '../components/HeaderImage';
import AccordionSection from '../components/Accordion';


const Home=()=> {
  return (
    <>
      <NavBar/>
      <CarouselImages/>
      <Heading content="We do YAY things"/>
      <Paragraph />
      <div className="d-md-none">
      <AccordionSection/>
      </div>
      <div className="d-none d-md-block">
      <TabSection />
      </div>
      <Footer/>
      </>
        );
}

export default Home;
