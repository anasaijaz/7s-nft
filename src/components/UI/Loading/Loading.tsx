import React from 'react';
import {Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import Metamask from "../../../assets/svg/wallets/metamask.svg";
import CoinBase from "../../../assets/svg/wallets/coinbase.svg";
import Alpha from "../../../assets/svg/wallets/alpha.svg";
import {useLoading} from "../../../hooks/useLoading";

const Loading = () => {
    const [loading, startLoading, stopLoading] = useLoading()
    const handleClose = () => {
        stopLoading()
    }

    return (
        <Dialog
            open={loading}
            onClose={handleClose}
            fullWidth
            maxWidth={'sm'}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                }
            }}
        >
            <Box display='grid' height='200px' style={{
                placeItems: 'center'
            }}>
                <CircularProgress/>
            </Box>
        </Dialog>
    );
};

export default Loading;
