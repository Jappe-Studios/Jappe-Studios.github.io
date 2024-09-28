'use client';

import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import Link from 'next/link';
import { discordLink } from '../constants';
import AboutPageLayout from '../components/about_page_layout';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <AboutPageLayout title={'About Jappe Studios'}>
      <Title level={2}>Who We Are</Title>
      <Paragraph>
        Jappe Studios is a small team dedicated to creating innovative games and applications.
        Our passion for gaming and technology drives us to develop engaging experiences for users.
        Most of our projects are open source, allowing others to learn from and contribute to our work.
      </Paragraph>

      <Title level={2}>Our Projects</Title>
      <Paragraph>
        At Jappe Studios, we pride ourselves on our diverse range of projects. 
        Whether it’s a thrilling game or a useful application, we strive to create high-quality, enjoyable products.
        Our commitment to open source allows us to share our creations with the community, inviting collaboration and feedback.
      </Paragraph>

      <Title level={2}>Join Us on Discord</Title>
      <Paragraph>
        We believe in the power of community and collaboration. That’s why we use Discord for many of our projects.
        Join us on Discord to get support, help with projects, or just to chat with other members of the Jappe Studios team!
      </Paragraph>

      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={12}>
          <Link href="/projects">
            <Button type="primary" block>
              View Our Projects
            </Button>
          </Link>
        </Col>
        <Col span={12}>
          <Button type="default" block onClick={() => window.open(discordLink, '_blank')}>
            Join Our Discord
          </Button>
        </Col>
      </Row>
    </AboutPageLayout>
  );
};

export default About;