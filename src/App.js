import './App.css';
import AboutMe from './Components/About/AboutMe';
import Experience from './Components/Experience/Experience';
import Introduction from './Components/Introduction/Introduction';
import { Navbar } from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <AboutMe
        title='AboutMe'
        id='about'
      />
      <Experience />
    </div>
  );
}

export default App;
