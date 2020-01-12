import React from "react";

import CourseItem from '../../Components/CourseItem/course-item.component';

import './course-section.styles.scss';

export default function CourseSection({ title, content, id }) {
  return (
    <div className='course-section-content' id={id}>
        <h1 className='overview-title'>{title}</h1>
        <div className='overview-content'>
          {content.map((item, idx) => <CourseItem key={idx} title={item.Title} imgUrl={item.ImageUrl} />)}
        </div>
    </div>
  );
}
