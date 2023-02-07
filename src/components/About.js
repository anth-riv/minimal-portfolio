import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Hi, My name is Anthony Rivoiron, I am a Frontend Developer.
                    </p>
                    <p className="pb-5">
                        I am proficient in Frontend skills like React.js, Redux Tool Kit, CSS, TailwindCSS and many more.
                    </p>
                    <p className="pb-5">
                        Developer for two years, <br />
                        I am currently open for a fulltime Frontend Developer role, <br />
                        I am passionate about web development and I can quickly learn new technologies.
                    </p>
                </div>

                <div className="about-img">
                    <img src={AboutImg} alt="coding illustration" className="lgw-[80%] md:ml-auto" />
                </div>
            </div>
        </section>
    );
}

export default About;