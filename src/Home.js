import React,{ useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import all icons
import SearchIcon from '@mui/icons-material/Search';

// import pages
import ServiceCard from './components/ServiceCard';
import Brands from './components/Brands';

// import data
import Tags from './data/Tags';
import Services from './data/Services';
import Testimonial from './components/Testimonial';

const Home = () => {

    const Wrapper = styled.section`
        margin-top:70px;

        .pages_top_heading{
            font-size : 48px;
            font-family: Roboto;
            color:#223654;
            font-weight: 600;
            line-height: 2.7rem;
        }
        .pages_top_heading h1::after {
            content: "";
            display: block;
            width: 3rem;
            margin-top: 0;
            padding-top: 8px;
            border-bottom: 4px solid #f09686;
        }
        .pages_subtitle{
            margin:24px 0px;
            font-size: 1.25rem;
            line-height: 1.875rem;
        }
        #search_btn{
            border:none;
            width:40px;
            height:40px;
            background: ${({theme})=> theme.colors.primary};
            color:white;
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
        .tags_most_views_wrapper{
            border-bottom: 1px solid ${({theme})=> theme.colors.border_color};
        }
        .service_card{
            border:none;
            margin:30px 0px;
            padding:0px 15px;
        }
        .service_icon{
            width: 40px;
            height: 40px;
            margin-right: 16px;
        }
        .service_title h3 a{
            color:#223654;
            font-size: 20px;
            line-height: 1.625rem;
            font-weight: 700;
            font-family: "Open Sans",sans-serif;
            margin-top: 0;
            padding: 0;
            text-decoration: none;
        }
        .service_title h3 a:hover{
            text-decoration: underline;
            cursor:pointer;
        }
        .service_list ul{
            padding:0;
            list-style:none;
        }
        .service_list ul li a{
            font-size: 15px;
            line-height: 1.25rem;
            text-decoration: none;
            color: #095797
        }
        .service_list ul li a:hover{
            text-decoration: underline;
            cursor:pointer;
        }
        .service_box .title h3{
            color:#223654;
            font-size: 20px;
            line-height: 1.625rem;
            font-weight: 700;
            font-family: "Open Sans",sans-serif;
            margin-top: 0;
            padding: 0;
            text-decoration:none;
        }
        #show_more_items{
            list-style:none;
            padding:0;
            margin:0;
            padding-bottom:20px;
            border-bottom: 1px solid ${({theme})=> theme.colors.border_color};
        }
        #show_more_items li a{
            color: ${({theme})=> theme.colors.primary};
            font-size: 18px;
            font-weight:700;
            text-decoration:none;
        }
        .an_show_more_link a{
            color:#095797;
            text-decoration:none;

        }
        .an_show_more_link a::after{
            content: "";
            display: inline-block;
            width: 8px;
            height: 9px;
            background-image: url("images/arrow-icon.svg");
            margin-left: 4px;
        }
    `;
    
    const [tag,setTag] = useState(Tags);
    const [service,setService] = useState(Services);

  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                {/* Top Heading of this pages */}
                <div className="pages_top_heading">
                    <h1>Colombia Health Community Profiles</h1>
                </div>
                {/* Sub heading after Top Heading */}
                <div className="pages_subtitle">
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                {/* search input and button */}
                <div className="search_wrapper col-lg-7 d-flex">
                    <input type="text" name='search' className='form-control' placeholder='Search here'/>
                    <button type='button' id='search_btn'><SearchIcon/></button>
                </div>
                <NavLink to={`/search`}>Search And Table</NavLink>

                {/* tags which users are Most Viewed */}
                <div className="tags_most_views_wrapper mt-5 pb-4">
                    <p>Most Viewed</p>
                    <ul className="tags">
                    {/* show all tags by loops */}
                     {
                        tag.map((elem,index)=>{
                            return <li key={index}><NavLink to={`/single/${elem.category}/${elem.tags_name}`}>{elem.tags_name}</NavLink></li>
                        })

                    }
                    </ul>
                </div>
            </div>

            {/* service of category */}
            <div className="row">
            {
                service.map((elem,index)=>{
                    return <ServiceCard data={elem} id={index}/>
                })
            }

            </div>
        </div>
        {/* testimonial */}
            <Testimonial/>
        {/* top brand */}
            <Brands/>
    </Wrapper>
  )
}

export default Home;
