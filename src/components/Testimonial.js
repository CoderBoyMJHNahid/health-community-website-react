import React, { useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import testimonial data
import TesData from '../data/TesData';

const Testimonial = () => {
    const [testi,setTesti] = useState(TesData);
    
    const breakpoints={
        
        0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        };

    const Wrapper = styled.section`

        padding: 50px 0px;

        .sec-title {
            border-top: 1px solid ${({theme})=> theme.colors.border_color};
            padding-top: 70px;
        }
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
        .img_wrapper img {
            width: 80px;
            border-radius: 50%;
            margin: 15px 0px;
        }

        .slider_card.text-center {
            border-radius: 30px;
            padding: 10px 40px;
            cursor:pointer;
        }
        .author p{
            color: black;
            font-style: italic;
        }
    `;

  return (
    <Wrapper>
        <div className="container">
            <div className="sec-title text-center">
                <h2>Testimonials</h2>
                <p>What Client Say About Us?</p>
            </div>

        <Swiper
        slidesPerView={2}
        breakpoints={breakpoints}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
            testi.map((elem,index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="slider_card text-center">
                            <div className="img_wrapper">
                                <img src={elem.image} alt="" />
                            </div>
                            <div className="desc_wrapper">
                                <p>{elem.desc}</p>
                            </div>
                            <div className="author">
                                <p>{elem.author}</p>
                            </div>
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

export default Testimonial;
