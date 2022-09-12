import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createServiceProviderBid,
    reset,
} from '../../api/reducers/serviceProvicerDashboardSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const BidFormDialog = ({ bidForm, setBidForm }) => {
    const dispatch = useDispatch();

    const { isSuccess, isError, isLoading, message } = useSelector(
        (state) => state.service_provider_dashboard
    );
    const handleClose = () => {
        setBidForm({ ...bidForm, open: false });
    };

    const handleSubmit = () => {
        console.log('submit');
        dispatch(createServiceProviderBid(bidForm)).then(() => {
            handleClose();
        });
    };

    useEffect(() => {
        if (!isLoading && isSuccess && !isError && message !== '') {
            toast.success(message);
            dispatch(reset());
        }
        if (!isLoading && isError && !isSuccess && message !== '') {
            toast.error(message);
            dispatch(reset());
        }
    }, [isSuccess, isError, message, dispatch, isLoading]);

    return (
        <Dialog open={bidForm.open} onClose={handleClose}>
            <DialogTitle>Bid for {bidForm.event.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {bidForm.event.description}
                </DialogContentText>
                <DialogContentText>
                    *Please note that once you bid you cannot undo it.
                </DialogContentText>
                <TextField
                    onChange={(e) =>
                        setBidForm({ ...bidForm, price: e.target.value })
                    }
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Price"
                    type="number"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};
