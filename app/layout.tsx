import { ReactNode } from 'react';
import LayoutClient from './layout_client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jappe Studios',
  description: 'An open-source friendly organization that makes games, apps, and more! We also have a public Discord server where you can get support with any of our projects/products, or just hang out!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (<LayoutClient>{children}</LayoutClient>);
}