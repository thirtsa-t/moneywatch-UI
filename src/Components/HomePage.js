import React from "react";
import image from "../Assets/image.jpg";
import "./index.css";
import { Button ,Carousel,Card} from "antd";
import { Link } from "react-router-dom";
import LOGO from '../Assets/LOGO.png';

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};

const Homepage = () => {
  return (
    <div className="home-layout">
      <div className="home-black">
        <div>
      <img src={LOGO} Alt='' style={{ width: '7% ',position:'fixed',marginLeft:'2%' }}></img> 
      <h1 style={{ margin: "0% 0% 15% 9%", font: "15px", color: "white",position:'fixed' }}>
        Money Watch
        </h1>
        </div>
      
    
      {/* <h1 className="home">English</h1> */}
      <p className="middle-paragraphy">Money Watch</p>

      <Carousel autoplay>
        <div  className="about-paragraphy">
          <h3 style={contentStyle}>
            <p1 >
              “let your dreams comes and your plans comes true”
            </p1>
          
          </h3>
        </div>
        <div>
          <h3 style={contentStyle} className="about-paragraphy">
          <p2>"Do not save what is left after spending, but spend what is left after saving."</p2>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}className="about-paragraphy" >
            <p3>"Never spend your money before you have it."</p3>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}className="about-paragraphy" >
            <p5>"He who buys what he does not need, steals from himself."</p5>
          </h3>
        </div>
      </Carousel>
      <div>
        <Button type="primary" htmlType="link" className="home-button">
          <Link to="/signin"> <b> Let's Get Started</b></Link>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
