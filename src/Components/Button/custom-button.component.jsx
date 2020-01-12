import React from 'react';
import { Link } from "react-scroll";

import './custom-button.styles.scss';

const CustomButton = ( {title, id} ) => {
    return (
            <Link to={id} spy={true} smooth={true} offset={-70} duration={500}>
                <button>
                    {title}
                </button>
            </Link>
    );
}

export default CustomButton;