import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../api/reducers/serviceProviderSlice';

const Categories = ({ handleChange, value }) => {
    const { categories } = useSelector((state) => state.service_provider);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Autocomplete
            value={value}
            options={categories}
            getOptionLabel={(option) => {
                if (typeof option === 'string' && !option.name) {
                    return option;
                } else {
                    return option.name;
                }
            }}
            id="category"
            clearOnEscape
            isOptionEqualToValue={(option, value) =>
                option.title === value.name
            }
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
