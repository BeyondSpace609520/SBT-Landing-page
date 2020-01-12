import React from 'react';
import './course-item.styles.scss';

const CourseItem = ({ title, imgUrl }) => {
    return (
        <div className='course-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imgUrl})`}}
            />
            <span className='title'>{title}</span>
        </div>
    )
}

export default CourseItem;