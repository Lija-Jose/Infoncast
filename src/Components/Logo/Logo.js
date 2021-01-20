import React from 'react';

import infoncastLogo from '../../Images/Logo.png';
import './Logo.css';

const logo = (props) => (
    <div className={"Logo"} style={{height: props.height}}>
        <img src={infoncastLogo} alt="Infoncast" />
    </div>
);

export default logo;