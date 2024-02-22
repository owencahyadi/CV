const AboutBox = () => {
    return(
        <div className="about_boxes grid">
            <div className="about_box" data-aos="zoom-in-right">
                <i className="about_icon icon-fire"></i>

                <div>
                    <h3 className="about_title">4</h3>
                    <span className="about_subtitle">Project completed</span>
                </div>
            </div>

            <div className="about_box" data-aos="zoom-in-up">
                <i className="about_icon icon-cup"></i>

                <div>
                    <h3 className="about_title">192</h3>
                    <span className="about_subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about_box" data-aos="zoom-in-left">
                <i className="about_icon icon-clock"></i>

                <div>
                    <h3 className="about_title">5</h3>
                    <span className="about_subtitle">Hours of sleep/day</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;