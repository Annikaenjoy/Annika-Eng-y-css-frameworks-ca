import './App.css';
import Heading from '../src/components/Heading';
import NavBar from '../src/components/Navbar'
import Paragraph from '../src/components/Paragraph'
import TabSection from './components/Tab';

function App() {
  return (
    <>
      <NavBar/>
      <Heading content="We do YAY things"/>
      <Paragraph />
      <TabSection />
      
      </>
        );
}

export default App;
