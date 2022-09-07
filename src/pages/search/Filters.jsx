import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Grid, Input, Rating, Slider, TextField } from '@mui/material';
import LocalLocations from './LocalLocations';
import Categories from './Categories';
import MuiInput from '@mui/material/Input';
import StarIcon from '@mui/icons-material/Star';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const sliderInput = styled(MuiInput)`
    width: 42px;
`;

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Filters({
    title,
    setLocation,
    setCategory,
    handleSubmit,
}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 1000) {
            setValue(1000);
        }
    };

    const labels = {
        0.5: '0.5',
        1: '1',
        1.5: '1.5',
        2: '2',
        2.5: '2.5',
        3: '3',
        3.5: '3.5',
        4: '4',
        4.5: '4.5',
        5: '5',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const [valueStar, setValueStar] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                style={{ textTransform: 'none' }}
                startIcon={<TuneIcon />}
                variant="text"
                fullWidth
                sx={{ p: 2, borderRadius: '50px' }}
            >
                Filters
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    {title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Box minWidth="450px">
                        <Categories />
                        <LocalLocations />
                        <Typography variant="body1" gutterBottom mt={3}>
                            Your Budget
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item sm>
                                <Slider
                                    value={
                                        typeof value === 'number' ? value : 0
                                    }
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={value}
                                    size="small"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 1000,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography variant="body1" mt={1} mb={1}>
                            Rating of the Service Provider
                        </Typography>
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Rating
                                name="hover-feedback"
                                value={valueStar}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValueStar(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={
                                    <StarIcon
                                        style={{ opacity: 0.55 }}
                                        fontSize="inherit"
                                    />
                                }
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>
                                    {labels[hover !== -1 ? hover : valueStar]}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        alignItems="left"
                    >
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Apply Filters
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
