import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getServiceProviderEvents } from '../../api/reducers/serviceProvicerDashboardSlice';

export const BudgetFormDialog = ({ budgetForm, setBudgetForm }) => {
    const { token, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClose = () => {
        setBudgetForm({ ...budgetForm, open: false });
    };

    const handleSubmit = () => {
        console.log('submit');
        console.log(budgetForm);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .put(
                `http://localhost:3000/api/v1/events/${budgetForm.event.event_id}/service_providers/${budgetForm.event.service_provider_id}/budget`,
                {
                    budget: budgetForm.price,
                },
                config
            )
            .then((res) => {
                toast.success('Budget updated successfully');
                console.log(res.data);
                setBudgetForm({ ...budgetForm, open: false });
                dispatch(getServiceProviderEvents(user.id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // useEffect(() => {
    //     if (!isLoading && isSuccess && !isError && message !== '') {
    //         toast.success(message);
    //         dispatch(reset());
    //     }
    //     if (!isLoading && isError && !isSuccess && message !== '') {
    //         toast.error(message);
    //         dispatch(reset());
    //     }
    // }, [isSuccess, isError, message, dispatch, isLoading]);

    return (
        <Dialog open={budgetForm.open} onClose={handleClose}>
            <DialogTitle>Set a price for {budgetForm.event.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {budgetForm.event.description}
                </DialogContentText>
                <DialogContentText>
                    You can set a price for the event.
                </DialogContentText>
                <TextField
                    onChange={(e) =>
                        setBudgetForm({ ...budgetForm, price: e.target.value })
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
