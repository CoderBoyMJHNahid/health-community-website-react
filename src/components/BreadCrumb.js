import React from 'react';
import { NavLink,useParams } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumb = () => {
    const {name,title} = useParams();
    const Wrapper = styled.div`
        padding: 20px 10px;
        .breadcrumb-item a{
            color: #223654;
            font-weight: 300;
            text-decoration: none;
            font-size : 14px;
        }
        .breadcrumb-item.active{
            color:black;
        }

    `;
  return (
    <Wrapper>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                <li className="breadcrumb-item active">
                {
                    title == null ? name : <NavLink to={`/category/${name}`}>{name}</NavLink>
                }
                </li>
                <li className="breadcrumb-item active">{title}</li>
               
            </ol>
        </nav>
    </Wrapper>
  )
}

export default BreadCrumb;
