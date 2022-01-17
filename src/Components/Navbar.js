import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light  bg-light sticky-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'><img src=''/></a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
