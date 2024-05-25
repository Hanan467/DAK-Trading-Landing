import React from 'react';
import imageCard1 from './assets/images/sesameseed.jpg'; 
import aboutImage from './assets/images/grainVertical.jpg'; 
import './App.css'

const About = () => {
  return (
    <div className="About_Container">

      <section className="About_Body_Container">
        <div className="Content_Holder row">
          <div className="leftContent col-sm-12">

            <header className="About_Header_Container container-fluid col-sm-12">
                <div className="Content_Holder container">
                    <h1>About DAK </h1>
                </div>
            </header>
            <div className='left_content_holder'>
                <div className='left_content_paragraph '>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae. Ex, molestiae qui. Eius,
                    voluptates debitis atque totam optio modi fuga et inventore vel obcaecati veniam ipsam quaerat velit
                    accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil asperiores minus
                    harum, quos expedita nesciunt tempora. Quam voluptas maiores quas minima fugit at consequuntur et
                    aliquam, ut necess itatibus? Reprehenderit!
                    </p>
                </div>
                <div className='left_content_paragraph_image_holder'>
                    <img src={imageCard1}></img>
                </div>
                <div className='left_content_paragraph '>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae. Ex, molestiae qui. Eius,
                    voluptates debitis atque totam optio modi fuga et inventore vel obcaecati veniam ipsam quaerat velit.
                    </p>
                </div>
            </div>
          </div>
          <div className="vertical-line1"></div>
          <div className="vertical-line2"></div>
          <div className="vertical-line3"></div>

          <div className="rightContent">
            <img src={aboutImage} alt="About DAK Trading PLC" /> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
