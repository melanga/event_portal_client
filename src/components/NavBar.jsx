import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../api/reducers/authSlice';
import { useEffect } from 'react';

const drawerWidth = 240;
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/search' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

function NavBar(props) {
    const { window } = props;
    const { user, role } = useSelector((state) => state.auth);
    const [navOptions, setNavOptions] = React.useState(navItems);

    useEffect(() => {
        if (role === 'service_provider' && user) {
            setNavOptions([
                { name: 'Home', path: '/' },
                { name: 'Search', path: '/search' },
                { name: 'Dashboard', path: '/dashboard' },
                { name: 'Profile', path: `/service_provider/${user.id}` },
                { name: 'Contact', path: '/contact' },
            ]);
        } else if (role === 'customer') {
            setNavOptions([
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/search' },
                { name: 'Events', path: '/dashboard' },
                { name: 'Contact', path: '/contact' },
            ]);
        } else {
            setNavOptions(navItems);
        }
    }, [role, user]);

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const dispatch = useDispatch();

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', backgroundColor: '#222831' }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                Menu
            </Typography>
            <Divider color={'white'} />
            <List>
                {navOptions.map((item) => {
                    return (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                component={Link}
                                to={item.path}
                                sx={{ textAlign: 'center' }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position={'sticky'}>
                <Toolbar sx={{ backgroundColor: '#222831' }}>
                    <Box
                        padding="20px"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <img src={logo} alt="Logo" height="50px" />
                        </Link>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navOptions.map((item) => (
                            <Button
                                component={Link}
                                to={item.path}
                                key={item.name}
                                sx={{ color: '#fff' }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        {user ? (
                            <Button
                                onClick={() => dispatch(logout())}
                                sx={{ color: '#fff', borderRadius: '50px' }}
                                variant="contained"
                                ml={1}
                                startIcon={<PersonIcon />}
                            >
                                logout
                            </Button>
                        ) : (
                            <Button
                                component={Link}
                                to="/login"
                                sx={{ color: '#fff', borderRadius: '50px' }}
                                variant="contained"
                                ml={1}
                                startIcon={<PersonIcon />}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    anchor={'right'}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            height: 'fit-content',
                            color: 'white',
                            borderRadius: '10px',
                            marginTop: '64px',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;
