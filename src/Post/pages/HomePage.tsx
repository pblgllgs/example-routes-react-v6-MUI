import React from 'react';
import { PostLayout } from '../layout/PostLayout';
import { Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <PostLayout title="Home">
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        facilis labore commodi tenetur voluptatibus voluptatum inventore impedit
        minus recusandae, suscipit consectetur sequi consequatur autem ipsa
        possimus voluptates, a eius sapiente.
      </Typography>
    </PostLayout>
  );
};
