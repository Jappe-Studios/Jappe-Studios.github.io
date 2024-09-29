import { Metadata } from 'next';
import About from './page';

export const metadata: Metadata = {
  title: 'Jappe Studios - About Us',
  description: `Jappe Studios is a small team dedicated to creating innovative games and applications.
        Our passion for gaming and technology drives us to develop engaging experiences for users.
        Most of our projects are open source, allowing others to learn from and contribute to our work.`,
}

const AboutLayout = () => <About />;
export default AboutLayout;