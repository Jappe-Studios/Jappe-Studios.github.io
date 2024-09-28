'use client';

import React from 'react';
import { Typography } from 'antd';
import ProductPageLayout from '@/app/components/product_page_layout';

const { Paragraph } = Typography;

const Product_StrandedSurvival = () => {
  return (
    <ProductPageLayout title={'Stranded Survival'} versionType={'Not Released'} version={''} logo={''} ageRating={13} type={'Game'}>
      <Paragraph>
        A game where you can do stuff.
        (Coming Soon)
      </Paragraph>
    </ProductPageLayout>
  );
};

export default Product_StrandedSurvival;