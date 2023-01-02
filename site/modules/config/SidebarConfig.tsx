import {
  AboutUs,
  ContactUs,
  Home,
  TermsAndCondition,
  Refer,
} from '@assets/images/hamburger'
import { AcademicCapIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const ShowCohortOn = '/'
const SidebarConfig = [
  [
    {
      name: 'Home',
      icon: <Home />,
      pattern: /\/*/,
      route: '/',
    },
    {
      name: 'Refer & Earn',
      icon: <Refer />,

      pattern: /\/refer-and-earn/,
      route: '/refer-and-earn',
    },
    {
      name: 'About Us',
      icon: <AboutUs />,

      pattern: /\/about-us/,
      route: '/about-us',
    },
    {
      name: 'Contact Us',
      icon: <ContactUs />,

      pattern: /\/contact-us/,
      route: '/contact-us',
    },
    {
      name: 'Terms & Conditions',
      icon: <TermsAndCondition />,

      pattern: /\/terms-and-conditions/,
      route: '/terms-and-conditions',
    },
  ],
]
export default SidebarConfig
