import React from "react";

import './trainingprograms.styles.scss';

export default function TrainingProgramsSection({data, id}) {
    const { Title, Programs, ImgUrl } = data;
    
    return (
        <div className="training-programs" id={id}>
            <img className='image' src={ImgUrl} alt='training' />
            <div className='content'>
                <p className='title'>{Title}</p>
                <ul>
                    {Programs.map((item, idx) => <li key={idx}>{item.type}</li>)}
                </ul>
            </div>
        </div>
    );
}
