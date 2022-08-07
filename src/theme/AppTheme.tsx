import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { purpletheme } from './purple';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}
export const AppTheme: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={purpletheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
