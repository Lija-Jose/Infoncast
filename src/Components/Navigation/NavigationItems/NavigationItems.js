import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={"NavigationItems"}>
        <NavigationItem link="/">Stations</NavigationItem>
        <NavigationItem link="/">Uploads</NavigationItem>
        <NavigationItem link="/">Profile</NavigationItem>
    </ul>
);

export default navigationItems;