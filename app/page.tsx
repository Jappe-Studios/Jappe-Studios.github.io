'use client';

import './changing_text.css';
import React, { useState, useEffect } from 'react';
import { Layout } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { primaryColor } from './constants';

export default function Home() {
  const texts = ["Free and Open Source Projects", "JappeOS: A Free and Open Source Operating System", "High-Quality Games and Apps!", "Lightweight Tools for Developers", "Public Discord Server"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Trigger the fade-out animation
      setIsFadingOut(true);

      // Change the text after the fade-out is complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFadingOut(false); // Fade back in
      }, 500); // Match this with the fade-out duration in CSS
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [texts.length]);

  useEffect(() => {
    // Check the window width only on the client
    const handleResize = () => {
      setIsMobile(window.innerWidth < 607);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', }}>
      <div
        style={{
          width: '100vw', // Full viewport width
          height: '100vh', // Full viewport height
          backgroundImage: `url('/home_background.png')`,
          backgroundSize: 'cover', // Ensures the image covers the entire area
          backgroundPosition: 'center', // Centers the image
          top: 0,
          left: 0,
          zIndex: -1, // Behind the content

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        
          /* Mask for subtler fade at the top and stronger at the bottom */
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 1%, rgba(0,0,0,0.5) 5%, black 10%, black 80%, rgba(0,0,0,0) 100%)',
        
          /* For better browser support */
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 1%, rgba(0,0,0,0.5) 5%, black 10%, black 80%, rgba(0,0,0,0) 100%)',
        }}
      >
        
        <Paragraph style={{ fontSize: isMobile ? 50 : 75, fontWeight: 'bold', margin: '7px', color: primaryColor, }}>Jappe Studios</Paragraph>
        <Paragraph style={{ fontSize: isMobile ? 14 : 20, fontWeight: 'bold', margin: 0, }} className={`changing-text ${isFadingOut ? 'fade-out' : 'fade-in'}`}>{texts[currentIndex]}</Paragraph>
      </div>
      <div>
        <center>
          <Paragraph style={{ fontSize: 15, fontWeight: 'bold', margin: '7px', color: 'yellow' }}>Note: This website is still a work in progress. It is nowhere near finished.</Paragraph>
        </center>
      </div>
    </Layout>
  );
}