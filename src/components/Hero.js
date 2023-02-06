import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
    return (
        <section className="bg-primary text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="hero-info">
                    <h1 className="text-2xl lg:text-6xl">
                    Hi, <br />
                    I am <span className="text-accent">a</span>nthony <br />
                    Web Developer
                    </h1>
                    <p className="py-5">I am proficient in JavaScript React.js and Tailwind CSS</p>
                    <button className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">See Projects</button>
                </div>

                <div className="hero-img">
                    <img src={HeroImg} alt="coding illustration" className="w-[80%] ml-auto" />
                </div>
            </div>
        </section>
    );
}

export default Hero;