// @ts-nocheck

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Appbar from "../../components/UI/Appbar/Appbar";
import { PageHeading } from "../explore/Explore";
import React from "react";
import { useTheme } from "@mui/system";
import { purple, red } from "@mui/material/colors";
import { FiFeather, FiLock, FiPlay, FiUpload } from "react-icons/fi";
import ReferenceIcon from "../../assets/svg/reference.svg";
import DotPattern from "../../assets/svg/patterns/dot.svg";
import Solution from "../../assets/svg/solution.svg";
import { Team } from "../index";

const Value = () => {
  const theme = useTheme();

  return (
    <Box>
      <Appbar />
      <Box style={theme.mixins.toolbar} />
      <Box style={theme.mixins.toolbar} />
      <PageHeading
        title={"References"}
        subtitle={
          "Lorem ipsum dolor ito dolor ito dolor ito ito dolor ito dolor ito ito dolor ito dolor ito"
        }
      />
      <Container maxWidth="lg">
        <br />
        <br />

        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Typography variant="h5" color="primary" fontWeight={800}>
              About us
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Our vision is to make the face the primary identification for
              every individual in the world because biometric facial recognition
              has the following advantages:
            </Typography>
          </Grid>
          <Grid item xs />
          <Grid item xs={2}>
            <img width={"100%"} src={DotPattern} />
          </Grid>
        </Grid>

        <Team />

        {[
          {
            id: 1,
            icon: <FiLock size="48px" />,
            title: "Security",
          },
          {
            id: 2,
            icon: <FiFeather size="48px" />,
            title: "Simplicity",
          },
          {
            id: 3,
            icon: <FiUpload size="48px" />,
            title: "Speed",
          },
        ].map((item) => (
          <Grid container alignItems="center" pb={2}>
            <Grid item xs={1} order={item.id % 2 ? 0 : 2}>
              {item.icon}
            </Grid>
            <Grid item xs={11} order={1}>
              <Typography variant="h6" color="primary">
                {item.title}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                F-NFT owner has fractional ownership of XiD’s Intellectual
                Property and will be able to monetize the 2 US Granted Patents
                and Singapore Patents
              </Typography>
            </Grid>
          </Grid>
        ))}

        <Divider
          sx={{
            my: 10,
          }}
        />

        <Typography variant="h5" color="primary" fontWeight={800}>
          What is FaaS IAM Solution?
        </Typography>
        <img src={Solution} width={"100%"} />

        <Divider
          sx={{
            my: 10,
          }}
        />

        <Typography
          textAlign="center"
          variant="h5"
          color="primary"
          fontWeight={800}
        >
          Header/Survey Title
        </Typography>
        <Typography
          paragraph
          textAlign="center"
          variant="body2"
          color="primary"
        >
          Form Description For your enquiries please contact us using the form
        </Typography>
        <Paper
          sx={{
            padding: 4,
            mb: 10,
          }}
        >
          <Box px={15}>
            <Typography
              paragraph
              textAlign="center"
              variant="h5"
              color="primary"
              fontWeight={800}
            >
              Contact Information
            </Typography>

            <Grid pb={3} container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  size="small"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  size="small"
                  variant="filled"
                />
              </Grid>
            </Grid>

            <TextField fullWidth label="Email" size="small" variant="filled" />

            <Box mt={5} />

            <Button fullWidth color="primary" variant="contained">
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

const Reference = ({ label }) => {
  return (
    <Box p={2} bgcolor={purple["50"]} borderRadius={"10px"}>
      <img src={ReferenceIcon} width="100%" />
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Typography variant="body1" fontWeight={800}>
          {label}
        </Typography>
        <IconButton
          sx={{
            backgroundColor: red.A200,
          }}
        >
          <FiPlay />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Value;
