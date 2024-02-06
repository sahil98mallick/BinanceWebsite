import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '@/Mui_theme/ThemeContextProvider';
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { mode, toggleColorMode } = useThemeContext();
    const headerStyles = {
        color: mode === 'dark' ? 'white' : 'black',
        background: mode === 'dark' ? 'black' : 'linear-gradient(90deg, rgba(2, 180, 186, 1) 0%, rgba(4, 105, 233, 1) 35%, rgba(16, 169, 200, 1) 100%)',
    };
    const navitemsStyle = {
        color: mode === 'dark' ? 'white' : 'inherit',
        textDecoration: 'none',
    };



    return (
        <>
            <AppBar position="sticky" className='header-container' sx={headerStyles}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: "center", alignItems: "center", gap: "5px" } }}>
                            <img src="https://i.pinimg.com/736x/b4/5b/60/b45b600e90dbe9c958b0f08745eac6de.jpg" alt="BrandImage" className='brandlogo' />
                            <Link href={"/"} className='brandname'>Binance</Link>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon style={{ color: "black" }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu} className='resmenu'>
                                    <Link href={"/"} className='resnavitems'>Home</Link>
                                    <Link href={"/rates"} className='resnavitems'>Rates</Link>
                                    <Link href={"/exchanges"} className='resnavitems'>Exchanges</Link>
                                    <Link href={"/markets"} className='resnavitems'>Markets</Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Binance
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 60, alignItems: "center", justifyContent: "center" } }}>
                            <Link href={"/"} className='navitems'>Home</Link>
                            <Link href={"/rates"} className='navitems'>Rates</Link>
                            <Link href={"/exchanges"} className='navitems'>Exchanges</Link>
                            <Link href={"/markets"} className='navitems'>Market</Link>
                            <Button onClick={toggleColorMode}>{mode == "dark" ? <LightModeIcon style={{ color: "whitesmoke" }} /> : <LightModeIcon style={{ color: "black" }} />}</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header