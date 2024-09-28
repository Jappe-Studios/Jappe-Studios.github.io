'use client';

import styles from './content.module.css';
import React from 'react';

interface ContentViewProps {
  content: string;
}

const ContentView: React.FC<ContentViewProps> = ({ content }) => {
  // Replace HTML elements with class names for styling
  const formattedContent = content
    .replace(/<blockquote>/g, `<blockquote class="${styles.blockquote}">`)
    .replace(/<ul>/g, `<ul class="${styles.list}">`)
    .replace(/<li>/g, `<li class="${styles.listItem}">`);

  return (
    <div dangerouslySetInnerHTML={{ __html: formattedContent }} className={styles.content} />
  );
};

export default ContentView;