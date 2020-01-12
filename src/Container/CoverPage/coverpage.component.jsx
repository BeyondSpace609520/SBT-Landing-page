import React from "react";

import CustomButton from '../../Components/Button/custom-button.component';

import './coverpage.styles.scss';

export default function CoverPageSection({data, id}) {
    const { Title, Text, ImgUrl } = data;

    return (
        <div className="cover-page" id={id}>
            <img className='image' src={ImgUrl} alt='cover' />
            <div className='content'>
                <h1 className='title'>{Title}</h1>
                <p className='subtitle'>{Text}</p>
                <CustomButton title={Text} id="AboutUs" />
            </div>
        </div>
    );
}
