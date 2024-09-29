'use client';

import React from 'react';
import { Typography } from 'antd';
import AboutPageLayout from '../components/about_page_layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jappe Studios - Contact',
  description: 'You can contact us using our email address, or via our Discord server (recommended).',
}

const { Paragraph } = Typography;

const Contact = () => {
  return (
    <AboutPageLayout title={'Contact Jappe Studios'}>
      <Paragraph>
        Feel free to contact us at:
      </Paragraph>
      <code>
        jappe.studios@gmail.com
      </code>
      <Paragraph></Paragraph>
      <Paragraph>
        You should use the Discord server for help or support however.
      </Paragraph>
    </AboutPageLayout>
  );
};

export default Contact;