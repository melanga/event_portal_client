import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import LocalLocations from '../../resources/LocalLocations';
import { useState } from 'react';
import Categories from '../../resources/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, getEvents } from '../../api/reducers/eventSlice';

const formInitialState = {
    name: '',
    location: '',
    description: 'no description',
    date: '',
    category: '',
};

export default function CreateEventDialog() {
    const [form, setForm] = useState(formInitialState);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setForm(formInitialState);
    };

    const handleSubmit = () => {
        if (!Object.values(form).some((value) => value === '')) {
            const eventData = {
                ...form,
                customer_id: user.id,
            };
            dispatch(createEvent(eventData)).then(() => {
                handleClose();
                dispatch(getEvents(user.id));
            });
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <div>
            <Button
                fullWidth={true}
                variant="contained"
                size="medium"
                sx={{
                    borderRadius: '50px',
                    maxHeight: '50px',
                    textTransform: 'none',
                    justifyContent: 'center',
                    color: '#fff',
                    backgroundColor: '#00ADB5',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: '#1A2027',
                        border: '2px solid #00ADB5',
                    },
                }}
                textDecoration="none"
                onClick={handleClickOpen}
                endIcon={<AddIcon color="inherit" />}
            >
                <h3 className="userCreateEventButton">Create a New Event</h3>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create an Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create and plan your dream eventBidData here.
                    </DialogContentText>
                    <TextField
                        required={true}
                        autoFocus
                        margin="dense"
                        onChange={handleChange}
                        id="name"
                        name={'name'}
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={handleChange}
                        multiline={true}
                        rows={4}
                        id="description"
                        name={'description'}
                        label="Event Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        required={true}
                        autoFocus
                        margin="dense"
                        onChange={handleChange}
                        id="date"
                        name={'date'}
                        type="date"
                        fullWidth
                        variant="outlined"
                    />
                    <LocalLocations handleChange={handleChange} />
                    <Categories handleChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
