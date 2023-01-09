import React from 'react';
import {Box, Container, Grid, Typography, useTheme} from "@mui/material";
import {NFTList} from "../index";
import Appbar from "../../components/UI/Appbar/Appbar";
import Footer from "../../components/UI/Footer/Footer";
import {FiCompass, FiPaperclip} from "react-icons/all";
import ExploreIcon from '../../assets/svg/explore_icon.svg'

const Explore = () => {
    const theme = useTheme()

    return (
        <Box>
            <Appbar/>
            <Box style={theme.mixins.toolbar}/>
            <Box style={theme.mixins.toolbar}/>

            <PageHeading title={"Explore"} subtitle={'Own a fraction of ALL 4 patents held by XiD Technologies'}/>

            <Container maxWidth='lg'>
                <NFTList disableTitle/>
            </Container>

        </Box>
    );
};

export const PageHeading = ({title, subtitle}: {title: 'string', subtitle: 'string'}) => {
    const theme = useTheme()

    return (<Box bgcolor={theme.palette.primary.main} py={3} mb={5}>
        <Container maxWidth='lg'>
            <Grid container alignItems='center'>
                <Grid item xs={2}>
                    <Box>
                        <img src={ExploreIcon} width={'100%'} />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant={'h4'} fontWeight='700' color={theme.palette.primary.contrastText}>
                        {title}
                    </Typography>
                    <Typography variant={'body1'} color={theme.palette.primary.contrastText}>
                        {subtitle}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>)
}


export default Explore;
