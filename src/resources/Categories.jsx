import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../api/reducers/serviceProviderSlice';

const Categories = ({ handleChange }) => {
    const { categories } = useSelector((state) => state.service_provider);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Autocomplete
            options={categories}
            getOptionLabel={(option) => option.name}
            id="category"
            clearOnEscape
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onChange={(event, value) => {
                const values = {
                    target: {
                        name: 'category',
                        value: value.name,
                    },
                };
                handleChange(values);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Service Category"
                    margin={'dense'}
                    variant="outlined"
                    onChange={handleChange}
                />
            )}
        />
    );
};

export default Categories;
