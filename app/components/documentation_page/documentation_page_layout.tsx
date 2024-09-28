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

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Only render the TreeView if there's more than one page */}
      {pages.length > 1 && (
        <Sider width={300} style={{ backgroundColor: 'transparent' }}>
          <TreeView pages={pages} onSelectPage={onSelectPage} />
        </Sider>
      )}

      {/* Content Area */}
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Layout style={{ flex: 1 }}>
          <Content style={{ padding: '0 16px', overflow: 'visible' }}>
            {currentPage && <ContentView content={currentPage.content} />}
          </Content>
          {/* Right Outline */}
          {isOutlineVisible ?
            (
              <Sider width={250} style={{ backgroundColor: 'transparent' }}>
                {currentPage && <Outline content={currentPage.content} isOutlineVisible={isOutlineVisible} toggleOutlineVisibility={toggleOutline} />}
              </Sider>
            )
          : 
            currentPage && <Outline content={currentPage.content} isOutlineVisible={isOutlineVisible} toggleOutlineVisibility={toggleOutline} />
          }
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DocumentationLayout;