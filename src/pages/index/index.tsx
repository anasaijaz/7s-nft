// @ts-nocheck

import React, { useState } from 'react'
import Appbar from "../../components/UI/Appbar/Appbar";
import {Box, Button, Container, Grid, Icon, IconButton, Paper, Typography, useTheme} from "@mui/material";
import {FiShoppingCart} from "react-icons/all";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../../components/UI/Footer/Footer";
import RoadMapSVG from '../../assets/svg/roadmap.svg'
import CEO from '../../assets/svg/ceo.svg'
import {useNavigate} from "react-router-dom";
import Biometric from '../../assets/png/biometric.jpg'
import Metamask from '../../assets/svg/wallets/coinbase.svg'
import Carousel from "../../components/UI/Carousel/Carousel";
import usecaseA from '../../assets/png/usecases/img.png'
import usecaseB from '../../assets/png/usecases/img_1.png'
import usecaseC from '../../assets/png/usecases/img_2.png'
import usecaseD from '../../assets/png/usecases/img_3.png'
import usecaseE from '../../assets/png/usecases/img_4.png'
import usecaseF from '../../assets/png/usecases/img_5.png'
import usecaseG from '../../assets/png/usecases/img_6.png'

const map = [
    usecaseA,
    usecaseB,
    usecaseC,
    usecaseD,
    usecaseE,
    usecaseF,
    usecaseF
]

function Index() {
    const theme = useTheme()

    return (
        <>
        <Container maxWidth="lg" component={Box}>

            <Appbar/>

            <Box style={theme.mixins.toolbar}/>

            <Hero/>

            <Divider/>

            <Typography paragraph variant='h5' fontWeight='bold'>
                What is Blockchain?
            </Typography>

            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                      <Typography variant='body2'>
                          From the early days of the World Wide Web to the present, authentication methods
                          have largely relied on user name and password combinations. As any Internet user
                          knows, these are both cumbersome and vulnerable to loss or breach, putting users
                          and institutions at significant risk of loss of privacy and financial losses.
                      </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                        <Typography variant='body2'>
                            XiD Technologies seeks to put an end to the risks and hassles of current
                            authentication methods: By endowing any Internet user with the ability to carry
                            their assets and credentials anywhere on the Internet and access them easily and securely through just their face.
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                        <Typography variant='body2'>
                            Biometric technologies, in particular face recognition, have allowed people
                            around the world to replace usernames and passwords in a safe and secure manner.
                            But to date, the Internet has not provided a secure way to store and share such sensitive data.
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px',
                        }}>
                        <Typography variant='body2'>
                            As a result, biometric identities, no matter how sophisticated, have only
                            been stored locally, on digital devices or local servers. However, blockchain
                            ledgers have created an unprecedented level of security and integrity to store
                            information on the Internet without any risk of hacking or corruption.
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Divider/>

            <Grid container spacing={3}>
            {
                map.map(value => <Grid xs={3} item>
                    <Box borderRadius='10px' bgcolor='white' minHeight='150px'>
                    <img src={value} width='100%'/>
                </Box>
                </Grid>)
            }
            </Grid>


            <Divider/>

            <Typography paragraph variant='h5' fontWeight='bold'>
                What is NFT?
            </Typography>

            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                            <Typography variant='body2'>
                                Non-Fungible Tokens (NFTs) are a “one-of-a-kind” unit of data stored on a blockchain, and because of its unique properties, NFT can neither be replaced nor interchanged and it serves as the most secure proof of ownership.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                            <Typography variant='body2'>
                                Own a Fraction of Our Intellectual Property
                                XiD Technologies acknowledges the utility of F-NFTs and will therefore tokenize its Intellectual Property on the Ethereum (ETH) chain representing 20% ownership in two Singapore patents and two US patents, as well as any future updates or extension of the mentioned patents.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                            <Typography variant='body2'>
                                The F-NFT sales of the XiD fractional IP consists of multiple rounds which add up to a total of 5000 F-NFTs. No additional F-NFTs within the aforementioned patent domain will be created, resulting in a maximum supply of 5000 F-NFTs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px',
                        }}>
                            <Typography variant='body2'>
                                The F-NFT sale is executed through multiple rounds:
                                First round: 1000 F-NFT available on the XiD NFT platform at a cost of $1,500
                                Second Round: 2000 F-NFT available for sale at a cost of $3,500
                                Third Round: 2000 F-NFT available for sale at a cost of $5,500
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Divider/>

            <NFTList/>

            <Divider/>

            <SponsorsList/>

            <Divider/>

            <RoadMap/>

            <Divider/>

            <Utilities/>

            <Divider/>

            <Paper variant='outlined'>
            <Box p={4} className='history'>
                <Typography gutterBottom variant='h5' fontWeight='bold'>
                    Our History
                </Typography>
                <Typography variant='body1'>
                    With over 400K registered users and 1M transactions per day, XiD Technologies is Singapore’s leading pioneer in biometric facial recognition. This multiple award-winning company was founded by Mr. Carmelo Pistorio in 2003 with the ambitious vision of “Making Your Face The Master Key” for everything. In the same year, XiD launched its first biometric facial recognition system in partnership with A*STAR, the Singapore government’s agency for science, technology and research. XiD is working towards creating a future where you only need your face to lock/unlock everything; a world where security, simplicity and privacy are guaranteed by XiD’s facial biometrics. XiD’s facial biometrics systems have been successfully deployed in extremely diverse sectors, ranging from construction, dormitory, banking, commercial, retail as well as education.
                </Typography>
            </Box>
            </Paper>

            <Divider/>

        </Container>

        </>
    )
}

const Divider = () => {
    return (<Box my={6}/>)
}

