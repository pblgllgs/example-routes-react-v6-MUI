import { Box, Toolbar } from '@mui/material';
import React, { FC } from 'react';
import { Navbar, Sidebar } from '../components';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}

const drawerWidth = 280;

export const PostLayout: FC<Props> = ({ children, title = '' }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
