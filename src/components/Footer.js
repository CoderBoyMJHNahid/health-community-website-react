import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    const Wrapper = styled.footer`
    background : ${({theme})=> theme.colors.footer_color};
    padding-top: 40px;

        .footer_title a{
            font-family: "Roboto";
            font-size: 25px;
            margin-top: 36px;
            font-weight: 500;
            color:white;
            text-decoration: none;
        }
        .footer_title{
            margin-bottom: 20px;
        }
        .footer_title a:hover{
            text-decoration: underline;
        }
        .title a{
            color:white;
            font-size:19px;
            text-decoration:none;
            margin-bottom: 20px;
            font-weight: 500;
        }
        .title{
            margin-bottom: 10px;
        }
        .title a:hover{
            text-decoration:underline;
        }
        .footer_info_wrapper ul{
            padding:0;
            list-style:none;
        }
        .footer_info_wrapper ul li a{
            color:white;
            text-decoration: none;
        }
        .footer_info_wrapper ul li a:hover{
            text-decoration: underline;
        }
        .footer_info_wrapper h5{
            color: white;
        }
        #icon_social{
            margin-top:10px;
        }
        #icon_social li{
            display: inline-block;
            padding-right:10px;
        }
        #icon_social li a svg{
            color:white;
            font-size:34px;
        }
        .first_part{
            padding-bottom:30px;
        }
        .last_part{
            padding: 30px 0px;
            background: white;

        }
        
        .last_part a{
            text-decoration: none;
            color: ${({theme})=> theme.colors.primary}
        }
        .last_part a:hover{
            text-decoration:underline;
        }
        .inline_ul li{
            display:inline-block;
            padding-right: 20px;
        }
        .inline_ul li:last-child{
            padding-right: 0px;
        }
        .newsletter_wrapper{
            padding: 10px 0px;
        }
        .newsletter_wrapper h4{
            color: white;
            text-transform: uppercase;
        }
        .newsletter_wrapper input{
            padding: 10px 20px;
            margin: 10px 0px;
        }
        #email_input{
            margin-right: 15px;
            width: 65%;
            border:none;
            border-radius: 15px;
        }
        #submit_btn{
            border-radius: 15px;
            color: white;
            background:#6a6a6a;
        }
        #submit_btn:hover{
            background:transparent;
            border-color:#6a6a6a;
        }
    `;
  return (
    <Wrapper>
        <div className="first_part">
            <div className="container">
                <div className="row">
                    <div className="footer_title">
                        <NavLink to='/'>Gouvernement du Québec</NavLink>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer_info_wrapper">
                            <div className="title">
                                <NavLink to='/'>Information and services</NavLink>
                            </div>
                            <ul>
                                <li><NavLink to='/'>Agriculture, environment and natural resources</NavLink></li>
                                <li><NavLink to='/'>Culture</NavLink></li>
                                <li><NavLink to='/'>Education</NavLink></li>
                                <li><NavLink to='/'>Employment</NavLink></li>
                                <li><NavLink to='/'>Businesses and self-employed workers</NavLink></li>
                                <li><NavLink to='/'>Family and support for individuals</NavLink></li>
                                <li><NavLink to='/'>Finance, income and other taxes</NavLink></li>
                                <li><NavLink to='/'>Homes and housing</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer_info_wrapper">
                            <div className="title">
                                <NavLink to='/'>Government</NavLink>
                            </div>
                            <ul>
                                <li><NavLink to='/'>Agriculture, environment and natural resources</NavLink></li>
                                <li><NavLink to='/'>Culture</NavLink></li>
                                <li><NavLink to='/'>Education</NavLink></li>
                                <li><NavLink to='/'>Homes and housing</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer_info_wrapper">
                            <div className="title">
                                <NavLink to='/'>Government</NavLink>
                            </div>
                            <ul>
                                <li><NavLink to='/'>Agriculture, environment and natural resources</NavLink></li>
                                <li><NavLink to='/'>Culture</NavLink></li>
                            </ul>
                            <div className="newsletter_wrapper">
                                <h4>Join 2,000+ subscribers</h4>
                                <form action="#">
                                    <input id='email_input' type="email" name='email' placeholder='Enter your Email' />
                                    <input type="submit" className='btn' id='submit_btn' value="Subscribe" />
                                </form>
                            </div>
                            <h5>Follow us</h5>
                            <ul id='icon_social'>
                                <li><NavLink><FacebookIcon/></NavLink></li>
                                <li><NavLink><TwitterIcon/></NavLink></li>
                                <li><NavLink><YouTubeIcon/></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="last_part">
            <div className="container">
                <div className="row text-center">
                    <ul className='inline_ul'>
                        <li><NavLink to='/single3/Accessibility'>Accessibility</NavLink></li>
                        <li><NavLink to='/single6/Sitemap'>Sitemap</NavLink></li>
                        <li><NavLink to='/single4/Access to information'>Access to information</NavLink></li>
                        <li><NavLink to='/single5/Privacy policy'>Privacy policy</NavLink></li>
                    </ul>
                    <NavLink to='/'>© Gouvernement du Québec, 2023</NavLink>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Footer;
