import { Metadata } from 'next';
import CommunityGuidelines from './page';

export const metadata: Metadata = {
  title: 'Jappe Studios - Community Guidelines',
  description: 'Community guidelines/rules for all official Jappe Studios communities.',
}

const CommunityGuidelinesLayout = () => <CommunityGuidelines/>;
export default CommunityGuidelinesLayout;