import React, { useState } from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";


const Header = () => {
    const [solution, setSolution] = useState(false)
    const [about, setAbout] = useState(false)
    const [resources, setResources] = useState(false)
    return (
        <>
           <div className="home">
           <header className="App-header">
                <div className="container">
                    <div className="logo">
                        <Link to='/'>logo</Link>
                    </div>
                    <nav>
                        <ul className='nav_links'>
                            <li className='main_link'>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className='main_link' onClick={() => setSolution(!solution)}>Solutions {!solution ? (<BiChevronDown />) : (<BiChevronUp />)}
                                {solution && (
                                    <div>
                                        <ul>
                                            <li><NavLink to='/'>Assesment Solutions</NavLink></li>
                                            <li><NavLink to='/'>Data Warehousing</NavLink></li>
                                            <li><NavLink to='/'>Intervention Manager</NavLink></li>
                                            <li><NavLink to='/'>Navigator Analytics</NavLink></li>
                                            <li><NavLink to='/'>Professional Development & Support</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='main_link'><NavLink to=''>Blog</NavLink></li>
                            <li className='main_link' onClick={() => setAbout(!about)}>About Us
                                {!about ? (<BiChevronDown />) : (<BiChevronUp />)}
                                {about && (
                                    <div>
                                        <ul>
                                            <li><NavLink to='/'>Our Costomer</NavLink></li>
                                            <li><NavLink to='/'>Our Team</NavLink></li>

                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='main_link' onClick={() => setResources(!resources)}>Resources
                                {!resources ? (<BiChevronDown />) : (<BiChevronUp />)}
                                {resources && (
                                    <div>
                                        <ul>
                                            <li><NavLink to='/'>Privacy Policy</NavLink></li>
                                            <li><NavLink to='/'>Privacy Best Practices</NavLink></li>
                                            <li><NavLink to='/'>Security Best Practices</NavLink></li>

                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='main_link'><NavLink to=''>Tech Support  </NavLink></li>
                            <li className='main_link'>
                                <button>Contact Sales</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
           </div>
        </>
    )
}

export default Header
