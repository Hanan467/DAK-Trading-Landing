import "./App.css";
import { useRef } from "react";
import Header from "./Hearder";
import Hero from "./Hero";
import About from "./About";
import StaionedImage from "./StationaryImage";
import Cards from "./Cards";
import Service from "./Service";

import imageCard1 from "./assets/images/grains2.png";
import imageCard2 from "./assets/images/_Oa86jjDAKgLGG_RwSpGt-transformed.png";

import image1 from "./assets/images/background-for-section.png";
import image2 from "./assets/images/polina-rytova-1dGMs4hhcVA-unsplash.jpg";

import Contact from "./Contact";
import ContactForm from "./ContactForm";
function App() {
    const imagesForService = [
        imageCard1,
        imageCard1,
        imageCard1,
        imageCard1,
        imageCard1,
    ];

    const HeroRef = useRef(null);
    const AboutRef = useRef(null);
    const ServiceRef = useRef(null);
    const ContactRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="App">
            <Header
                scrollToSection={scrollToSection}
                AboutRef={AboutRef}
                HeroRef={HeroRef}
                ServiceRef={ServiceRef}
                ContactRef={ContactRef}
            />
            <Hero ref={HeroRef} />
            <div className="Golder_Segment"></div>
            <About ref={AboutRef} />
            <StaionedImage image={image1} />
            <Service
                title={"Exported Items"}
                images={imagesForService}
                ref={ServiceRef}
            />
            <StaionedImage image={image2} />
            <Service title={"Imported Items"} images={imagesForService} />

            <Contact ref={ContactRef} />
            <ContactForm />
        </div>
    );
}

export default App;
