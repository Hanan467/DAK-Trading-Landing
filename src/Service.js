import Cards from "./Cards";

import imageCard1 from './assets/images/grains2.png'


function Service(){
    return(
        <div class="Service_Container">
            <h1>Services</h1>
            <div class="Content_Holder">
                <div class="export_services row justify-content-center">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"A bit of something about the product in talk"} 
                            cardDescription={"Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"}
                            image={imageCard1} />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"A bit of something about the product in talk"} 
                            cardDescription={"Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"A bit of something about the product in talk"} 
                            cardDescription={"Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards cardTitle={"The Card Test"}
                            cardSmallDescription={"A bit of something about the product in talk"}
                            cardDescription={"Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards cardTitle={"The Card Test"}
                            cardSmallDescription={"A bit of something about the product in talk"}
                            cardDescription={"Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Service; 


<div className='container-fluid'>

<Cards cardTitle={"The Card Test"} 
cardSmallDescription={"a bit of something about the product in talk"} 
cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
image={imageCard1}/>
</div>