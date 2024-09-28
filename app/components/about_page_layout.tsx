'use client';

import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Title from 'antd/es/typography/Title';

const { Content } = Layout;

interface AboutPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AboutPageLayout: React.FC<AboutPageLayoutProps> = ({ title, children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check the window width only on the client
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
    <Layout style={{ minHeight: '100vh' }}>
      <center><Title level={1}>{ title }</Title></center>
      {isMobile ? 
      <Content>
        {children}
      </Content>
        :
      <Content style={{ padding: '50px' }}>
        <div className='highlighted-content'>
          {children}
        </div>
      </Content>}
    </Layout>
  );
};

export default AboutPageLayout;