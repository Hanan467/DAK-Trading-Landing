import Cards from "./Cards";

import imageCard1 from './assets/images/grains2.png'


function Service(){
    return(
        <div className="Service_Container">
            <div className=" row Content_Holder">
                <h1 className="">Services</h1> 
                <div className="row listofServices">
                    <div className="row export_services">
                        <div className='col-lg-4  container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1} />
                        </div>
                        <div className='col-lg-4 container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                        </div>
                        <div className='col-lg-4 container-fluid'>
                            <Cards cardTitle={"The Card Test"} 
                            cardSmallDescription={"a bit of something about the product in talk"} 
                            cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                            image={imageCard1}/>
                        </div>
                        <div class="row  mt-5" style={{marginLeft:'100px', marginTop:'80px'}}>
                            <div className='col-lg-4  container-fluid'>
                                <Cards cardTitle={"The Card Test"}
                                cardSmallDescription={"a bit of something about the product in talk"}
                                cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                                image={imageCard1}/>
                            </div>
                            <div className='col-lg-4  container-fluid'>
                                <Cards cardTitle={"The Card Test"}
                                cardSmallDescription={"a bit of something about the product in talk"}
                                cardDescription={"writing a half lorem jus tto dipict the long description needed for this component to function properly"}
                                image={imageCard1}/>
                            </div>
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