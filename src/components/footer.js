import React from 'react';
import FooterList from './footerlist.js';

const linkDataA = [
  { text: "Home", id: "Home"},
  { text: "About", id: "About" },
  { text: "Menu", id: "Menu" },
  { text: "Reservations", id: "Reservations", linkTarget: "/booking" },
  { text: "Order Online", id: "OrderOnline" },
  { text: "Login", id: "Login" }
];

const linkDataB = [
  { text: "Address", id: "Address" },
  { text: "Phone Number", id: "PhoneNumber" },
  { text: "Email", id: "Email" }
];

const linkDataC = [
  { text: "Address", id: "Address2" },
  { text: "Phone Number", id: "PhoneNumber2" },
  { text: "Email", id: "Email2" }
];

function Footer() {

  return (
    <footer className={"section-container"}>
    <nav aria-label="Footer Navigation" className={"width-limiter footer-container"}>
        <FooterList title={"Navigation"} linkData={linkDataA}/>
        <FooterList title={"Contact"} linkData={linkDataB}/>
        <FooterList title={"Social Media"} linkData={linkDataC}/>
    </nav>
</footer>
)};

export default Footer;
