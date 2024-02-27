import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import icons
import HelpIcon from '@mui/icons-material/Help';



const RatedPage = () => {
    const [show,setShow] = useState("none");

    const style_display ={
        display: show
    }

    const Wrapper = styled.section`
        .date_show p{
            font-size:13px;
        }
        .page_title{
            background: ${({theme})=> theme.colors.primary};
            padding: 10px 30px;
            color:white;
        }
        .option_title{
            font-size: 18px;
            margin-top: 10px;
            font-weight: 600;
        }
        .options_rated_page form input{
            margin: 0px 8px;
            cursor:pointer;
        }
        .options_rated_page form textarea{
            padding: 10px 20px;
            width:100%;
        }
        #submit_btn{
            background: ${({theme})=> theme.colors.primary};
            padding: 12px 96px;
            border:none;
            color: white;
            font-size: 18px;
            font-weight:700;
            margin:20px 0px;
        }
        .banner_card{
            background:rgba(9,87,151,0.15);
            border:none;
            border-radius: 0px;
            padding: 30px;
        }
        .banner_card .top_part{
            display: flex;
        }
        .top_part .icon svg{
            font-size: 40px;
            margin-right: 20px;
        }
        .banner_card a{
            color: ${({theme})=> theme.colors.primary};
            margin-top: 20px;
        }
        .banner_card a:hover{
            text-decoration: none;
        }
    `;  
  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                <div className="date_show">
                    <p>Last update: June 1 , 2022</p>
                </div>
                <div className="page_title">
                    <h4>Page Rating</h4>
                </div>
                <div className="options_rated_page">
                    <p className='option_title'>Was the information on this page helpful to you?</p>
                    <form action='#'>
                        <input type="radio" name="helpful" onClick={()=> setShow('block')}/>
                        <label >Yes</label>
                        <input type="radio" name="helpful" onClick={()=> setShow('block')}/>
                        <label >No</label>

                        <div className="textarea_wrapper" style={style_display}>
                        <div className="row">
                        <div className="col-lg-8">
                            <p style={{fontWeight:"600",fontSize:"18px",marginTop:"5px",marginBottom:0}}>Do you have a comment to send us or a problem to report?</p>
                            <p>Avoid entering personal information. Note that you will not receive any response.</p>
                            <textarea name="desc" cols="90" rows="6" placeholder='Write with 500 characters'></textarea>
                            <p className='text-end'>Max 500 characters</p>
                            <input type="submit" value="Submit" id='submit_btn'/>
                        </div>
                        <div className="col-lg-4">
                            <div className="card banner_card">
                                <div className="top_part">
                                    <div className="icon">
                                        <HelpIcon/>
                                    </div>
                                    <h4>Questions or need information?</h4>
                                </div>
                                <NavLink to='/'>Contact Services Quebec</NavLink>
                            </div>
                        </div>
                    </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default RatedPage;
