import React, { useState } from 'react'

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = index => {
        setActiveIndex(index);
    };

    const navLinks = [
        "home",
        "Our Courses",
        "Enrollment",
        "Pay Fee",
        "Contact"
    ]

    return (
        <>
            <nav>
                <h1 className='logo'><a href="#">APMC-IT</a></h1>
                <ul className='nav-links'>
                    {navLinks.map((value, index) => (
                        <li key={value}
                            className={activeIndex === index ? "active-link" : ""}
                            onClick={() => handleClick(index)}><a href="#">{value}</a></li>
                    ))}
                    <li className='login-button'><a href="#">Log In</a></li>
                </ul>
            </nav>
        </>
    )
}
