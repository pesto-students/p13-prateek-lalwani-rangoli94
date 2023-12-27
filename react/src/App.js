import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import Skill from './Skill';
import ReportingWebsite from './ReportingWebsite'
import WebsiteDevelopment from './WebsiteDevelopment'
import EcommerceWebsite from './EcommerceWebsite'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project/reporting_website" element={<ReportingWebsite />} />
          <Route path="/project/website_development" element={<WebsiteDevelopment />} />
          <Route path="/project/ecommerce_website" element={<EcommerceWebsite />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
