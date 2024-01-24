import React, { useEffect, useRef } from 'react';
import './AnimatedContent.css';
import logo from './ruins-sea.jpg'
import { useTypewriter } from "react-simple-typewriter";
export function About  () {
    const [autotyp] = useTypewriter({
        words: ['HI', 'HELLO', 'HEY'],
        backSpeed: 100,
        loop: {},
    })
  const textRef = useRef(null);
  const imageRef = useRef(null);

useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateContent();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(textRef.current);
    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateContent = () => {
    const textAnimation = textRef.current.animate(
      [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0%)' }],
      {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );

    const imageAnimation = imageRef.current.animate(
      [{ transform: 'translateX(100%)' }, { transform: 'translateX(0%)' }],
      {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );
  };

  return (
    <div className="animated-content mt-5">
            <div className='col-6 d-flex align-items-center'>
           <div ref={textRef} className="animated-text">
             <h2 className='ms-4'><span className='text-info fs-2'>{autotyp},  Below</span><span>Water</span></h2>
             <p className='p-5' id='erre' >Welcome to our online portal dedicated to exploring and understanding the captivating world of "Life Below Water." As you navigate through our website, immerse yourself in the wonders of diverse marine ecosystems, from vibrant coral reefs to mysterious deep-sea habitats. Discover the fascinating stories of marine species through detailed profiles that unveil their behaviors, habitats, and the conservation challenges they face. Journey with us into the heart of ongoing conservation initiatives, where dedicated efforts strive to protect and preserve our oceans..</p>
           </div>
           </div>
           <div className='col-6'>
           <div ref={imageRef} className="animated-image">
             <img className='w-100'
               src={logo}
               alt="Animated Image"
             />
          </div>
          </div>
        </div>
  )
};