const Hero = () => {
    return (
        <Grid container mt={10} alignItems='center'>
            <Grid item xs={7}>
                <Box>
                    <Typography paragraph color='primary' fontWeight='700' variant='h3'>
                        Become a Fractional Owner of Our Intellectual Property
                    </Typography>
                    <Typography color='textSecondary' paragraph variant='subtitle1' maxWidth='60%'>
                        XiD Technologies pioneered biometrics in 2003, now XiD is building the world’s first decentralized, secure identity verification using facial recognition on the blockchain.
                    </Typography>
                    <Button variant='contained' size='large'>
                        Buy NFT
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box>
                    <img style={{
                        float: 'right',
                        borderRadius: '10px'
                    }}   width='80%' src={Biometric}/>
                </Box>
            </Grid>
        </Grid>
    )
}

const List = ({ListItem, xs=4}: {ListItem: any, xs?: number}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/product/2')
    }

    return (<Grid onClick={handleClick} container spacing={3}>
        {[1,2,3,4,5,6].map(item => <Grid item xs={12 / xs}>
            <ListItem/>
        </Grid>)}
    </Grid>)
}


export const Team = () => {
    return (
        <Box pb={6}>

            <Grid container>
                <Grid item xs={2}>
                    <img
                        style={{
                            borderRadius: '10px'
                        }}
                        height={'200px'}
                        src={CEO} />
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <Typography gutterBottom variant='h5' fontWeight='bold'>
                            Meet our team
                        </Typography>

                        <Typography fontWeight={600} color='primary' variant={'body1'}>
                            First name/Last name
                        </Typography>
                        <Typography fontWeight={600} color='secondary' variant={'subtitle1'}>
                            CEO
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


const Utilities = () => {
    return (
        <Box>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
                Utilities
            </Typography>

            <Typography paragraph variant='body1'>
                Behaviour and functional of NFTs
            </Typography>

            {[{
                id: 1,
                title: 'F-NFT owner has fractional ownership of XiD’s Intellectual Property and will be able to monetize the 2 US Granted Patents and Singapore Patents'
            },
                {
                    id: 2,
                    title: ' The F-NFT owners will have fractional ownership in any future international patents derived from all granted patents'
                },
                {
                    id: 3,
                    title: 'F-NFT owners will receive passive income from product royalties for up to 5 years'
                },
                {
                    id: 4,
                    title: 'F-NFT owners will receive passive income from every licence sold for up to 5 years'
                },
                {
                    id: 5,
                    title: 'F-NFT owners will receive portion of net profits from selling the XiD product and service'
                }].map(item => (
                <Grid container alignItems='center' pb={2} width='550px' marginLeft={!(item.id % 2) ? 'auto' : 'none'}>
                    <Grid item xs={2} order={item.id % 2 ? 0 : 2}>
                        <Typography variant='h2' fontWeight={800} color={item.id % 2 ? 'secondary' : 'primary'} textAlign='center'>
                            {item.id}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} order={1}>
                        <Typography variant='h6' >
                            {item.title}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Box>
    )
}

const RoadMap = () => {
    return (
        <Box>
            <img src={RoadMapSVG} width='100%'/>

            {/*<VerticalTimeline animate={false}>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/}
            {/*        date="2011 - present"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Creative Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, Project Management, Team Leading*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2010 - 2011"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Art Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, SEO, Online Marketing*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2008 - 2010"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2006 - 2008"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="April 2013"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
            {/*        <p>*/}
            {/*            Strategy, Social Media*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="November 2012"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="2002 - 2006"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
            {/*    />*/}
            {/*</VerticalTimeline>*/}
        </Box>
    )
}


export const NFTList =  ({disableTitle = false} : {disableTitle: boolean}) => {
    return (<Box>

        {!disableTitle && <>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
            NFT List
            </Typography>

            <Typography paragraph variant='body1'>
            List of nfts
            </Typography>
        </>
        }
        <List ListItem={NFT}/>
    </Box>)
}


const SponsorsList = () => {
    return (
        <Box>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
                Our Partners
            </Typography>

            <Carousel/>
        </Box>
    )
}

const Sponsor = () => {
    return (
        <Box>
            <img src={'https://www.w3schools.com/css/img_lights.jpg'} width='100%'/>
        </Box>
    )
}

export const NFT = () => {
    return (
        <Box bgcolor='white' sx={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            borderRadius: '18px',
            overflow: 'hidden'
        }}>
            <Box minHeight='200px'>
                <img
                    height={'200px'}
                    width={'100%'}
                    style={{
                        objectFit: 'cover'
                    }}
                    src={'https://icons.veryicon.com/png/o/business/work-circle/smart-contracts.png'}
                />
            </Box>

            <Box p={2}>

            <Typography variant='body1'>
                NFT
            </Typography>

            <Typography paragraph variant='body2'>
                Own a fraction of all 4 patents held by XiD technlogies
            </Typography>

            <Box display='flex' mt={3}>
                <Box sx={{
                    flexGrow: 1
                }}>
                <IconButton sx={{
                    backgroundColor: 'orange',
                    color: 'white'
                }}>
                   <FiShoppingCart/>
                </IconButton>
                </Box>
                <Box >
                    <Typography variant='body2' color='primary' fontWeight={600}>
                        Reserve Price
                    </Typography>
                    <Typography variant='body2' align='right'>
                        1500
                    </Typography>
                </Box>
            </Box>

        </Box>

            <Button
                variant='contained'
                sx={{
                    width: '100%',
                    borderRadius: '0%',
                    height: '50px'
                }}>
                Place bid
            </Button>

        </Box>
    )
}

export default Index
