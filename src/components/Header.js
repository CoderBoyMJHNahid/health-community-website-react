import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const Wrapper = styled.header`
        background: ${({theme})=> theme.colors.primary};
        padding: 12px;
        .logo a{
            font-size: 35px;
            color: white;
            text-decoration:none;
        }
        .header_links ul{
            list-style:none;
            padding:0;
            margin:0
        }
        .header_links a{
            font-size:13px;
            color: white;
            text-decoration: none;
        }
        
    `;

  return (
    <Wrapper>
        <div className="container">
            <nav id='primary_header' className='d-flex justify-content-between align-items-center'>
                <div className="logo">
                    <NavLink to='/'>
                        <img src="images/logo.png" width={50} alt="Logo" />
                    </NavLink>
                </div>
                <div className="header_links">
                    <ul>
                        <li><NavLink to='/'>English</NavLink></li>
                        <li><NavLink to='/'>Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    </Wrapper>
  )
}

export default Header;
