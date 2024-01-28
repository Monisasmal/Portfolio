
import './App.css';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/themes';
import { useState } from 'react';
import HeroSection from './component/HeroSection';
import Skills from './component/Skills';
import Navbar from './component/Navbar';
import Education from './component/Education';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Contact from './component/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './component/Footer/Footer';

const Body = styled.div`
background-color: ${({theme})=> theme.bg};
width:100%;
height:100%
overflow-x: hidden;
`
const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201,32,184,0)50%), linear-gradient(141.27deg, rgba(0,70,209,0.15)100%);
width: 100%;

`

function App() {
  const [darkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>
      <Router>
      <Navbar />
      <Body>
        <HeroSection/>
        <Wrapper>
        <Skills/>
        <Education />
        </Wrapper>
        <Projects />
        <Experience />
         <Wrapper> 
          <Contact/>
       </Wrapper>
       <Footer/> 
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
