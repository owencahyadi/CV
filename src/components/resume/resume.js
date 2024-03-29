import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
    return(
        <div className="resume container section" id="resume">
            <h2 className="section_title">Experience</h2>

            <div className="resume_container grid">
                <div className="timeline grid" data-aos="flip-left" data-aos-duration="500" data-aos-offset="500">
                    {Data.map((val, id)=> {
                        if(val.category === "education") {
                            return(
                                <Card 
                                key={id} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                desc={val.desc}
                                />
                            )
                        } else {
                            return null;
                        }
                    })}
                </div>

                <div className="timeline grid" data-aos="flip-right" data-aos-duration="500" data-aos-offset="500">
                    {Data.map((val, index)=> {
                        if(val.category === "experience") {
                            return(
                                <Card 
                                key={index} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                desc={val.desc}
                                />
                            )
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Resume;