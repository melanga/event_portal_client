import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Categories from '../../resources/Categories';
import { useDispatch, useSelector } from 'react-redux';
import {
    createEventRequirement,
    getEventRequirements,
} from '../../api/reducers/requirementSlice';

const formInitialState = {
    title: '',
    description: 'no description',
    category: '',
};

export default function CreateRequirementDialog() {
    const [form, setForm] = useState(formInitialState);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const { event } = useSelector((state) => state.event);

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
            const requirementData = {
                ...form,
                event_id: event.id,
            };
            dispatch(createEventRequirement(requirementData)).then(() => {
                handleClose();
                dispatch(getEventRequirements(event.id));
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
                <h3 className="userCreateEventButton">Create a Requirement</h3>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a Requirement</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Service Providers can bid on your requirements
                    </DialogContentText>
                    <TextField
                        required={true}
                        autoFocus
                        margin="dense"
                        onChange={handleChange}
                        id="title"
                        name={'title'}
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        onChange={handleChange}
                        id="description"
                        multiline={true}
                        rows={4}
                        name={'description'}
                        label="Event Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
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
