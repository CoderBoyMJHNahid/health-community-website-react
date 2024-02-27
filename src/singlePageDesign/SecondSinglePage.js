import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';
// import scrives box
import ServiceBox from '../components/ServiceBox';
// import Category services component
import CatServices from '../components/CatServices';

// import category data
import Catdata from "../data/Category";

// it's second single page with covid-19 data
const SecondSinglePage = () => {

    const [category,setCategory] = useState(Catdata);

    const Wrapper = styled.section`
        padding-bottom: 50px;
        
        #page_content{
            padding: 20px 0px;
        }
        .extra_content{
            margin-bottom: 30px;
        }
        .extra_content a:hover{
            text-decoration: none;
        }
        .title_wrapper{
            border-bottom: 1px solid ${({theme})=> theme.colors.border_color};
        }
        .recode_covid_wrapper{
            padding-top: 20px;
            padding-bottom: 50px;
            border-bottom: 1px solid ${({theme})=> theme.colors.border_color};
        }
        .recode_covid h6,h5,p{
            margin:1px
        }
        .tags{
            list-style:none;
            margin:0;
            padding:0
        }
        .tags li{
            display: inline-block;
            margin: 0 8px 8px 0;
        }
        .tags li a {
            color: #095797;
            background-color: #dae6f0;
            border: 1px solid #dae6f0;
            font-weight: 600;
            text-decoration: none;
            padding: 11px 8px;
            font-size: 0.875rem;
            line-height: 1rem;
            transition: border-color 0.25s linear;
            display: inline-block;
        }
        .tags li a:hover {
            border: 1px solid #6991d1;
            transition: border-color 0.25s linear;
        }
        .to_know_wrapper{
            padding: 80px 0px;
        }
        .category_links ul {
        padding: 0;
        list-style: none;
        margin-top:10px;
      }
      .category_links ul li{
        padding:5px 0px;
      }
      .category_links ul li a{
            font-size: 15px;
            line-height: 1.25rem;
            text-decoration: none;
            color: #095797
        }
        .category_links ul li a:hover{
            text-decoration: underline;
            cursor:pointer;
        }
        .category_links ul li.offer_links a{
            font-size: 18px;
            line-height: 1.25rem;
            text-decoration: none;
            font-weight:600;
            color: #095797
        }
        .category_links ul li.offer_links a:hover{
            text-decoration: underline;
            cursor:pointer;
        }
        .category_wrapper{
            padding-bottom: 30px;
            border-bottom: 1px solid ${({theme})=> theme.colors.border_color};
        }
        .notice_wrapper{
            padding-top:10px;
        }
        .notice_board{
            margin-top: 1rem;
            background-color: #f2f1f1;
            margin-bottom: 3rem;
            color: #223654;
            border: none;
            border-radius: 0;
            padding: 30px 40px
        }
    `;
  return (
    <Wrapper>
        <div className="container">
            <BreadCrumb />
            {/* Top Heading of this pages */}
            <div className="pages_top_heading">
                <h1>Coronavirus disease (COVID-19)</h1>
            </div>
            {/* Sub heading after Top Heading */}
            <div className="pages_subtitle">
                <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
        </div>
        <ServiceBox/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div id="page_content">
                        {/* small date wrapper */}
                        <div className="title_wrapper">
                            <h6>Situation in Quebec</h6>
                            <p>as of January 24, 2023, 11 a.m.</p>
                        </div>

                        {/* covid-19 data showing wrapper */}
                        <div className="recode_covid_wrapper row">
                            <div className="col-lg-4 col-md-6">
                                <div className="recode_covid">
                                    <h5>Total confirmed cases</h5>
                                    <h2>1,299,587</h2>
                                    <p>(+536)</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="recode_covid">
                                    <h5>Total hospitalizations</h5>
                                    <h2>1,711</h2>
                                    <p>(-47)</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="recode_covid">
                                    <h5>Total deaths</h5>
                                    <h2>17,885</h2>
                                    <p>(+20)</p>
                                </div>
                            </div>
                        </div>

                        {/* to know wrapper */}
                        <div className="to_know_wrapper">
                            <h6>To Know</h6>
                            <ul className="tags">
                                <li><NavLink to={`/`}>Using rapid tests</NavLink></li>
                                <li><NavLink to={`/`}>COVID-19 self-care guide</NavLink></li>
                            </ul>
                        </div>
                        
                        {/* category wrapper */}
                        <div className="category_wrapper row">
                            {/* show category with links */}
                            {
                            category.map((elem,index)=>{
                                return <CatServices data={elem} id={index}/>
                            })
                            }
                        </div>
                        
                        {/* notice wrapper */}
                        <div className="notice_wrapper">
                            <p>Last update: January 20, 2023</p>
                            <div className="notice_board">
                                <h2>Notice</h2>
                                <p>The information contained on the site in no way replaces the advice of a professional health resource. If you have questions about your state of health, consult a professional resource.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <RatedPage/>
            </div>
        </div>
    </Wrapper>
  )
}

export default SecondSinglePage;
