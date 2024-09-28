'use client';

import './treeview.css'
import React from 'react';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;

interface TreeViewProps {
  pages: { key: string; title: string }[];
  onSelectPage: (page: string) => void;
}

const TreeView: React.FC<TreeViewProps> = ({ pages, onSelectPage }) => {
  const treeData = pages.map(page => ({
    title: page.title,
    key: page.key,
  }));

  const onSelect = (keys: React.Key[]) => {
    onSelectPage(keys[0] as string);
  };

  return (
    <DirectoryTree
      multiple={false}
      onSelect={onSelect}
      treeData={treeData}
      showIcon={false}
      switcherIcon={null}
      className="custom-tree"
      rootStyle={{
        borderRadius: '8px',
        padding: '5px 0',
      }}
    />
  );
};

export default TreeView;