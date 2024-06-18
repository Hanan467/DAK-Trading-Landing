import React from "react";
import Cards from "./Cards";

function Service({ title, images }) {
    return (
        <div class="Service_Container">
            <h1>Services</h1>
            <h2>{title}</h2>
            <div class="Content_Holder">
                <div class="export_services row justify-content-center">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"The Card Test"}
                            cardSmallDescription={
                                "A bit of something about the product in talk"
                            }
                            cardDescription={
                                "Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"
                            }
                            image={images[0]}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"The Card Test"}
                            cardSmallDescription={
                                "A bit of something about the product in talk"
                            }
                            cardDescription={
                                "Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"
                            }
                            image={images[1]}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"The Card Test"}
                            cardSmallDescription={
                                "A bit of something about the product in talk"
                            }
                            cardDescription={
                                "Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"
                            }
                            image={images[2]}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"The Card Test"}
                            cardSmallDescription={
                                "A bit of something about the product in talk"
                            }
                            cardDescription={
                                "Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"
                            }
                            image={images[3]}
                        />
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Cards
                            cardTitle={"The Card Test"}
                            cardSmallDescription={
                                "A bit of something about the product in talk"
                            }
                            cardDescription={
                                "Writing a half Lorem ipsum just to depict the long description needed for this component to function properly"
                            }
                            image={images[3]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;

{
    /* <div className="container-fluid">
    <Cards
        cardTitle={"The Card Test"}
        cardSmallDescription={"a bit of something about the product in talk"}
        cardDescription={
            "writing a half lorem jus tto dipict the long description needed for this component to function properly"
        }
        image={images[1]}
    />
</div>; */
}
