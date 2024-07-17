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
import Post from './BlogPost';
import Architecture from './Architecture';
import Residentials from './Residentials'
import CommercialCategory from './CommercialCategory';
import InstitutionCategory from './InstitutionCategory';
import Masterplanning from './Masterplanning';

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
      <Route path='/submission' element={<Submission/>} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/architecture/residentials" element={<Residentials />} />
      <Route path="/residentials/:sub_category_name" element={<Projects />} />
      <Route path='/residentials/:sub_category_name/:title' element={<ProjectDescription/>} />
      <Route path='/architecture/commercial' element={<CommercialCategory/>} />
      <Route path='/architecture/institutions' element={<InstitutionCategory />} />
      <Route path='/masterplanning' element={<Masterplanning />} />

    </Routes>
     
  )
}
