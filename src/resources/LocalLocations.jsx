import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const LocalLocations = ({ handleChange }) => {
    const defaultProps = {
        options: districts,
        getOptionLabel: (option) => option.title,
    };

    return (
        <Autocomplete
            {...defaultProps}
            id="location"
            clearOnEscape
            onChange={(event, value) => {
                const values = {
                    target: {
                        name: 'location',
                        value: value.title,
                    },
                };
                handleChange(values);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Your District"
                    margin={'dense'}
                    variant="outlined"
                    onChange={handleChange}
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
