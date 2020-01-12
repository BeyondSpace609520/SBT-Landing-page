import React from "react";

import './SBT.styles.scss';

export default function SmartBusinessSection({data, id}) {
    const { Title, Texts } = data;
    
    return (
        <div className="smart-business" id={id}>
            <h1 className='title'>{Title}</h1>
            {Texts.map((item, idx) => <p key={idx}>{item.Content}</p>)}
        </div>
    );
}
