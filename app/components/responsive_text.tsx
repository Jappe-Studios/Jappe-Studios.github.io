import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface ResponsiveTextProps {
  children: string;
  minFontSize?: number;
  maxFontSize?: number;
  style?: CSSProperties;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ children, minFontSize = 12, maxFontSize = 24, style = {} }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        const parentWidth = textRef.current.parentElement?.offsetWidth || 0;
        const computedStyle = window.getComputedStyle(textRef.current);
        const marginLeft = parseFloat(computedStyle.marginLeft || '0');
        const marginRight = parseFloat(computedStyle.marginRight || '0');
        const availableWidth = parentWidth - marginLeft - marginRight;

        const textWidth = textRef.current.scrollWidth;

        if (availableWidth && textWidth > availableWidth) {
          // Decrease the font size to fit within the parent width, minus margins
          const newFontSize = Math.max(minFontSize, (availableWidth / textWidth) * maxFontSize);
          setFontSize(newFontSize);
        } else {
          // Reset to the maximum font size if it fits
          setFontSize(maxFontSize);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [children, maxFontSize, minFontSize, style]);

  return (
    <Text
      ref={textRef}
      style={{
        fontSize: `${fontSize}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default ResponsiveText;