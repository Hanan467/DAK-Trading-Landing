import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './Slider'
import Header from './Hearder'



import image1 from './assets/images/tyre2.png';
import image2 from './assets/images/_Oa86jjDAKgLGG_RwSpGt-transformed.png';
import image3 from './assets/images/industrialChemicals1.png'; 

export default function Hero() {
    
    const images = [image1, image2, image3];
    const WelcomStyleSpan1 = {
        color:"#131E2A"
    };
    const WelcomStyleSpan2 ={
        color:"#7f5523"
    }; 

    return (
        <div className='Hero_Container'> 
            <div className='Content_Holder'>
                <div className='Welcome_Content'>
                    <h1><span style={WelcomStyleSpan1}>WELCOME TO </span><span style={WelcomStyleSpan2}>DAK TRADING PLC </span></h1>
                    <div className='text_container'>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Deleniti repudiandae provident consequatur sapiente culpa 
                            nemo illo autem ipsum non veniam cupiditate ullam ex soluta quas optio, quidem quis iure obcaecati?
                        </p>
                    </div>
                    <button>Learn more</button>
                </div>
                <div className='Image_Container'>
                    <Slider images={images}/>
                    <div className='Bottom_Image'>
                        <div>
                            <h2>SOMETHING ABOUT DAK</h2>
                            <h3>Will talk about something about dak trading and some more adding more more and more</h3>
                        </div>
                        <div>
                            <button>More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}