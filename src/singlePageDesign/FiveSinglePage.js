import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';

// it's Five single page with Policy Data

const FiveSinglePage = () => {
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
                        <div className="page_content_map">
                        <p>In this page:</p>
                            <ul>
                                <li><NavLink to={`/`}>Surfing in Québec.ca</NavLink></li>
                                <li><NavLink to={`/`}>Cookies and Google Analytics</NavLink></li>
                                <li><NavLink to={`/`}>Interactions with the government</NavLink></li>
                                <li><NavLink to={`/`}>Confidentiality</NavLink></li>
                                <li><NavLink to={`/`}>Requests for access</NavLink></li>
                            </ul>
                        </div>
                        
                        <h2 className='mt-5'>Surfing in Québec.ca</h2>
                        <p>Québec.ca contains links to external sites. The government is not responsible for the content of those sites, nor for their privacy-related practices.</p>

                        <h2 className='mt-5'>Submitting a request for access</h2>
                        <p>You must send your request to the person responsible for access in the public body concerned (see the list of government departments (in French only) to find the contact information for that person).</p>
                        
                        <h2 className='mt-5'>Cookies and Google Analytics</h2>
                        <p>Google Analytics uses cookies to gather information on your surfing. It uses this information for statistical purposes in order to improve your experience. The information is stored in the United States. Google may communicate it to third parties, if required to do so by law, and for its own internal processing. The data will also be shared on the Québec government’s  Google Ads and Google Search Console accounts. The information includes, in particular, </p>
                        <ul>
                            <li>the anonymized IP address of your computer (your IP address is modified, which prevents anyone from connecting it to you),</li>
                            <li>the operating system of your device,</li>
                            <li>the pages consulted (the date, time and duration of your visits).</li>
                        </ul>
                        <p>Google advertising cookies are used to gather demographic data and information on visitors’ centres of interest. The information is anonymized and cannot be associated with a specific person.</p>
                        <p>You can configure your browser to block cookies, but this may affect your experience and limit your access to certain functions.</p>
                        <h2 className="mt-5">Interactions with the government</h2>
                       <p>You may communicate with the government through various secure tools, including telephone and online services.</p>
                       <p>Sending information by email is not entirely secure. For this reason, the government advises you against disclosing personal information, such as your social insurance number, in emails. The government does the same, by not answering your questions via email whenever this involves transmitting confidential data.</p>
                        <h2 className='mt-5'>Confidentiality</h2>
                        <p>Personal information gathered by Québec.ca is handled in compliance with the Act respecting Access to documents held by public bodies and the Protection of personal information This hyperlink will open in a new window.. This Act sets out the principles to be observed in collecting, using, communicating with or without consent, storing and destroying personal information, while setting up the appropriate security measures in accordance with the nature and quantity of the information.</p>
                        <p>This information is sent to other public bodies only if the communication takes place in carrying out their mission, with the person’s consent, or if the disclosure of the information is required by law, according to the applicable legal framework. The government does not use the information to create user profiles</p>
                        
                        <h2 className="mt-5">Requests for access</h2>
                        <p>You may submit a request for access to learn what personal information is held by public bodies. You may also make a request to have this information corrected.</p>
                    </div>
                    <div className="extra_content">
                        <h2 className='mt-5'>See also</h2>
                        <NavLink to="/category/Commission">Commission d'accès à l'information du Québec This hyperlink will open in a new window.</NavLink>
                        <NavLink to="/category/Art">Act to establish a legal framework for information technology This hyperlink will open in a new window.</NavLink>
                    </div>
                </div>

                <RatedPage/>
            </div>
        </div>
    </Wrapper>
  )
}

export default FiveSinglePage;
