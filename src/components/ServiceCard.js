import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({data,id}) => {
    const [list,setList] = useState(data.top_link);
  return (
    <>
        <div className="col-lg-4 col-md-6" key={id}>
            <div className="card service_card flex-row">
                <div className="service_icon">
                    <img src={data.icon} alt="Service Icon" />
                </div>
                <div className="service_content">
                    <div className="service_title">
                        <h3><NavLink to={`category/${data.title}`}>{data.title}</NavLink></h3>
                    </div>
                    <div className="service_list">
                            <ul>
                                {
                                    list.map((elem,index)=>{
                                        return <li key={index}><NavLink to={`category/${elem}`}>{elem}</NavLink></li>
                                    })
                                }
                                <li><NavLink to={`category/${data.title}`}>See More</NavLink></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCard;
