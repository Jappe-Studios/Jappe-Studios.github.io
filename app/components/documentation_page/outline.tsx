'use client';

import React, { useEffect, useState, useRef, MouseEventHandler } from 'react';
import { Anchor, FloatButton } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { pagePaddingHoriz } from '@/app/constants';

interface OutlineProps {
  content: string;
  isOutlineVisible: boolean;
  toggleOutlineVisibility: MouseEventHandler<HTMLElement>;
}

// Utility to extract headings (h1, h2, h3) from the content
const extractHeadings = (content: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3')).map((heading) => ({
    href: `#${heading.id}`,
    title: heading.textContent || '',
    level: heading.tagName.toLowerCase(),  // Extract the tag name (h1, h2, h3)
  }));
  return headings;
};

const Outline: React.FC<OutlineProps> = ({ content, isOutlineVisible, toggleOutlineVisibility }) => {
  const [outlineLinks, setOutlineLinks] = useState(extractHeadings(content));
  const [activeLink, setActiveLink] = useState<string>('');
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll event to update active link
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      outlineLinks.forEach((link) => {
        const element = document.getElementById(link.href.replace('#', ''));
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          const offsetBottom = offsetTop + element.offsetHeight;

          // Check if the current scroll position is within the bounds of the heading
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(link.href);
          }
        }
      });
    };

    // Function to synchronize outline scroll with page scroll
    const syncOutlineScroll = () => {
      const totalPageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / totalPageHeight;

      if (outlineRef.current) {
        const outlineScrollHeight = outlineRef.current.scrollHeight - outlineRef.current.clientHeight;
        const newScrollTop = outlineScrollHeight * scrollPercentage;

        outlineRef.current.scrollTo({ top: newScrollTop });
      }
    };

    // Add scroll event listener to handle active link and synchronize outline scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', syncOutlineScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', syncOutlineScroll);
    };
  }, [outlineLinks]);

  const getIndentation = (level: string) => {
    switch (level) {
      case 'h1':
        return 0; // No indentation for h1
      case 'h2':
        return 20; // Indent h2 by 20px
      case 'h3':
        return 40; // Indent h3 by 40px
      default:
        return 0;
    }
  };

  return (
    <div
      ref={outlineRef}
      style={{
        position: 'fixed',
        width: 250,
        top: 70,
        right: pagePaddingHoriz,
        maxHeight: 'calc(100vh - 70px)',
        overflowY: 'auto',
        padding: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {isOutlineVisible &&
        <Anchor affix={false} offsetTop={70}>
           {outlineLinks.map((link) => (
             <div
               key={link.href}
               style={{
                 paddingLeft: `${getIndentation(link.level)}px`,
               }}
             >
               <Anchor.Link href={link.href} title={link.title} />
             </div>
           ))}
        </Anchor>}
        <div
          ref={outlineRef}
          style={{
            position: 'fixed',
            top: 70,
            right: pagePaddingHoriz + (isOutlineVisible ? 250 : 0),
            overflowY: 'auto',
            padding: '10px',
          }}
        >
          <FloatButton
            type="default"
            icon={isOutlineVisible ? <CaretUpOutlined style={{ color: 'white' }}/> : <CaretDownOutlined style={{ color: 'white' }}/>}
            style={{ display: 'flex', alignItems: 'center', position: 'static' }}
            onClick={toggleOutlineVisibility}
          />
        </div>
    </div>
  );
};

export default Outline;
