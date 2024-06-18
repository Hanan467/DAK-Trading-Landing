import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Slider from "./Slider";
import Header from "./Hearder";

import image1 from "./assets/images/tyre2.png";
import image2 from "./assets/images/_Oa86jjDAKgLGG_RwSpGt-transformed.png";
import image3 from "./assets/images/industrialChemicals1.png";

export default function Hero() {
    const images = [image1, image2, image3];
    const WelcomStyleSpan1 = {
        color: "#131E2A",
    };
    const WelcomStyleSpan2 = {
        color: "#7f5523",
    };

    const { ref: welcomeRef, inView: welcomeInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: textRef, inView: textInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: buttonRef, inView: buttonInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: bottomTextRef, inView: bottomTextInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="Hero_Container">
            <div className="Content_Holder">
                <div className="Welcome_Content">
                    <motion.h1
                        ref={welcomeRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: welcomeInView ? 1 : 0,
                            x: welcomeInView ? 0 : -100,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={WelcomStyleSpan1}>WELCOME TO </span>
                        <span style={WelcomStyleSpan2}>DAK TRADING PLC </span>
                    </motion.h1>
                    <motion.div
                        className="text_container"
                        ref={textRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: textInView ? 1 : 0,
                            y: textInView ? 0 : 50,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti repudiandae provident consequatur
                            sapiente culpa nemo illo autem ipsum non veniam
                            cupiditate ullam ex soluta quas optio, quidem quis
                            iure obcaecati?
                        </p>
                    </motion.div>
                    <motion.button
                        ref={buttonRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: buttonInView ? 1 : 0,
                            scale: buttonInView ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Learn more
                    </motion.button>
                </div>
                <div className="Image_Container">
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: imageInView ? 1 : 0,
                            scale: imageInView ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Slider images={images} />
                    </motion.div>
                    <motion.div
                        className="Bottom_Image"
                        ref={bottomTextRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: bottomTextInView ? 1 : 0,
                            x: bottomTextInView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div>
                            <h2>SOMETHING ABOUT DAK</h2>
                            <h3>
                                Will talk about something about dak trading and
                                some more adding more more and more
                            </h3>
                        </div>
                        <div className="more_services_button ">
                            <button>More</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
