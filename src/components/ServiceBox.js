import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ServiceBox = () => {
    const Wrapper = styled.section`
        padding:20px 0px;
        background:rgba(218,230,240,0.5);

        .service_icon{
            margin-right: 10px;
        }
        .service_icon img{
            width:40px;
        }
        .service_box{
            border:none;
        }
        .title h3{
            font-size: 19px;
        }
        #card-wrapper--service_box{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 200px;
            text-decoration: none;
            color: #223654;
            background-color: #fff;
            border: 1px solid ${({theme})=> theme.colors.border_color};
            padding: 32px 24px 24px;
            box-shadow: 0px 1px 4px 0px rgb(34 54 84 / 24%);
            height: 100%;
        }
        #card-wrapper--service_box:hover{
            box-shadow: 0px 2px 8px 0px rgb(34 54 84 / 24%);
            border-color: rgba(9,87,151,0.7);
        }
        #service_box_section{
            padding:30px 0px;
        }
    
    `;
  return (
    <Wrapper>
        {/* service box */}
        <div className="container">
            <div className="row" id='service_box_section'>
                    <div className="col-lg-4 col-md-6">
                        <NavLink id='card-wrapper--service_box'>
                            <div className="card service_box">
                                <div className="top_part d-flex mb-2">
                                    <div className="service_icon">
                                        <img src="https://cdn-contenu.quebec.ca/_processed_/8/3/csm_PictosMesures_Bleu_RVB_Coeur_c8151d1caa.jpg" alt="Icon" />
                                    </div>
                                    <div className="title">
                                        <h3>Prevent the transmission of viruses and bacteria</h3>
                                    </div>
                                </div>
                                <div className="bottom_part">
                                    <p>See the programs, measures and services for people with disabilities, their families and their caregivers.</p>
                                </div>
                            </div>     
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <NavLink id='card-wrapper--service_box'>
                            <div className="card service_box">
                                <div className="top_part d-flex mb-2">
                                    <div className="service_icon">
                                        <img src="https://cdn-contenu.quebec.ca/cdn-contenu/Quebec.ca/Icones_des_tuiles_accueil_COVID-19/ico-vaccination.svg" alt="Icon" />
                                    </div>
                                    <div className="title">
                                        <h3>Vaccination against COVID-19</h3>
                                    </div>
                                </div>
                                <div className="bottom_part">
                                    <p>Make an appointment online, find a vaccination clinic, learn about vaccine safety and guidelines for certain groups.</p>
                                </div>
                            </div>     
                        </NavLink>
                    </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default ServiceBox;
