import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar.component";
import LoadingBar from './Components/WithSpinner/with-spinner.component';

import CourseSection from './Container/CourseSection/course-section.component';
import CoverPageSection from './Container/CoverPage/coverpage.component';
import AboutUsSection from './Container/AboutUs/aboutus.component';
import TrainingProgramsSection from './Container/TrainingPrograms/trainingprograms.component';
import OurValuesSection from './Container/OurValues/ourvalues.component';
import SmartBusinessSection from './Container/SmartBusinnessTraining/SBT.component';
import CompanyProgramsSection from './Container/ProgramsInCompany/programsincompany.component';
import ContactUsSection from './Container/ContactUs/contactus.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageData: {},
      loading: true
    }

    this.getData();
  }

  async getData(){
    const res = await fetch('/pageData.json');
    const data = await res.json();
    return this.setState({ 
      pageData: data, 
      loading: false 
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { loading, pageData } = this.state;
    if (loading){
      return <LoadingBar />
    }
    return (
      <div className="App">
        <Navbar />
        <CoverPageSection data={pageData.CoverPage} id="CoverPage" />
        <AboutUsSection data={pageData.AboutUs} id="AboutUs" />
        <TrainingProgramsSection data={pageData.TrainingPrograms} />
        <OurValuesSection data={pageData.OurValues} id="OurValues" />
        <SmartBusinessSection data={pageData.SmartBusinnessTraining} id="SmartBusiness"/>
        <CompanyProgramsSection data={pageData.ProgramsInCompany} id="ProgramsinCompany" />
        <CourseSection title="SBT - November - December 2019" content={pageData.SBT.Content} id="SBTNov" />
        <CourseSection title="Children - Teens" content={pageData.ChildrenAndTeenagers.Content} id="ChildrenTeenagers" />
        <CourseSection title="Parents and Teachers" content={pageData.ParentsAndTeachers.Content} id="ParentsTeachers" />
        <CourseSection title="Personal Development" content={pageData.PersonalDevelopment.Content} id="PersonalDevelopment" />
        <CourseSection title="Older Adults" content={pageData.OlderAdults.Content} id="OlderAdults" />
        <CourseSection title="Other Courses" content={pageData.OtherCourses.Content} id="OtherCourses" />
        <ContactUsSection />
      </div>
    );
  }
}

export default App;
