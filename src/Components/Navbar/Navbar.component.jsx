import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import ResponsiveMenu from 'react-responsive-navbar';

import './Navbar.styles.scss';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className='nav'>
      <ResponsiveMenu
        menuOpenButton={
          <p>O</p>
        }
        menuCloseButton={
          <p>X</p>
        }
        changeMenuOn="800px"
        menu={
          <ul className="nav-content">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="CoverPage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Cover Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="OurValues"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Values
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ProgramsinCompany"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Programs in Company
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ContactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="SBTNov"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SBT-Nov Dec 2019
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ChildrenTeenagers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Children and Teenagers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ParentsTeachers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Parents and Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="PersonalDevelopment"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Personal Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="OlderAdults"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Older Adults
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="OtherCourses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Other Courses
              </Link>
            </li>
          </ul>
        }
      />
      </div>
    );
  }
}
