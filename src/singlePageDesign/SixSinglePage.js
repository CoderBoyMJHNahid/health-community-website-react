import React,{useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';
// import category service component
import CatServices from '../components/CatServices';


// import category data
import Catdata from "../data/Category";



// it's Six single page with SitMap Data

const SixSinglePage = () => {
    const {name} = useParams();
    const [category,setCategory] = useState(Catdata);

    const Wrapper = styled.section`
        padding-bottom: 50px;
       .pages_sub_links ul{
        list-style:none;
        padding:0;
       }
       .page_header_content_wrapper ul{
        list-style:none;
        padding:0;
       }
       .page_header_content_wrapper ul li{
        padding: 5px 0px;
       }
       .page_header_content_wrapper ul li a{
        color: ${({theme})=> theme.colors.primary};
        text-decoration: none;
        font-size: 16px;
       }
       .pages_sub_links ul li{
        padding: 5px 0px;
       }
       .pages_sub_links ul li a{
        color: ${({theme})=> theme.colors.primary};
        text-decoration: none;
        font-size: 16px;
       }
       .page_content_header{
        border-bottom: 1px solid black;
        width: 70%;
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
        .page_header_content_wrapper h2::after {
            content: "";
            display: block;
            width: 3rem;
            margin-top: 0;
            padding-top: 8px;
            border-bottom: 4px solid ${({theme})=> theme.colors.primary};
        }
    `;
  return (
    <Wrapper>
      <div className="container">
            <div className="row">
                <BreadCrumb />
                <div className="col-12">
                    {/* Top Heading of this pages */}
                    <div className="pages_top_heading">
                        <h1>{name}</h1>
                    </div>
                    {/* Sub heading after Top Heading */}
                    <div className="pages_sub_links">
                        <ul>
                            <li><NavLink to={`/`}>Home</NavLink></li>
                            <li><NavLink to={`/`}>Government</NavLink></li>
                            <li><NavLink to={`/`}>News</NavLink></li>
                            <li><NavLink to={`/`}>Premier of Québec</NavLink></li>
                            <li><NavLink to={`/`}>How to reach us</NavLink></li>
                        </ul>
                    </div>
                    <div id="page_content">
                        {/* in Page simple header */}
                        <div className="page_content_header">
                            <h1>Information and services</h1>
                        </div>
                        {/* menu and category content in slider */}
                        <div className="row my-5">
                            {/* first time */}
                            <div className="col-lg-4">
                                <div className="pages_top_heading">
                                    <h3>Agriculture, environment and natural resources</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* show category with links */}
                                    {
                                    category.map((elem,index)=>{
                                        return <CatServices data={elem} id={index}/>
                                    })
                                    }
                                </div>
                            </div>
                            
                            {/* second time */}
                            <div className="col-lg-4">
                                <div className="pages_top_heading">
                                    <h3>Education</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* show category with links */}
                                    {
                                    category.map((elem,index)=>{
                                        return <CatServices data={elem} id={index}/>
                                    })
                                    }
                                </div>
                            </div>
                        
                        {/* Third Time  */}
                            <div className="col-lg-4">
                                <div className="pages_top_heading">
                                    <h3>Finance, income and other taxes</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* show category with links */}
                                    {
                                    category.map((elem,index)=>{
                                        return <CatServices data={elem} id={index}/>
                                    })
                                    }
                                </div>
                            </div>
                        {/* Four Time */}
                            <div className="col-lg-4">
                                <div className="pages_top_heading">
                                    <h3>Immigration</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* show category with links */}
                                    {
                                    category.map((elem,index)=>{
                                        return <CatServices data={elem} id={index}/>
                                    })
                                    }
                                </div>
                            </div>
                            {/* Five Time */}
                            <div className="col-lg-4">
                                <div className="pages_top_heading">
                                    <h3>Health</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* show category with links */}
                                    {
                                    category.map((elem,index)=>{
                                        return <CatServices data={elem} id={index}/>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* in Page simple header with small content */}
                        <div className="page_header_content_wrapper my-5">
                            <div className="page_content_header">
                                <h1>Government</h1>
                            </div>
                            <h2 className='mt-3'>Government</h2>
                        </div>

                        {/* in Page simple header with small content */}
                        <div className="page_header_content_wrapper my-5">
                            <div className="page_content_header">
                                <h1>Policies and use</h1>
                            </div>
                            <ul>
                                <li><NavLink to={`/single3/Accessibility`}>Accessibility</NavLink></li>
                                <li><NavLink to={`/single4/Access to information`}>Access to information</NavLink></li>
                                <li><NavLink to={`/single5/Privacy policy`}>Privacy policy</NavLink></li>
                            </ul>
                        </div>

                    </div>
                    
                </div>

                <RatedPage/>
            </div>
        </div>
    </Wrapper>
  )
}

export default SixSinglePage;
