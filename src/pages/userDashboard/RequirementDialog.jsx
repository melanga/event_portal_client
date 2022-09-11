import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import Categories from '../../resources/Categories';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteEventRequirement,
    getEventRequirements,
    getRequirementBids,
} from '../../api/reducers/requirementSlice';
import { Box, ListItem, ListItemButton } from '@mui/material';
import List from '@mui/material/List';

const formInitialState = {
    title: '',
    description: 'no description',
    category: '',
};

export default function RequirementDialog({ data, setRequirementDialog }) {
    const [form, setForm] = useState(formInitialState);
    const { bids } = useSelector((state) => state.requirement);

    useEffect(() => {
        setForm({
            title: data.title,
            description: data.description,
            category: data.category,
        });
    }, [data]);

    const dispatch = useDispatch();
    const { event } = useSelector((state) => state.event);

    useEffect(() => {
        if (data.id) {
            dispatch(getRequirementBids(data.id));
        }
    }, [data.id, dispatch]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setRequirementDialog({ ...data, open: false });
        setForm(formInitialState);
    };

    // get requirement bidding's

    const handleDelete = () => {
        // delete requirement
        dispatch(deleteEventRequirement(data.id)).then(() => {
            handleClose();
            dispatch(getEventRequirements(event.id));
        });
    };

    return (
        <div>
            <Dialog open={data.open} onClose={handleClose}>
                <DialogTitle>Create a Requirement</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Service Providers can bid on your requirements
                    </DialogContentText>
                    <TextField
                        required={true}
                        value={form.title}
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
                        value={form.description}
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
                    <Categories
                        value={form.category}
                        handleChange={handleChange}
                    />
                    <List>
                        {bids.map((bid) => (
                            <ListItem
                                key={
                                    bid.service_provider_id + bid.requirement_id
                                }
                                disablePadding={true}
                                disableGutters={true}
                                sx={{ paddingY: 1 }}
                            >
                                <ListItemButton
                                    onClick={() => {}}
                                    sx={{
                                        borderRadius: '15px',
                                        '&:hover': {
                                            backgroundColor: '#B2DFDB',
                                        },
                                        backgroundColor: '#80CBC4',
                                        boxShadow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'left',
                                            alignItems: 'left',
                                            width: '100%',
                                        }}
                                    >
                                        <p>{bid.service_title}</p>
                                        <p style={{ fontSize: '12px' }}>
                                            {bid.price}
                                        </p>
                                    </Box>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
