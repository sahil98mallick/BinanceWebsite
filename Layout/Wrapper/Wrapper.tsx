import { Box, Container } from '@mui/material';
import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useThemeContext } from '@/Mui_theme/ThemeContextProvider';

interface wrapperProps {
    children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
    const { children } = props;
    const { mode } = useThemeContext()
    const wrapperStyles = {
        color: mode === 'dark' ? 'black' : 'black',
        background: mode === 'dark' ? 'black' : 'white',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    };
    return (
        <>
            <Box maxWidth="xl" sx={wrapperStyles}>
                <Header />
                <Box className="bodycontent" sx={wrapperStyles}>
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Wrapper