import Cards from './Cards';

import imageCard1 from './assets/images/sesameseed.jpg'


function About(){
    return(
        <div className="About_Container">
            <div className="About_Header_Container container-fluid">
                <div className="Content_Holder container-fluid" >
                    <h1>About DAK Trading PLC</h1>
                    <h5>Something about DAK</h5>
                </div>
            </div>
            <div className="About_Body_Container">
                <div className="Content_Holder">
                    <div className='leftContent'>
                        <h3>The Content on left</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            recusandae. Ex, molestiae qui. Eius, voluptates debitis atque totam optio modi fuga et inventore vel 
                            obcaecati veniam ipsam quaerat velit accusantium.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil asperiores minus harum, 
                            quos expedita nesciunt tempora. Quam voluptas maiores quas minima fugit at 
                            consequuntur et aliquam, ut necessitatibus? Reprehenderit!
                        </p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className='rightContent'>
                    <h3>The Content on Right</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            recusandae. Ex, molestiae qui. Eius, voluptates debitis atque totam optio modi fuga et inventore vel 
                            obcaecati veniam ipsam quaerat velit accusantium.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil asperiores minus harum, 
                            quos expedita nesciunt tempora. Quam voluptas maiores quas minima fugit at 
                            consequuntur et aliquam, ut necessitatibus? Reprehenderit!
                        </p>
                    </div>
                    <div className='container-fluid'>
{/* 
                    <Cards cardTitle={"The Card Test"} 
              cardSmallDescription={"a bit of something about the product in talk"} 
                cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                  image={imageCard1}/> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;