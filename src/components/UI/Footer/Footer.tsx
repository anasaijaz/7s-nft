import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Logo from "../../../assets/svg/logo.svg";

const Footer = () => {
  return (
    <Box bgcolor="white" py={3} mt={5}>
      <Container>
        <Grid mb={5} container spacing={3}>
          <Grid item xs={6} md={3}>
            <Box component={"img"} {...{ src: Logo }} height={"40px"}></Box>

            <Typography variant="body1">nft@xidtech.com</Typography>
            <Typography variant="body1">+65 6282 6500</Typography>
            <Typography variant="body1">
              362 Upper Paya Lebar Rd, #05-08 Singapore 534963
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <FooterLinks
              label={"Navigation"}
              links={["Home", "Explore", "Activity", "About", "Community"]}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FooterLinks
              label={"Explore"}
              links={["Collections", "Popular", "New"]}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FooterLinks
              label={"Customer Care"}
              links={[
                "Posts",
                "Help Center",
                "My Wallet",
                "Shopping Cart",
                "FAQ",
              ]}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6} md={12 / 3}>
            <Typography variant={"subtitle2"}>
              &#169; XiD technologies
            </Typography>
          </Grid>
          <Grid item xs={6} md={12 / 3}>
            <Typography variant={"subtitle2"}>Powered by: 7SNFT</Typography>
          </Grid>
          <Grid item xs={12} md={12 / 3}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant={"subtitle2"}>Terms & Conditions</Typography>
              <Typography variant={"subtitle2"}>Legal</Typography>
              <Typography variant={"subtitle2"}>Contact</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const FooterLinks = ({
  label,
  links,
}: {
  label: string;
  links: Array<string>;
}) => {
  return (
    <Box>
      <Typography
        gutterBottom
        fontWeight={600}
        color="secondary"
        variant="body1"
      >
        {label}
      </Typography>

      {links.map((link) => (
        <Typography variant="body2" color="primary" key={link}>
          {link}
        </Typography>
      ))}
    </Box>
  );
};
export default Footer;
