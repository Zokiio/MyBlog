import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Blog",
    path: "/blog",
  },
];

const Navigation = () => {
  return (
    <div className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Zottik</Link>
      <ul className="navbar-nav">
        { navList.map((link) => {
            console.log(link);
            return (
            <li key={link.id} className="nav-item">
            <Link className="nav-link" to={link.path} aria-label={link.title}>
              {link.title}
            </Link>
          </li>);
        })}
      </ul>
      </div>
    </div>
  );
};

export default Navigation;
