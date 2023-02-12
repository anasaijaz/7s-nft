// @ts-nocheck

import React from "react";
import { Box, useTheme } from "@mui/system";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import Appbar from "../../components/UI/Appbar/Appbar";
import { PageHeading } from "../explore/Explore";

import Solana from "../../assets/svg/icons/solana.svg";
const Cart = () => {
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
        <Typography variant="h5" color="primary" fontWeight={800}>
          Order Checkout
        </Typography>

        <Order sold={true} />

        <Divider
          sx={{
            my: 2,
          }}
        />

        <Typography gutterBottom variant="h5" color="primary" fontWeight={800}>
          Recommended
        </Typography>

        <Order sold={false} />
      </Container>
    </Box>
  );
};

const Order = ({ sold }) => {
  return (
    <Box p={3} bgcolor="white" borderRadius="10px">
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Typography variant={"body2"}>Qty. 1</Typography>
        </Grid>
        <Grid item xs={3}>
          <img
            width={"70%"}
            src="https://icons.veryicon.com/png/o/business/work-circle/smart-contracts.png"
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant={"h6"}>Project Name</Typography>
          <Typography paragraph variant={"body2"}>
            (0000 / 00000 Minted )
          </Typography>
          <Typography color="primary" variant={"body2"} fontWeight={600}>
            Highest Bid: # ETH
          </Typography>
          <Typography color="primary" variant={"body2"} fontWeight={600}>
            Policy Number: #
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img src={Solana} width={"30%"} />
          <Typography paragraph variant={"body1"}>
            Current Price
          </Typography>
          {!sold && (
            <Button size="small" variant="contained">
              Add to purchase
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
