import {
    AcademicCapIcon,
    ArrowTopRightOnSquareIcon,
    BookmarkIcon,
    ComputerDesktopIcon,
    HomeIcon
} from "@heroicons/react/24/outline";
import React from "react";

const SidebarConfig = [
    [
        {
            name: 'Home',
            icon: <HomeIcon className={'h-5 font-bold'}/>,
            route: '/',
        },
        {
            name: 'About Us',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,
            route: '/about-us',
        },
        {
            name: 'Contact Us',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,
            route: '/contact-us',
        },
        {
            name: 'Terms & Conditions',
            icon: <AcademicCapIcon className={'h-5 font-bold'}/>,
            route: '/terms-and-conditions',
        },
    ],
];
export default SidebarConfig