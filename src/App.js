import React, {useEffect}  from 'react';
import {useLocation} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Blog from './Blog';
import OurExpertise from './OurExpertise';
import ContactUs from './ContactUs';
import Shop from './Shop'
import Projects from './Projects'
import ProjectDescription from './projectDescription';
import Submission from './Submission';

export default function App() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/our-expertise' element={<OurExpertise />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/shop' element={<Shop/>} />
      <Route path ='/architecture/projects' element={<Projects/>} />
      <Route path='/projects/project-description' element={<ProjectDescription/>} />
      <Route path='/contact-us/submission' element={<Submission/>} />

    </Routes>
     
  )
}
