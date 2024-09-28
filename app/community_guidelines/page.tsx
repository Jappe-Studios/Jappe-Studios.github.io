'use client';

import React, { useEffect, useState } from 'react';
import DocumentationLayout from '../components/documentation_page/documentation_page_layout';

const CommunityGuidelines = () => {
  const [htmlContent, setHtmlContent] = useState<string>(""); // State to hold the HTML content

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch('/community_guidelines/content.html');
      if (response.ok) {
        const content = await response.text();
        setHtmlContent(content); // Update state with fetched content
      } else {
        console.error('Failed to load content:', response.status);
      }
    };

    loadContent();
  }, []);

  const pages = [
    {
      key: 'page1',
      title: 'Community Guidelines',
      content: htmlContent, // Use the state value
    },
  ];

  // If htmlContent is empty, render a loading state.
  if (!htmlContent) {
    return <div>Loading...</div>;
  }

  return (
    <DocumentationLayout pages={pages} />
  );
};

export default CommunityGuidelines;