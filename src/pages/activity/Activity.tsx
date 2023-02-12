// @ts-nocheck

import React from "react";
import { Box, useTheme } from "@mui/system";
import Appbar from "../../components/UI/Appbar/Appbar";
import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { NFTList } from "../index";
import Footer from "../../components/UI/Footer/Footer";
import { PageHeading } from "../explore/Explore";
import TxnPositive from "../../assets/svg/icons/txn+.svg";
import TxnNegative from "../../assets/svg/icons/txn-.svg";

const Activity = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Appbar />
      <Box style={theme.mixins.toolbar} />
      <Box style={theme.mixins.toolbar} />

      <PageHeading
        title={"Activity"}
        subtitle={
          "Lorem ipsum dolor ito dolor ito dolor ito ito dolor ito dolor ito ito dolor ito dolor ito"
        }
      />
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Summary" />
            <Tab label="Wallet" />
            <Tab label="Inventory" />
            <Tab label="Sent" />
            <Tab label="Received" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Inventory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Summary />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Wallet />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
      </Container>
    </Box>
  );
};

const Wallet = () => {
  return (
    <Box>
      <NFTList disableTitle={true} />
    </Box>
  );
};

const Inventory = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Paper
        variant="outlined"
        style={{
          borderRadius: "10px",
        }}
      >
        <Box padding={3}>
          <Box pb={2} display="flex" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              Default wallet connected
            </Typography>
            <Typography variant="h6" color="primary">
              00000.00000 CUR
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Last Synched MM-DD-YYYY
            </Typography>
            <Typography variant="body2" color="primary">
              $000.00 USD
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Pending transactions: #
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Total Number of Transactions: #
            </Typography>
            <Typography variant="body2" color="secondary">
              View Wallets
            </Typography>
          </Box>
        </Box>
      </Paper>

      <br />

      <Paper
        variant="outlined"
        style={{
          borderRadius: "10px",
        }}
      >
        <Box padding={3}>
          <Box pb={2} display="flex" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              Total assets
            </Typography>
          </Box>

          <Box pb={1} display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Asset24983ur80hpidsfhklrgh5480y4
            </Typography>
            <Typography variant="body2" color="secondary">
              Qty. 1
            </Typography>
          </Box>

          <Box pb={1} display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Asset24983ur80hpidsfhklrgh5480y4
            </Typography>
            <Typography variant="body2" color="secondary">
              Qty. 1
            </Typography>
          </Box>

          <Box pb={1} display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Asset24983ur80hpidsfhklrgh5480y4
            </Typography>
            <Typography variant="body2" color="secondary">
              Qty. 1
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Box mt={5} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Owners" />
          <Tab label="Bids" />
          <Tab label="Details" />
          <Tab label="History" />
          <Tab label="Received" />
        </Tabs>
      </Box>

      <TabPanel value={2} index={2}>
        <Box>
          <Box mb={3}>
            <Typography variant="body1" fontWeight={600} color="secondary">
              Transaction History
            </Typography>
            <Box></Box>
          </Box>

          {[1, 2, 3, 4].map((item) => (
            <Box mb={4}>
              <Typography variant="body2" color="primary">
                MM/DD/YYYY
              </Typography>

              <Box py={2}>
                <Grid container>
                  <Grid item xs={1}>
                    <img src={TxnPositive} width="40%" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" color="primary">
                      Received Asset
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Transaction Submitted: 00:00:00 AM/PM
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                  >
                    <Box>
                      <Typography
                        gutterBottoms
                        textAlign="center"
                        fontWeight="bold"
                        variant="body2"
                        color="primary"
                      >
                        0000.000000
                      </Typography>
                      <Chip
                        label="Confirmed Transaction"
                        size="small"
                        variant="contained"
                        color="primary"
                      ></Chip>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box py={2}>
                <Grid container>
                  <Grid item xs={1}>
                    <img src={TxnNegative} width="40%" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" color="primary">
                      Currency Sent
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Transaction Submitted: 00:00:00 AM/PM
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                  >
                    <Box>
                      <Typography
                        gutterBottoms
                        textAlign="center"
                        fontWeight="bold"
                        variant="body2"
                        color="primary"
                      >
                        0000.000000
                      </Typography>
                      <Chip
                        label="Confirmed Transaction"
                        size="small"
                        variant="contained"
                        color="secondary"
                      ></Chip>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}

          <Typography textAlign="center" color="primary" variant="h6">
            View all
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};

const Summary = () => {
  return (
    <Box>
      <Box mb={3} textAlign="right">
        <Button variant="contained">Add Wallet</Button>
      </Box>

      <Paper
        variant="outlined"
        style={{
          borderRadius: "10px",
        }}
      >
        <Box padding={3}>
          <Box pb={2} display="flex" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              Default wallet connected
            </Typography>
            <Typography variant="h6" color="primary">
              00000.00000 CUR
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Last Synched MM-DD-YYYY
            </Typography>
            <Typography variant="body2" color="primary">
              $000.00 USD
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Pending transactions: #
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Total Number of Transactions: #
            </Typography>
            <Typography variant="body2" color="secondary">
              View Wallets
            </Typography>
          </Box>
        </Box>
      </Paper>

      <br />

      <Paper
        variant="outlined"
        style={{
          borderRadius: "10px",
        }}
      >
        <Box padding={3}>
          <Box pb={2} display="flex" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              Default wallet connected
            </Typography>
            <Typography variant="h6" color="primary">
              00000.00000 CUR
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Last Synched MM-DD-YYYY
            </Typography>
            <Typography variant="body2" color="primary">
              $000.00 USD
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Pending transactions: #
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="primary">
              Total Number of Transactions: #
            </Typography>
            <Typography variant="body2" color="secondary">
              View Wallets
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default Activity;
