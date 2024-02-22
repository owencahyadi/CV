import "./home.css";
import Me from "../../assets/fotodiri1.jpg"
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <div className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt='' className='home_img' data-aos="zoom-in" data-aos-duration="2000"/>
                <h1 className='home_name' data-aos="fade-down" data-aos-duration="1000">Owen Christian Cahyadi</h1>
                <span className='home_education'  data-aos="fade-down">I'm always excited to create a greate website</span>
                <div className='home_socials'  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                    <a href='https://www.instagram.com/owen.christian04/' className='home_social-link' >
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href='https://github.com/owencahyadi/' className='home_social-link' >
                        <i className='icon-social-github'></i>
                    </a>
                </div>

                <a href='#contact' className='btn' data-aos="zoom-out-up" data-aos-duration="1500">Hire Me</a>

                <ScrollDown />
            </div>
            <Shapes />
        </div>
    )
}

export default Home;