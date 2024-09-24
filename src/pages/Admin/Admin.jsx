import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin py-20">
      <nav className="mt-20">
        <ul>
            <li><Link to={'/addnews'}>Add News</Link></li>
            <li><Link to={'/addnews'}>Add talented</Link></li>
            <li><Link to={'/addnews'}>Add latest event</Link></li>
            <li><Link to={'/addnews'}>Add Achievemnts</Link></li>
            <li><Link to={'/addnews'}>Add gallary</Link></li>
            <li><Link to={'/addnews'}>Add levels</Link></li>
            <li><Link to={'/addnews'}>Add waves</Link></li>
            <li><Link to={'/addnews'}>Add session</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Admin;
