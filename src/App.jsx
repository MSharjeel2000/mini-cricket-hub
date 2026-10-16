import { Routes , Route  , Link } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Teams from "./pages/Teams";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <nav>
{/*Link creates a clickable navigation link , to="/matches" tells it which route to open , Matches is the text the visitor sees.*/}
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/about">About</Link>
      </nav>
{/*Why put nav above Routes?
Because we want the navigation bar to remain visible while the page below it changes. The links are shared across all four routes.*/}
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/matches" element={<Matches />}/> {/*Route defines one route , path="/matches" says which URL this route matches , element={<Matches />} says which component React should display for that URL*/}
        <Route path="/teams" element={<Teams />}/>
        <Route path="/about" element={<About />}/>
      </Routes>

      <Footer />

    </div>
  )
};

export default App;