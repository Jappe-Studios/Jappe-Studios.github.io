import { Metadata } from 'next';
import Contact from './page';

export const metadata: Metadata = {
  title: 'Jappe Studios - Contact',
  description: 'You can contact us using our email address, or via our Discord server (recommended).',
}

const ContactLayout = () => <Contact/>;
export default ContactLayout;