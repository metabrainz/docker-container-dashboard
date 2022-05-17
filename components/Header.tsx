import React from 'react'

const Header = () => {
    return(
        <nav className='navbar navbar-expand-md navbar-light bg-light border-bottom fixed-top'>
            <a className='navbar-brand' href='https://metabrainz.org'>
                <img className='d-inline-block align-top ms-2'
                     height='30px'
                     src='https://metabrainz.org/static/img/navbar_logo.svg'
                     alt="Logo"/>
            </a>
            <strong className='d-none d-sm-block ms-auto me-2'>Docker Containers</strong>
        </nav>
    )
}

export default Header
