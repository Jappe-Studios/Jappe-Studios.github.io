'use client';

import React, { useEffect, useState } from 'react';
import { Badge, Button, Layout } from 'antd';
import Title from 'antd/es/typography/Title';
import { DownloadOutlined } from '@ant-design/icons';

const { Content } = Layout;

export interface ProductPageLayoutProps {
  title: string;
  versionType: string & 'Not Released' | 'Dev' | 'Alpha' | 'Beta' | 'Stable';
  version: string;
  logo: string;
  ageRating: number & 0 | 3 | 7 | 13 | 16;
  type: string & 'App' | 'Game' | 'Other';
  children: React.ReactNode;
}

const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({ title, versionType, version, logo, ageRating, type, children }) => {
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
    <Layout style={{ minHeight: '100vh', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className='highlighted-content' style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <div style={{ backgroundColor: 'red', aspectRatio: '1 / 1', width: 70 }}/>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Title level={4} style={{ flex: 1, margin: '5px 0' }}>{title}</Title>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
            <Badge text={'Type: ' + type} color='green'></Badge>
            <Badge text={'Version: ' + versionType + (version !== '' ? ' ' + version : '')} color='blue'></Badge>
            <Badge text={'Age: ' + ageRating + '+'} color='red'></Badge>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="primary"
            icon={<DownloadOutlined style={{ color: 'white' }} />}
            style={{ display: 'flex', alignItems: 'center' }}
            size='large'
          >
          Get
          </Button>
        </div>
      </div>
      <Content style={{ padding: 0, overflow: 'visible' }}>
        <div className='highlighted-content'>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default ProductPageLayout;