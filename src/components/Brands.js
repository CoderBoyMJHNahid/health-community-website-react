import React, { useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Brands logo data
import BrandsData from '../data/BrandsData';

const Brands = () => {

  const [brands,setBrands] = useState(BrandsData);

    const Wrapper = styled.section`
        background:#f5f5f5;
        padding: 70px 0px;

        .sec-title h2{
            font-size: 36px;
            text-transform: Uppercase;
            font-family: "ROBOTO";
            color: #223654;
        }
        .sec-title p::after {
            content: "";
            display: block;
            width: 6rem;
            margin:auto;
            margin-top: 0;
            padding-top: 8px;
            border-bottom: 4px solid #f09686;
            }
        .sec-title p{
            font-size: 18px;
        }
        .slider_card.text-center img {
            width: 150px;
            margin: 15px 0px;
        }
        .slider_card.text-center {
            padding: 10px;
            cursor:pointer;
            }
    `;
        
  return (
    <Wrapper>
        <div className="container">
            <div className="sec-title text-center">
                <h2>Sponsored</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
          brands.map((elem,index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="slider_card text-center">
                          <img src={elem.logo} alt="" />
                        </div>
                    </SwiperSlide>
                );
            })
        }
        
      </Swiper>
        </div>
       
    </Wrapper>
  )
}

export default Brands;
