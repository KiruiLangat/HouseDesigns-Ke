import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className={`SidebarContainer ${sidebar ? 'show' : ''}`}>
      <div className="NavIcon" onClick={toggleSidebar}>
        {sidebar ? <FaTimes /> : <FaBars />}
      </div>
      {sidebar && (
        <ul>
          <Link className="SidebarLink" to="/page1">Page 1</Link>
          <Link className="SidebarLink" to="/page2">Page 2</Link>
          <Link className="SidebarLink" to="/page3">Page 3</Link>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;