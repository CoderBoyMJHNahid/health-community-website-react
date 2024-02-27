import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const HeaderInfo = () => {

    const Wrapper = styled.div`
        padding: 24px 0px;
        background: ${({theme})=> theme.colors.second_primary};
        .inner_icon{
            background-image: url("images/menu_icon.svg");
            width: 24px;
            height: 24px;
            background-size: 24px;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 24px;
        }
        a{
            color:${({theme})=> theme.colors.primary};
            font-weight:600;
            font-size:16px
        }
        a:hover{
            text-decoration:none;
        }
    `;

  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                <div className="bottom_info d-flex">
                    <div className="inner_icon"></div>
                    <div className="inform_info">
                        <NavLink to='/single2/health/Covid-19'>View all information on COVID-19 .</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default HeaderInfo;
