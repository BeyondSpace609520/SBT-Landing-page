import React from "react";

import './programsincompany.styles.scss';

export default function CompanyProgramsSection({data, id}) {
    const { Title, Subtitle, Pros, Lists, Exp, ImgUrl } = data;
    
    return (
        <div className="programs-company" id={id}>
            <img className='image' src={ImgUrl} alt='programs' />
            <div className='content'>
                <h1 className='title'>{Title}</h1>
                <h4 className='subtitle'>{Subtitle}</h4>
                <p>{Pros}</p>
                <ul>
                    {Lists.map((item, idx) => <li key={idx}>{item.Content}</li>)}
                </ul>
                <p>{Exp}</p>
            </div>
        </div>
    );
}
