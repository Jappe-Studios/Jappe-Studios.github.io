'use client';

import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import TreeView from './treeview';
import ContentView from './content';
import Outline from './outline';

const { Sider, Content } = Layout;

interface Page {
  key: string;
  title: string;
  content: string;
}

interface DocumentationLayoutProps {
  pages: Page[];
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ pages }) => {
  const [selectedPage, setSelectedPage] = useState<string>(pages[0]?.key || '');
  const [isOutlineVisible, setIsOutlineVisible] = useState<boolean>(true);

  const onSelectPage = (page: string) => {
    setSelectedPage(page);
  };

  const toggleOutline = () => {
    setIsOutlineVisible((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth < 768)
      setIsOutlineVisible(false);
  }, []);

  const currentPage = pages.find(page => page.key === selectedPage);
  const isMobile = useMobileMode(isOutlineVisible ? 1200 : 850);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Tree View (NOT MOBILE) */}
      {!isMobile && pages.length > 1 && (
        <Sider width={300} style={{ backgroundColor: 'transparent' }}>
          <TreeView pages={pages} onSelectPage={onSelectPage} />
        </Sider>
      )}

      {/* Content Area */}
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Layout style={{ flex: 1 }}>
          <Layout style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Tree View (MOBILE) */}
            {isMobile && pages.length > 1 && (
              <Content style={{ padding: '0 16px', overflow: 'visible' }}>
                <TreeView pages={pages} onSelectPage={onSelectPage} />
              </Content>
            )}
            {/* Page Content */}
            <Content style={{ padding: '0 16px', overflow: 'visible' }}>
              {currentPage && <ContentView content={currentPage.content} />}
            </Content>
          </Layout>
          {/* Right Outline */}
          {isOutlineVisible ?
            (
              <Sider width={250} style={{ backgroundColor: 'transparent' }}>
                {currentPage && <Outline content={currentPage.content} isOutlineVisible={true} toggleOutlineVisibility={toggleOutline} />}
              </Sider>
            )
          : 
            currentPage && <Outline content={currentPage.content} isOutlineVisible={false} toggleOutlineVisibility={toggleOutline} />
          }
        </Layout>
      </Layout>
    </Layout>
  );
};

const useMobileMode = (breakpoint: number = 1000) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateMobileMode = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial state
    updateMobileMode();

    // Add resize event listener
    window.addEventListener('resize', updateMobileMode);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, [breakpoint]);

  return isMobile;
};

export default DocumentationLayout;