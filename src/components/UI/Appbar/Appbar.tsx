// @ts-nocheck

import React, {useState} from 'react';
import {
    AppBar as AP,
    Avatar,
    Button, Drawer,
    IconButton,
    InputAdornment, List, ListItem, ListItemButton, ListItemText,
    TextField,
    Toolbar,
    Tooltip,
    Typography, useTheme
} from '@mui/material';
import {Box, Container} from "@mui/system";
import {FiFacebook, FiInstagram, FiMenu, FiSearch} from "react-icons/fi";
import Logo from '../../../assets/svg/logo.svg'
import {useDispatch} from "react-redux";
import {showWallet} from "../../../store/slices/uiSlice";
import {Link, useNavigate} from "react-router-dom";

const pages = ['Cart', 'Sign in'];


const Appbar = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()


    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = (to) => (event) => {
        setOpen(false)
        navigate(to)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    return (
        <>
        <AP >
            <Toolbar>
                <Container maxWidth="lg" component={Box}>
                    <Toolbar disableGutters>
                        <Box
                            style={{display: 'block', flexGrow: '0'}}
                            mr={10}
                        >
                        <img
                            src={Logo}
                            height='40px'
                        />
                        </Box>

                        <Box sx={{ flexGrow: 1,
                            justifyContent:'right',
                            gap: 1,
                            mr:3,
                            alignItems: 'center',
                            display: { xs: 'none', md: 'flex' } }} >
                            <TextField size='small'  variant='standard' label='Search' InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FiSearch/>
                                    </InputAdornment>
                                ),
                            }}/>
                            {pages.map((page) => (
                                <Button
                                    onClick={() => navigate('/cart')}
                                    key={page}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box>
                            <Button onClick={() => dispatch(showWallet())} variant='contained' size='small'>
                                Connect Wallet
                            </Button>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpen}  sx={{ p: 0, ml: 4 }}>
                                    <FiMenu/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>

                <Drawer
                    anchor={'right'}
                    open={open}
                    onClose={handleClose}
                >
                    <Box width={250}>
                    <List>
                        <ListItem  onClick={handleClick('/')}>
                            <ListItemButton>
                                Dashboard
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={handleClick('/explore')}>
                            <ListItemButton >
                                Explore
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={handleClick('/activity')}>
                            <ListItemButton >
                                Activity
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={handleClick('/value')}>
                        <ListItemButton >
                                About
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Box width={'100%'} display='flex' justifyContent='space-between' alignItems={'center'} py={2} px={4} position='absolute' bottom={0}>
                        <Typography fontWeight={700} variant='body1'> XID </Typography>
                        <Box>
                            <IconButton>
                                <FiFacebook/>
                            </IconButton>
                            <IconButton>
                                <FiInstagram/>
                            </IconButton>
                        </Box>

                    </Box>
                    </Box>
                </Drawer>
            </Toolbar>
        </AP>

        </>
    );
};

export default Appbar;
