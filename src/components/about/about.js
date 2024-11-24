import "./about.css";
import Me2 from "../../assets/fotodiri2.jpg";
import AboutBox from "./AboutBox";

const About = () => {
    return(
        <div className="about container section" id="about">
            <h2 className="section_title">About Me</h2>

            <div className="about_container grid">
                <img src={Me2} alt="" className="about_img" data-aos="fade-right" data-aos-offset="500" data-aos-duration="500"/>

                <div className="about_data grid" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
                    <div className="about_info">
                        <p className="about_description">
                        My name is Owen Christian Cahyadi, an active UMN student majoring in informatics, class of 2022.
                        I am very happy and interested in website development.
                        I want to have a lot of experience in creating websites.
                        </p>
                        <a href="/CV.pdf" className="btn" download>Download CV</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">HTML/CSS, React</h3>
                                <span className="skills_number">100%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage html"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Java, Python</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage react"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">PHP, Laravel, MYSQL</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage php"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </div>
    )
}

export default About;