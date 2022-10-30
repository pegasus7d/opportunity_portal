import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import  {AiFillBehanceCircle} from 'react-icons/ai';
import {AiFillCodeSandboxCircle} from 'react-icons/ai';
import {AiFillDribbbleCircle} from 'react-icons/ai';

function Content() {
  return (
    <Carousel>
      <Carousel.Item interval={500} >
       <React.Fragment>
       <div className="carousel_main">
                <div className='carousel_first'>
                
                    <h1><span className='carousel_create'>Create</span> for Everyone.</h1>
                    <p>Find your next job with us.</p>
                    <button type="button">
                          <span class="carousel_start">Register</span>
                        </button>
                        <div className='carousel_icon'>
                          <AiFillBehanceCircle /><p>Security</p>
                          <AiFillCodeSandboxCircle /><p>Flexibility</p>
                          <AiFillDribbbleCircle /><p>Collaboration</p>
                     </div>
                </div>
               
                <div className='carousel_second'><img alt="" src="https://elearningindustry.com/wp-content/uploads/2021/02/learning-and-development-strategies.png" width="500px" height="500px"/></div>
            </div>
       </React.Fragment>
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <React.Fragment>
        <div className="carousel_main">
                <div className='carousel_first'>
                
                    <h1><span className="carousel_code">Code</span> for Everyone.</h1>
                    <p>Find your next job with us.</p>
                    <button type="button">
                          <span class="carousel_start">Register</span>
                        </button>
                        <div className='carousel_icon'>
                          <AiFillBehanceCircle /><p>Security</p>
                          <AiFillCodeSandboxCircle /><p>Flexibility</p>
                          <AiFillDribbbleCircle /><p>Collaboration</p>
                     </div>
                </div>
                
                <div className='carousel_second'><img alt="" src="https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90" width="500px" height="500px"/></div>
            </div>
       </React.Fragment>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <React.Fragment>
      <div className="carousel_main">
                <div className='carousel_first'>
                
                    <h1><span className="carousel_design">Design</span> for Everyone.</h1>
                    <p>Find your next job with us.</p>
                    <button type="button">
                          <span class="carousel_start">Register</span>
                        </button>
                        <div className='carousel_icon'>
                          <AiFillBehanceCircle /><p>Security</p>
                          <AiFillCodeSandboxCircle /><p>Flexibility</p>
                          <AiFillDribbbleCircle /><p>Collaboration</p>
                     </div>
                </div>
               
                <div className='carousel_second'><img alt="" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/How-does-the-rise-of-ML-and-AI-affect-design.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces" width="500px" height="500px"/></div>
            </div>
        </React.Fragment>
      </Carousel.Item>
    </Carousel>
  );
}

export default Content;