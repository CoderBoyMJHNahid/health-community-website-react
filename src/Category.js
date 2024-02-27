import React, {useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

// import pages
import BreadCrumb from './components/BreadCrumb';
import CatServices from './components/CatServices';
import RatedPage from './components/RatedPage';


// import category data
import Catdata from "./data/Category";


const Category = () => {
  const {name} = useParams();
  const [category,setCategory] = useState(Catdata);

  const Wrapper = styled.section`
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
        
  `;

  return (
   <Wrapper>
    <div className="container">
      <BreadCrumb/>
      <div className="row pb-5">
        

        {/* Top Heading of this pages */}
        <div className="pages_top_heading">
          <h1>{name}</h1>
        </div>
        {/* Sub heading after Top Heading */}
        <div className="pages_subtitle">
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>

        {/* show category with links */}
        {
          category.map((elem,index)=>{
            return <CatServices data={elem} id={index}/>
          })
        }

        {/* Rated Pages*/}
        <RatedPage/>

      </div>
    </div>
   </Wrapper>
  )
}

export default Category;
