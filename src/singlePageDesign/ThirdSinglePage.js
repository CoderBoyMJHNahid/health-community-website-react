import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';

// it's third single page with Accessibility Data
const ThirdSinglePage = () => {
    const {name} = useParams();
    const Wrapper = styled.section`
        padding-bottom: 50px;
       
        .extra_content{
            margin-bottom: 30px;
        }
        .extra_content a:hover{
            text-decoration: none;
        }
        .page_content_map{
            background:#f7f7f7;
            padding: 30px 10px;

        }
        .page_content_map p{
            color: black;
            font-weight: 500;
            font-size: 18px;
        }
        .page_content_map ul{
            padding:0;
            list-style: none;
        }
        .page_content_map ul li{
            padding: 7px 0px;
        }
        .page_content_map ul a{
            color: ${({theme})=> theme.colors.primary};
            font-size: 17px;
            text-decoration: none;
        }
        .page_content_map ul a:hover{
            text-decoration: underline;
        }
    `;
  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                <BreadCrumb />
                <div className="col-lg-8">
                    {/* Top Heading of this pages */}
                    <div className="pages_top_heading">
                        <h1>{name}</h1>
                    </div>
                    {/* Sub heading after Top Heading */}
                    <div className="pages_subtitle">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div id="page_content">
                        
                        <p>The Government of Quebec makes its site accessible to all Internet users. Accessibility allows people who have particular difficulties to have access to the information available on its site. It also makes it possible to overcome certain technical constraints to facilitate navigation.</p>
                        
                        <div className="page_content_map">
                        <p>In this page:</p>
                            <ul>
                                <li><NavLink to={`/`}>Government standard</NavLink></li>
                                <li><NavLink to={`/`}>Application of the Standard</NavLink></li>
                                <li><NavLink to={`/`}>Validation tools</NavLink></li>
                                <li><NavLink to={`/`}>Description of icons</NavLink></li>
                                <li><NavLink to={`/`}>Assistance</NavLink></li>
                                <li><NavLink to={`/`}>Site improvement</NavLink></li>
                            
                            </ul>
                        </div>
                        
                        <h2 className='mt-5'>Government standard</h2>
                        <p>This site was developed taking into account the Standard on the accessibility</p>
                        <p>Departments and agencies are responsible for the accessibility of their downloadable documents.</p>
                        <h2 className='mt-5'>Application of the Standard</h2>
                        <p>Québec.ca relies on a content management system that facilitates the generalized application of several elements allowing compliance. For example, the use of templates and style sheets ensures that the formatting and structure of content comply with the Standard.</p>
                        <p>Also, workshops, training and support are offered on a daily basis to government digital teams to promote the acquisition and application of good practices in terms of accessibility.</p>
                        
                        <h2 className='mt-5'>Validation tools</h2>
                        <p>The Government of Quebec conducts its accessibility tests using the following tools:</p>
                        <h2 className="mt-5">Browsers</h2>
                        <ul>
                            <li>Chromium</li>
                            <li>firefox.</li>
                        </ul>
                        <h2 className='mt-5'>Complementary tools</h2>
                        <ul>
                            <li>NoVisual desktop Access </li>
                            <li>WAVE</li>
                            <li>Web Developer </li>
                            <li>WCAG Contrast checker </li>
                            <li>Color Contrast Analyzer </li>
                        </ul>
                        <h2 className="mt-5">Assistance</h2>
                        <p>If you have difficulty navigating this site or consulting a document, you can get help by phoneThis link will open in a new window. or emailThis link will open in a new window. .</p>
                        <h2 className="mt-5">Site improvement</h2>
                        <p>You can help us improve the accessibility of this siteby informing us of the difficulties you encounter.You can also ussend your contact detailsto participate in user testing.</p>
                    </div>
                    <div className="extra_content">
                        <h2 className='mt-5'>See also</h2>
                        <NavLink to="/category/agriculture">Resources in urban agriculture</NavLink>
                    </div>
                </div>

                <RatedPage/>
            </div>
        </div>
    </Wrapper>
  )
}

export default ThirdSinglePage;
