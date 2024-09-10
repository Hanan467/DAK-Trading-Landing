import "./style/App.css";
import { useRef } from "react";
import Header from "./components/Hearder";
import Hero from "./section/Hero";
import About from "./section/About";
import StaionedImage from "./components/StationaryImage";
import Service from "./section/Service";
import ServiceExport from "./section/ServiceExport";

import imageCardImport1 from "./assets/images/Products/sesame-seeds.jpeg";
import imageCardImport3 from "./assets/images/Products/nigerSeed.png";
import imageCardImport2 from "./assets/images/Products/SoyaBean-transformed.jpeg";
import imageCardImport4 from "./assets/images/Products/WhiteSpeckledBeans.jpg";
import imageCardImport5 from "./assets/images/Products/GreenMungBeans.jpeg";

import imageCardExport1 from "./assets/images/Products/tyer.png";
import imageCardExport3 from "./assets/images/Products/chemicals.png";
import imageCardExport2 from "./assets/images/Products/truck.png";
import imageCardExport4 from "./assets/images/Products/pePlastic.webp";
import imageCardExport5 from "./assets/images/Products/ceramic.png";

import image1 from "./assets/images/background-for-section.png";
import image2 from "./assets/images/polina-rytova-1dGMs4hhcVA-unsplash.jpg";

import Contact from "./section/Contact";
import ContactForm from "./section/ContactForm";
function App() {
    const imagesForServiceImported = [
        imageCardImport1,
        imageCardImport2,
        imageCardImport3,
        imageCardImport4,
        imageCardImport5,
    ];
    const imagesForServiceExported = [
        imageCardExport1,
        imageCardExport2,
        imageCardExport3,
        imageCardExport4,
        imageCardExport5,
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
            <Hero
                ref={HeroRef}
                scrollToSection={scrollToSection}
                AboutRef={AboutRef}
                ServiceRef={ServiceRef}
            />
            <div className="Golder_Segment"></div>
            <About ref={AboutRef} />
            <StaionedImage image={image1} />
            <Service
                title={"Export "}
                images={imagesForServiceImported}
                ref={ServiceRef}
            />
            <StaionedImage image={image2} />
            <ServiceExport
                title={"Import "}
                images={imagesForServiceExported}
            />

            <Contact ref={ContactRef} />
            <ContactForm />
        </div>
    );
}

export default App;

//Todo: Clean up and orgnize the code
//Todo: Compress the images using webp
// Todo: Try to reduce the size of the project
