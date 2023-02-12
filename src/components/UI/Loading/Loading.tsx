import React from 'react';
import {Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
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
