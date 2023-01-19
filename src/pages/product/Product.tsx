// @ts-nocheck

import Appbar from "../../components/UI/Appbar/Appbar";
import {Box, useTheme} from "@mui/system";
import React from "react";
import {PageHeading} from "../explore/Explore";
import {Avatar, Button, ButtonGroup, Container, Divider, Grid, Tab, Tabs, Typography} from "@mui/material";
import {FiFacebook, FiFeather, FiInstagram} from "react-icons/fi";
import {TabPanel} from "../activity/Activity";
import Patent from '../../assets/svg/icons/patent.svg'

const Product = () => {
    const theme = useTheme()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Appbar/>
            <Box style={theme.mixins.toolbar}/>
            <Box style={theme.mixins.toolbar}/>
            <PageHeading title={'Activity'} subtitle={'Lorem ipsum dolor ito dolor ito dolor ito ito dolor ito dolor ito ito dolor ito dolor ito'}/>
            <Container maxWidth='lg'>
                <Grid container spacing={10}>
                    <Grid item xs={8}>
                        <Box borderRadius='80px' sx={{
                            display: 'grid',
                            placeItems: 'center',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                        }} width='100%' height='100%' bgcolor='white'>
                            <FiFeather size='200px'/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography gutterBottom fontWeight='bold' color='primary' variant='h5'>
                            Patent <FiFeather size='19px'/>
                        </Typography>
                        <Typography paragraph variant='body2'>
                            (0000 / 00000 Minted )
                        </Typography>
                        <Typography variant='body2'>
                            Highest Bid:  # SOL
                        </Typography>

                        <Divider sx={{
                            my: 3
                        }} />


                        <Typography gutterBottom fontWeight='bold' color='primary' variant='h6'>
                           Description
                        </Typography>



                        <Typography gutterBottom  color='fontSecondary' variant='body2'>
                            XiD Technologies is introducing the ability for an individual to purchase a fractional ownership of XiD’s 6 existing patents and technologies in the form of a Fractional Non-Fungible Token, creating a brand...
                        </Typography>

                        <Divider sx={{
                            my: 3
                        }} />
                        <Box display='flex' gap={3}>
                        <Box>
                            <Typography gutterBottom fontWeight='bold' color='primary' variant='h6'>
                                Collection
                            </Typography>

                            <Box display='flex' gap={1} alignItems='center'>
                                <Avatar />
                                <Typography gutterBottom  color='fontSecondary' variant='body2'>
                                    Tier 1
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography gutterBottom fontWeight='bold' color='primary' variant='h6'>
                                Creator Name
                            </Typography>

                            <Box display='flex' gap={1} alignItems='center'>
                                <Avatar />
                                <Typography gutterBottom  color='fontSecondary' variant='body2'>
                                    Carmelo Pistorio
                                </Typography>
                            </Box>
                        </Box>
                        </Box>
                        <Divider sx={{
                            my: 3
                        }} />

                        <Typography variant='h4' fontWeight={800} color='primary'>1500</Typography>
                        <Typography paragraph variant='subtitle1' color='textSecondary'>Current Price</Typography>
                        <ButtonGroup fullWidth>
                            <Button>
                                Place an offer
                            </Button>
                            <Button>
                                Buy now
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Divider sx={{
                    my: 10
                }} />


                <Box sx={{ borderBottom: 1 }} display='flex' justifyContent='space-between' alignItems='center'>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Summary"  />
                        <Tab label="Wallet"  />
                        <Tab label="Inventory"  />
                        <Tab label="Sent"  />
                        <Tab label="Received"  />
                    </Tabs>

                    <Box>
                        <FiFacebook/>
                        <FiInstagram/>
                    </Box>
                </Box>

                <TabPanel value={value} index={0}>
                    <Box my={3}/>
                    <Typography paragraph variant='body1' color='primary' fontWeight={800}>Current Price</Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Attribute/>
                        </Grid>
                        <Grid item xs={4}>
                            <Attribute/>

                        </Grid>
                        <Grid item xs={4}>
                            <Attribute/>
                        </Grid>
                        <Grid item xs={4}>
                            <Attribute/>
                        </Grid>
                        <Grid item xs={4}>
                            <Attribute/>
                        </Grid>
                        <Grid item xs={4}>
                            <Attribute/>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Container>
        </Box>
            )
}

const Attribute = () => {
    return <Box p={2} bgcolor='#090D4C' borderRadius={'20px'}>
        <Typography  variant='body1' color='white' fontWeight={600}>Current Price</Typography>
        <Typography  variant='body1' color='white' fontWeight={600}>Type</Typography>
    </Box>
}
export default Product
