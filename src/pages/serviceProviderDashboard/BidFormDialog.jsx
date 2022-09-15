import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createServiceProviderBid } from '../../api/reducers/serviceProvicerDashboardSlice';
import { toast } from 'react-toastify';

export const BidFormDialog = ({ bidForm, setBidForm }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setBidForm({ ...bidForm, open: false });
    };

    const handleSubmit = () => {
        console.log('submit');
        dispatch(createServiceProviderBid(bidForm)).then(() => {
            handleClose();
            toast.success('bid created successfully');
        });
    };

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
