import React from 'react';
import { NavLink} from 'react-router-dom';

const CatServices = ({data,id}) => {
  return (
    <>
        <div className="col-lg-4 col-md-6 py-2" key={id}>
            <div className="category_title">
              <h4>{data.name}</h4>
            </div>
            <div className="category_desc">{data.description}</div>
            <div className="category_links">
              <ul>
                {
                    data.more_links.length == "" ? null 
                    : data.more_links.map((elem,index)=>{
                        return <li key={index} className='offer_links'><NavLink to={`/single/${data.name}/${elem}`}>{elem}</NavLink></li>
                    })
                }
                
                <li><NavLink to={`/category/${data.name}/`}>See more</NavLink></li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default CatServices;
