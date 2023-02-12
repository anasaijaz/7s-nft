// @ts-nocheck

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideWallet, uiSlice } from "../../../store/slices/uiSlice";
import Metamask from "../../../assets/svg/wallets/metamask.svg";
import CoinBase from "../../../assets/svg/wallets/coinbase.svg";
import Alpha from "../../../assets/svg/wallets/alpha.svg";

const WalletConnector = () => {
  const open = useSelector((state) => state.ui.cxnShown);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideWallet());
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
      <DialogTitle>Purchase Using</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          mb={3}
          justifyContent="space-between"
          width="200px"
          mx="auto"
        >
          <img src={Metamask} width="32px" />
          <img src={CoinBase} width="32px" />
          <img src={Alpha} width="32px" />
        </Box>
        <Typography mb={5} paragraph textAlign="center" variant="body2">
          How to connect to a Wallet for purchase
        </Typography>

        <Button fullWidth variant="contained">
          Place bid
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnector;
