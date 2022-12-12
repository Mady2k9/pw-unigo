import {
    AcademicCapIcon,
    HomeIcon
} from "@heroicons/react/24/outline";
import React from "react";

export const ShowCohortOn = '/';
const SidebarConfig = [
    [
        {
            name: 'Home',
            icon: <HomeIcon className={'h-5 font-bold'}/>,
            pattern: /\/*/,
            route: '/',
        },
        {
            name: 'About Us',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,

            pattern: /\/about-us/,
            route: '/about-us',
        },
        {
            name: 'Contact Us',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,

            pattern: /\/contact-us/,
            route: '/contact-us',
        },
        {
            name: 'Terms & Conditions',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,

            pattern: /\/terms-and-conditions/,
            route: '/terms-and-conditions',
        },
    ],
];
export default SidebarConfig