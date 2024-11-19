import './top_body.css';
import shoes from './shoes.png'
import { Link } from 'react-router-dom';
import React from 'react';
import females from './females.png'
import males from './males.png'
import { useState, useEffect } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Product from './product';
export function TopBody(){
    const [malesIndex, setMalesIndex] = useState(1);
    const [femalesIndex, setFemalesIndex] = useState(0);
    function toggleMalesIndex(){
        setMalesIndex(malesIndex + 1);
        if (femalesIndex === 1){
            setFemalesIndex(0);
        }
    }
    function toggleFemalesIndex(){
        setFemalesIndex(femalesIndex + 1);
        if (malesIndex === 1){
            setMalesIndex(0);
        }
    }
    return (
        
        <div className='top-body'>

            <div className='males-container display-flex flex-column'>
                <div className='males-text position-relative'>
                    <KeyboardArrowLeftIcon onClick={toggleMalesIndex} className='males-text-icon-left position-absolute top-50 text-black z-index-2'/>
                    <div className="contain">
                        { malesIndex ?
                        <img src={males} alt="males" className='males w-100'/>
                        :
                        <img src={females} alt="females" className='males w-100'/>
                        }
                        <div className=' custom-right-overlay translate-middle d-flex flex-column justify-content-center align-items-center'>
                            <p className='males-text-p fw-bold'>----Stylish----</p>
                            { malesIndex ?
                            <h4 className='males-text-h1 '>Males Clothes</h4>
                            :
                            <h4 className='males-text-h1 '>Females Clothes</h4>
                            }
                            <p className='males-text-p disabled '>30% off summer vacation</p>
                            <button className='text-button btn btn-outline-n w-100'>Shop Now</button>
                        </div>
                    </div>
                    <KeyboardArrowRightIcon onClick={toggleFemalesIndex} className='males-text-icon-right position-absolute top-50 text-black z-index-2'/>

                </div>
            </div>
        </div>
    );
}

export function TopMiddle() {
    return (
        <div className="top-middle container text-center my-5">
            <div className="row d-flex justify-content-center align-items-center mb-4">
                <div className="col-xs-8 col-md-2 d-flex flex-column align-items-center">
                    <LocalShippingIcon fontSize="large" className="mb-3" />
                    <h5>Free Shipping</h5>
                    <p className="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed</p>
                </div>
                
                <div className="col-xs-8 col-md-2 d-flex flex-column align-items-center">
                    <HeadsetMicIcon fontSize="large" className="mb-3" />
                    <h5>Support 24/7</h5>
                    <p className="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed</p>
                </div>
                
                <div className="col-xs-8 col-md-2 d-flex flex-column align-items-center">
                    <AttachMoneyIcon fontSize="large" className="mb-3" />
                    <h5>Money Return</h5>
                    <p className="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit sed</p>
                </div>
            </div>
            
            <div className="text-center mt-5">
                <h2 className="fw-bold">New Arrival</h2>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

function TopBodyAll(){
    return(
        <div className='top-body-all'>
            <TopBody/>
            <TopMiddle/>
            <Product/>
        </div>
    )
}
export default TopBodyAll