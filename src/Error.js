import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import all icons
import SearchIcon from '@mui/icons-material/Search';

const Error = () => {
  const Wrapper = styled.section`
    #search_btn{
            border:none;
            width:40px;
            height:40px;
            background: ${({theme})=> theme.colors.primary};
            color:white;
        }
    #page_content ul li{
      padding: 5px 0px;
    }
  `;
  return (
    <Wrapper>
        <div className="container">
          <div className="row my-5">
            {/* Top Heading of this pages */}
              <div className="pages_top_heading">
                  <h1>Unable to find the page</h1>
              </div>
              <div id="page_content" className='mt-4'>
                  <p><b>What you can do</b></p>
                  <ul>
                    <li>Return to the <NavLink to={`/`}>homepage</NavLink>.</li>
                    <li>Consult the <NavLink to={`/single6/Sitemap`}>site map</NavLink> .</li>
                    <li>Do a new search
                      {/* search input and button */}
                      <div className="search_wrapper col-lg-7 d-flex">
                          <input type="text" name='search' className='form-control' placeholder='Search here'/>
                          <button type='button' id='search_btn'><SearchIcon/></button>
                      </div>
                    </li>
                  </ul>
              </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Error;
