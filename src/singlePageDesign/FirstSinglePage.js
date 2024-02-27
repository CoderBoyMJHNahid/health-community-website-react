import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import breadcrumb 
import BreadCrumb from '../components/BreadCrumb';
// rated comments
import RatedPage from '../components/RatedPage';


// it's first single page with simple data
const FirstSinglePage = () => {

    const {title} = useParams();

    const Wrapper = styled.section`
        padding-bottom: 50px;
        
        #page_content{
            padding-bottom: 100px;
            border-bottom: 2px solid black;
        }
        .extra_content{
            margin-bottom: 30px;
        }
        .extra_content a:hover{
            text-decoration: none;
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
                        <h1>{title}</h1>
                    </div>
                    {/* Sub heading after Top Heading */}
                    <div className="pages_subtitle">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div id="page_content">
                        <p>Urban agriculture stems from citizens' growing demand for locally produced food and local agriculture.</p>
                        <p>This type of agriculture, which is increasingly popular, can be communal, commercial or private.</p>
                        <h2 className='mt-5'>Benefits</h2>
                        <p>Urban agriculture has many advantages due to its privileged location in cities. Here are the main ones:</p>
                        <ul>
                            <li>Urban beautification: transformation of unsightly spaces into green and horticultural spaces.</li>
                            <li>Environmental protection: reduction of heat islands, absorption of rainwater, maintenance of a certain biodiversity and recycling of organic matter through composting.</li>
                            <li>Food autonomy: preparation of food by city dwellers for personal consumption.</li>
                            <li>The establishment and development of new social relationships through an inexpensive and productive activity.</li>
                            <li>Raising public awareness of the realities of agricultural activities and discovering the particularities of food.</li>
                           
                        </ul>
                        <p>The various urban agriculture initiatives also promote biodiversity in the city . For example :</p>
                        <ul>
                            <li>Market gardens provide a feeding and dwelling place for pollinating insects.</li>
                            <li>The development of green spaces on the roofs provides a greater number of places gathering a variety of plants.</li>
                        </ul>
                        <h2 className='mt-5'>Peri-urban agriculture</h2>
                        <p>On the outskirts of cities, peri-urban agriculture benefits from a large nearby market, in addition to access to high-quality agricultural land.</p>
                        <p>It also has these benefits: </p>
                        <ul>
                            <li>Maintaining and enhancing agricultural landscapes and cultural heritage.</li>
                            <li>Enhancement of biodiversity near cities.</li>
                            <li>Reduction of greenhouse gas emissions and soil erosion.</li>
                            <li>Supply of towns with fresh products from the immediate surroundings.</li>
                            <li>Reduction of transport costs and time.</li>
                        </ul>
                        <h2 className='mt-5'>Important role of municipalities</h2>
                        <p>Municipalities play an important role in the development of urban agriculture. The  Guide to good practices on territorial planning and sustainableThis link will open in a new window. development proposes various measures and concrete actions to promote agriculture close to citizens. These measures and actions are grouped according to the following interventions:</p>
                        <ul>
                            <li>​Supporting culture in urban settings.</li>
                            <li>Encourage urban agriculture networks.</li>
                            <li>Support livestock farming in the city.</li>
                            <li>Promote the distribution of food from urban agriculture.</li>
                        </ul>
                        <h2 className='mt-5'>Support for the development of a development plan for a nurturing community</h2>
                        <p>A call for projects for the production of development plans for nurturingThis link will open in a new window. communities  is underway until September 16, 2022. It is aimed at municipalities, boroughs and Indigenous communities.</p>



                    </div>
                    <div className="extra_content">
                        <h2 className='mt-5'>See also</h2>
                        <NavLink to="/category/agriculture">Resources in urban agriculture</NavLink>
                    </div>
                </div>
                <div className="col-lg-4"></div>

                <RatedPage/>
            </div>
        </div>
    </Wrapper>
  )
}

export default FirstSinglePage;
