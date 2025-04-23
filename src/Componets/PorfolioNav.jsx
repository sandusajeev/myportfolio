import React from 'react';
import { Link } from 'react-router-dom';

function PorfolioNav() {
  return (
    <>
      <nav className='w-full px-8 shadow-md bg-black text-white flex items-center h-[100px] justify-between'>

        <div className='container mx-auto flex justify-start items-center'>
          MY PORTFOLIO
        </div>

        <div className='container mx-auto flex justify-end items-center'>
          <ul className='flex space-x-10'>
          <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>HOME</Link>
          <Link to={"/about"} style={{ textDecoration: 'none', color: "white" }}>ABOUT</Link>
          <Link to={"/projects"} style={{ textDecoration: 'none', color: "white" }}>PROJECTS</Link>
          <Link to={"/skills"} style={{ textDecoration: 'none', color: "white" }}>SKILLS</Link>
          <Link to={"/contact"} style={{ textDecoration: 'none', color: "white" }}>CONTACT</Link>
            {/* <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>SKILLS</li>
            <li>CONTACT</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default PorfolioNav;

