import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import imageCard1 from "./assets/images/sesameseed.jpg";
import aboutImage from "./assets/images/grainVertical.jpg";
import "./App.css";

const About = () => {
    const { ref: line1Ref, inView: line1InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: line2Ref, inView: line2InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: line3Ref, inView: line3InView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="About_Container">
            <section className="About_Body_Container">
                <div className="Content_Holder row">
                    <div className="leftContent col-sm-12">
                        <header className="About_Header_Container container-fluid col-sm-12">
                            <div className="Content_Holder container">
                                <h1>About DAK</h1>
                            </div>
                        </header>
                        <div className="left_content_holder">
                            <div className="left_content_paragraph">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quos, recusandae. Ex,
                                    molestiae qui. Eius, voluptates debitis
                                    atque totam optio modi fuga et inventore vel
                                    obcaecati veniam ipsam quaerat velit
                                    accusantium. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Magni nihil
                                    asperiores minus harum, quos expedita
                                    nesciunt tempora. Quam voluptas maiores quas
                                    minima fugit at consequuntur et aliquam, ut
                                    necess itatibus? Reprehenderit!
                                </p>
                            </div>
                            <div className="left_content_paragraph_image_holder">
                                <img src={imageCard1} alt="Sesame Seed" />
                            </div>
                            <div className="left_content_paragraph">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quos, recusandae. Ex,
                                    molestiae qui. Eius, voluptates debitis
                                    atque totam optio modi fuga et inventore vel
                                    obcaecati veniam ipsam quaerat velit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="vertical-line1"
                        ref={line1Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line1InView ? 1 : 0,
                            x: line1InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    ></motion.div>
                    <motion.div
                        className="vertical-line2"
                        ref={line2Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line2InView ? 1 : 0,
                            x: line2InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div
                        className="vertical-line3"
                        ref={line3Ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: line3InView ? 1 : 0,
                            x: line3InView ? 0 : 100,
                        }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    ></motion.div>
                    <motion.div
                        className="rightContent"
                        ref={imageRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: imageInView ? 1 : 0,
                            scale: imageInView ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <img src={aboutImage} alt="About DAK Trading PLC" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
