import React from "react";

import CustomButton from '../../Components/Button/custom-button.component';

import './aboutus.styles.scss';

export default function AboutUsSection({data, id}) {
    const { Mission, Vision, ImgUrl } = data;
    
    return (
        <div className="about-us" id={id}>
            <img className='image' src={ImgUrl} alt='about' />
            <div className='content'>
                <p>
                    <span className='subtitle'>
                        Our Mission:   
                    </span>
                    { Mission }
                </p>
                <p>
                    <span className='subtitle'>
                        Our Vision:  
                    </span>
                    { Vision }
                </p>
                
                <CustomButton title='Read More' id='SmartBusiness' />
            </div>
        </div>
    );
}
