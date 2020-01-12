import React from "react";

import './ourvalues.styles.scss';

export default function OurValuesSection({data, id}) {
    const { Responsibility, Flexibility, Respect, Quality, ImgUrl } = data;
    
    return (
        <div className="our-values" id={id}>
            <img className='image' src={ImgUrl} alt='Our Values' />
            <div className='content'>
                <p className='title'>Values</p>
                <p>
                    <span className='subtitle'>
                        Responsibility,   
                    </span>
                    { Responsibility }
                </p>
                <p>
                    <span className='subtitle'>
                        Flexibility,   
                    </span>
                    { Flexibility }
                </p>
                <p>
                    <span className='subtitle'>
                        Respect,   
                    </span>
                    { Respect }
                </p>
                <p>
                    <span className='subtitle'>
                        Quality,   
                    </span>
                    { Quality }
                </p>
            </div>
        </div>
    );
}
