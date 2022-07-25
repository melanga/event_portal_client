import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const LocalLocations = () => {
    const defaultProps = {
        options: districts,
        getOptionLabel: (option) => option.title,
    };

    return (
        <Autocomplete
            {...defaultProps}
            id="locationSearch"
            clearOnEscape
            margin="dense"
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Your District"
                    variant="standard"
                />
            )}
        />
    );
};
const districts = [
    { title: 'Ampara' },
    { title: 'Anuradhapura' },
    { title: 'Badulla' },
    { title: 'Batticaloa' },
    { title: 'Colombo' },
    { title: 'Galle' },
    { title: 'Gampaha' },
    { title: 'Hambantota' },
    { title: 'Jaffna' },
    { title: 'Kaluthara' },
    { title: 'Kandy' },
    { title: 'Kegalle' },
    { title: 'Kurunagala' },
    { title: 'Mannar' },
    { title: 'Matale' },
    { title: 'Matara' },
    { title: 'Moneragala' },
    { title: 'Mullativ' },
    { title: 'Nuwara Eliya' },
    { title: 'Polonnaruwa' },
    { title: 'Puttalam' },
    { title: 'Ratnapura' },
    { title: 'Trincomalee' },
    { title: 'Vavuniya' },
];

export default LocalLocations;
