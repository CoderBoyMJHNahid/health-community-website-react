import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';

// it's Four single page with Access to information Data
const FourSinglePage = () => {
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
                        
                        <p>The Act respecting Access to documents held by public bodies and the Protection of personal information This hyperlink will open in a new window. grants you the following rights:</p>
                          <ul>
                            <li>respect of the confidentiality of personal information;</li>
                            <li>access to documents held by public bodies and to your personal information;</li>
                            <li>the right to correct your personal information if it is incomplete, inaccurate or equivocal, or if the collection, release or keeping of the information is not authorized by law.</li>
                          </ul>
                        <p><b>Administrative documents</b> of public organizations are usually available on this site. If you are searching for a document that has not been made public, make sure that it has not already been the subject of a request for access before formulating your own request to the public body concerned.</p>
                        <p>To gain access to <b>personal information that concerns you</b>, and that is held by a public body, you must also make a request for access to the organization concerned.</p>
                        <div className="page_content_map">
                        <p>In this page:</p>
                            <ul>
                                <li><NavLink to={`/`}>Preparing a request for access</NavLink></li>
                                <li><NavLink to={`/`}>Submitting a request for access</NavLink></li>
                                <li><NavLink to={`/`}>Processing time periods</NavLink></li>
                                <li><NavLink to={`/`}>Description of icons</NavLink></li>
                                <li><NavLink to={`/`}>Applicable fees</NavLink></li>
                                <li><NavLink to={`/`}>Request denied or time period exceeded</NavLink></li>
                                <li><NavLink to={`/`}>List of government departments</NavLink></li>
                            </ul>
                        </div>
                        
                        <h2 className='mt-5'>Preparing a request for access</h2>
                        <p>A <b>request for access to an administrative document</b> may be made verbally or in writing, and must contain:</p>
                        <ul>
                          <li>the title of the document that you wish to obtain or a brief description that may serve to identify the document;</li>
                          <li>your last name, first name and contact information (email, telephone number and mailing address) so that the organization may communicate with you if clarifications are required.</li>
                        </ul>
                        
                        <p>A <b>request for access to an item of personal information</b> or a <b>request for correction</b> must be made in writing, and must contain:</p>
                          <ul>
                            <li>a description of the item of information that you wish to obtain or that must be corrected</li>
                            <li>the time period involved;</li>
                            <li>an item of personal information that will enable the public body to identify you, or a combination of several pieces of information (for example: your social insurance number or health insurance number, together with the names of your parents);</li>
                            <li>your last name, first name and contact information (email, telephone number and mailing address) so that the organization may communicate with you if clarifications are required.</li>
                          </ul>
                        <p>If you are <b>making a request on behalf of another person</b>, you must provide:</p>
                        <ul>
                          <li>a consent form or proxy;</li>
                          <li>or the mandate signed by that person, if you are a notary or an attorney.</li>
                        </ul>
                        <p>If you wish to <b>gain access to the personal information of a deceased person</b>, your status must be one of the following:</p>
                        <ul>
                          <li>liquidator of the succession (estate): you must provide the will search and the will;</li>
                          <li>beneficiary of life insurance or of a death benefit: you must present a document that proves this status (life insurance policy, mortgage loan, travel insurance, etc.);</li>
                          <li>heir: you must submit a will search, a will or proof of your status (for example a birth certificate or marriage certificate) and demonstrate your interests or rights;</li>
                          <li>person having parental authority: you must demonstrate your title by means of a birth certificate.</li>
                        </ul>
                        <h2 className='mt-5'>Submitting a request for access</h2>
                        <p>You must send your request to the person responsible for access in the public body concerned (see the list of government departments (in French only) to find the contact information for that person).</p>
                        
                        <h2 className='mt-5'>Processing time periods</h2>
                        <p>Processing time periods</p>
                        <h2 className="mt-5">Applicable fees</h2>
                       <p>Consultation of documents and personal information is generally free of charge.</p>
                       <p>Fees may apply for transcription, delivery and reproduction of documents.</p>
                        <h2 className='mt-5'>Request denied or time period exceeded</h2>
                        <p>If your request has been denied in whole or in part, or if you have not received an answer within the prescribed time periods, you have 30 days to request a review by the Commission d’accès à l’information This hyperlink will open in a new window..</p>
                        <p>The Commission is an administrative tribunal that can make a decision ordering the public body to release documents or personal information to you.</p>
                        
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

export default FourSinglePage;
