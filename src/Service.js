import Cards from "./Cards";

import imageCard1 from './assets/images/grains2.png'


function Service(){
    return(
        <div className="Service_Container">
            <div className="Content_Holder">
                <div className="listofServices">
                    <div className="export_services">
                        <div className='container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                        </div>
                        <div className='container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                        </div>
                        <div className='container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                        </div>
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